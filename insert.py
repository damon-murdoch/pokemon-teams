import argparse
import json
import os

# Pokemon Showdown! Set Parser
from pylib.set_parser import parse_sets, parse_json

# Constant Values
from pylib.constants import JSON_FILE, TEAMS_FILE, DUMP_FOLDER

# Create the argument parser
parser = argparse.ArgumentParser(description="Process arguments for a Pokémon utility.")

# Add string arguments
parser.add_argument(
    "-f",
    "--format",
    type=str,
    required=False,
    help="The format (e.g., Singles, Doubles).",
)
parser.add_argument(
    "-sf",
    "--folder",
    type=str,
    required=False,
    help="The folder (e.g. VGC2024).",
    default="default",
)
parser.add_argument(
    "-n", "--name", type=str, required=False, help="The name of the team"
)
parser.add_argument(
    "-d", "--desc", type=str, required=False, help="Description for the team"
)
parser.add_argument(
    "-o",
    "--owner",
    type=str,
    required=False,
    help="The name of the team owner",
    default="Scrubbs",
)
parser.add_argument(
    "-l",
    "--link",
    type=str,
    required=False,
    help="A link to the team owner's profile or website",
    default="https://x.com/SirScrubbington",
)

# Add the 'sets' argument with validation
parser.add_argument("action", type=str, help="Path to the .sets or .team file.")

def dump_formats(data, path: str):

    # Formats table
    formats = {}

    # Loop over the keys
    for format in data.keys():
        # Insert keys
        formats[format] = []

        # Loop over the folders
        for folder in data[format].keys():
            # Insert folder
            formats[format].append(folder)

    # Generate output filename
    outfile = os.path.join(path, "formats.json")

    # Open output file
    with open(outfile, "w+") as f:
        # Write to file
        json.dump(formats, f, indent=4)

def dump_teams(data, path: str):

    # Output folder not found
    if not os.path.exists(path):
        # Create folder
        os.makedirs(path)

    # Loop over the formats
    for fkey in data:

        # Dereference format
        format = data[fkey]

        # Loop over folders
        for skey in format:

            # Dereference folder
            folder = format[skey]

            # Loop over teams
            for team in folder:

                # Generate output filename (Convert to lowercase)
                filename = f"{fkey}_{skey}_{team['name']}.team".lower()

                # Dump the team to showdown format
                team = parse_json(team["sets"])

                # Create the team filepath
                filepath = os.path.join(path, filename)

                # Write the team to the file
                with open(filepath, "w") as file:
                    file.write(team)


def load_sets(path: str):

    sets = []

    with open(path, "r") as file:

        # Read file contents
        content = file.read()

        # Parse the sets
        sets = parse_sets(content)

    return sets


def update_json(file, data):

    # Clear file
    file.seek(0)
    file.truncate()

    # Save the json data
    json.dump(data, file, indent=2)


def update_teams(file, data):

    # Dump data to string
    out = f"const TEAMS = {json.dumps(data, indent=2)}"

    # Write to file
    file.write(out)


def insert_team(file, data, sets, name, format, folder, desc, owner, link):

    # Create team
    team = {
        "name": name,
        "desc": desc,
        "owner": {"name": owner, "link": link},
        "sets": sets,
    }

    # Format not present
    if not format in data:
        data[format] = {}

    # Dereference the format
    format = data[format]

    # Folder not present
    if not folder in format:
        format[folder] = []

    # Dereference the folder
    folder = format[folder]

    # Add team to folder
    folder.append(team)

    # Update json file
    update_json(file, data)

    # Save to the teams data file
    with open(TEAMS_FILE, "w", encoding="utf-8") as tf:
        update_teams(tf, data)


if __name__ == "__main__":

    # Parse the arguments
    args = parser.parse_args()

    # Open the teams json file
    with open(JSON_FILE, "r+", encoding="utf-8") as jf:

        # Load the json data
        data = json.load(jf)

        # Check if the sets file exists
        if os.path.exists(args.action):

            # Check required params

            if args.name == None:
                raise Exception("--name parameter is required!")

            if args.format == None:
                raise Exception("--format parameter is required!")

            # Parse the sets
            sets = load_sets(args.action)

            # Insert the team using the provided arguments
            insert_team(
                sets,
                args.name,
                args.format,
                args.folder,
                args.desc,
                args.owner,
                args.link,
            )
        # Dump formats, folders
        elif args.action == "dump_formats":
            dump_formats(data, DUMP_FOLDER)
        # Dump teams to 'output'
        elif args.action == "dump":
            print("Dumping teams to .team format ...")
            dump_teams(data, DUMP_FOLDER)
        # Update teams.js from input.json
        elif args.action == "update":
            print("Updating teams file from json ...")

            # Update json file
            update_json(jf, data)

            # Save to the teams data file
            with open(TEAMS_FILE, "w", encoding="utf-8") as tf:
                update_teams(tf, data)
        else:
            raise Exception(f"Unhandled command: '{args.action}' ...")
