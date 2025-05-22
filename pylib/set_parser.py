# Regular expressions library
import re

# Nickname (Species) (Gender) @ Item
# Key: Value
# EVs: x HP / x Atk / x Def / x SpA / x SpD / x Spe
# IVs: x HP / x Atk / x Def / x SpA / x SpD / x Spe
# Nature Nature
# - Move 1
# - Move 2
# - Move 3
# - Move 4


# stat_template(init: int): object
# Return a pokemon stat field template,
# with a default value in each field of 0
# or 'init' if specified
def stat_template(init=0):

    return {"hp": init, "atk": init, "def": init, "spa": init, "spd": init, "spe": init}


# set_template(void): object
# Return a pokemon set template
def set_template():

    return {
        "species": "",
        "nickname": "",
        "gender": "",
        "ability": "",
        "evs": stat_template(0),
        "ivs": stat_template(31),
        "nature": "",
        "item": "",
        "moves": [],
        "other": {},
    }


# parseStats(stats: object, str: string): object
# Given an existing stats object and a string containing stats,
# Parses the string and returns a new stats object containing the fields
def parse_stats(stats, str):

    # Split the string on the seperator
    s = str.split("/")

    # Loop over the stats
    for stat in s:

        # Split the stat on the space
        st = stat.strip().split(" ")

        # Switch on the stat
        match st[1].lower():

            case "hp":
                stats["hp"] = int(st[0])
            case "atk":
                stats["atk"] = int(st[0])
            case "def":
                stats["def"] = int(st[0])
            case "spa":
                stats["spa"] = int(st[0])
            case "spd":
                stats["spd"] = int(st[0])
            case "spe":
                stats["spe"] = int(st[0])

    # Return the updated object
    return stats


# parseSet(str: string): object
# Given a string sequence containing
# Pokemon showdown sets, returns a json
# list of the sets converted to objects.
def parse_sets(str):

    # Empty array of sets
    sets = []

    # Get a new set template
    current = None

    # Loop over each line in the string (lowercase)
    for line in str.split("\n"):

        # If the line contains the 'ability:' text
        if "ability:" in line.lower():

            # Set the ability to the ability pulled from the text
            current["ability"] = line.split(":")[1].strip()

        # If the line  contains the 'evs:' text
        elif "evs:" in line.lower():

            # Parse the stats from the text, set it to the current
            current["evs"] = parse_stats(current["evs"], line.split(":")[1].strip())

        # If the line  contains the 'ivs:' text
        elif "ivs:" in line.lower():

            # Parse the stats from the text, set it to the current
            current["ivs"] = parse_stats(current["ivs"], line.split(":")[1].strip())

        # Series of increasingly obscure cases
        # Check if this is the first line of the pokemon
        # Can be formatted a bunch of different ways
        # Case 1: No Item, Gender, Nickname: Species
        # Case 2: No Item, Gender: Nickname (Species)
        # Case 3: No Item: Nickname (Species) (Gender)
        # Case 4: Full: Nickname (Species) (Gender) @ Item

        elif (
            "@" in line
            or "(" in line
            or (line.strip() != "" and len(line.strip().split(" ")) == 1)
        ):

            # '@' in line: Will always trigger if item is specified
            # '(' in line: Will always trigger if gender / nn is specified
            # "line.strip() != '' && line.strip().split(' ').length == 1)": Will trigger if nothing is specified

            # If a set template has not been created yet, create one
            # If one already exists, add it to the list and create a new one
            if current != None:

                # Add the current to the list
                sets.append(current)

            # Create a new set object
            current = set_template()

            # If set is male
            if "(m)" in line.lower():

                # Remove gender from the line
                line = line.replace("(m)", "").replace("(M)", "")

                # Set set gender to male
                current["gender"] = "m"

            # If the set is female
            if "(f)" in line.lower():

                # Remove gender from the line
                line = line.replace("(f)", "").replace("(F)", "")

                # Set set gender to male
                current["gender"] = "f"

            # If line still contains any '()', must be a nickname
            if "(" in line:

                # Split the string on any '(' or ')'
                li = re.split("(\(|\))", line)

                # Add the nickname to the object
                current["nickname"] = li[0].strip()

                # Remove the first two objects (nickname + '(')
                li = li[2:]

                # Add the species to the object
                current["species"] = li[0].strip()

                # Remove the first two objects (species + ')')
                li = li[2:]

                # Join the line back together
                line = "".join(li)

            # If line contains a '@', must be an item after it
            if "@" in line:

                # Split the string on the '@' token
                li = line.strip().split("@")

                # If the first index is not null
                if li[0].strip() != "":

                    # Set the species to the value of the first index
                    current["species"] = li[0].strip()

                # If the second index is not null
                if li[1].strip() != "":

                    # Set the species to the value of the first index
                    current["item"] = li[1].strip()

        # All other random arbitrary k/v pairs, add to the other property
        elif ":" in line:

            # Key: Value, i.e. Shiny: Yes, Ability: Intimidate, etc.

            # Split the line on the ':'
            li = line.strip().split(":")

            # Assign a 'key' in the 'other' property of the
            # current object to the 'value'
            current["other"][li[0].strip().lower()] = li[1].strip()

        # If the line contains the 'nature' text
        elif "nature" in line.lower():

            # Retrieve the nature from the string and add it to the object
            current["nature"] = line.split(" ")[0].strip()

        # If the line starts with a '-', is a move
        elif line.strip().startswith("-"):

            # Add the move text to the moves list  for the set
            current["moves"].append(line.replace("-", "").strip())

    # Made it to the end, add the last set to the stack
    sets.append(current)

    # Return all of the parsed sets
    return sets


# parseStatsJson(stats: Object, ivs: Boolean): String
# Given a stats object and a switch on if the stats are
# ivs or evs, parses the stats and returns a string object
# for exporting.
def parse_stat_json(stats, ivs=False):

    # Pretty text for each key

    text = {
        "hp": "HP",
        "atk": "Atk",
        "def": "Def",
        "spa": "SpA",
        "spd": "SpD",
        "spe": "Spe",
    }

    # List of stats
    # Will be joined on '/'
    list = []

    # Loop over that stat keys
    for key in stats:

        # Get the stat value
        val = stats[key]

        # If ivs is set, ensure the value is not 31 (default)
        # If ivs is not set, ensure it is not 0 (default)
        if not ((ivs and val == 31) or ((not ivs) and val == 0)):

            # Add it to the list
            list.append(str(val) + " " + text[key])

    # Return list joined on slashes
    return " / ".join(list)


# Loops over the sets,
# converting them back
# to showdown export format
def parse_json(sets):

    # List of sets to return
    # Will be joined before returning
    list = []

    # Loop over the sets
    for set in sets:

        # Lines for the item
        # Will be joined before appending
        item = []

        # Nickname (Species) @ Item
        row_name = ""

        # If a nickname is set
        if set["nickname"]:
            # Add the nickname and species to the export
            row_name = set["nickname"] + " (" + set["species"] + ")"
        else:  # Nickname not set
            # Add just the species to the export
            row_name = set["species"]

        # If an item is set
        if set["item"]:
            # Add the item to the set
            row_name += " @ " + set["item"]

        # Add the name row to the items list
        item.append(row_name)

        # Ability: ability

        # If an ability is set
        if set["ability"]:
            # Add the ability row to the items list
            item.append("Ability: " + set["ability"])

        # Get stat string for ivs, ivs switch true
        ivs_str = parse_stat_json(set["ivs"], True)

        # ivs string not empty
        if ivs_str:
            # Add to item list
            item.append("IVs: " + ivs_str)

        # Get stat string for evs, ivs switch false
        evs_str = parse_stat_json(set["evs"], False)

        # evs string not empty
        if evs_str:
            # Add to item list
            item.append("EVs: " + evs_str)

        # Loop over the misc. attributes
        for key in set["other"]:

            # Get the value of the attribute
            val = set["other"][key]

            # Convert the first letter of the key to upper case
            upper = key[:1].upper() + key[1:]

            # Add the key, value to the set
            item.append(str(upper) + ": " + str(val))

        # If nature is specified
        if set["nature"]:
            # Add the nature to the form
            item.append(set["nature"] + " nature")

        # Loop over the moves
        for move in set["moves"]:
            # Add the move to the item
            item.append("- " + move)

        # Add the item to the list, joined on newlines
        list.append("\n".join(item))

    # Return the list, joined on double newline
    return "\n\n".join(list)
