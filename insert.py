import argparse
import json

# Teams Json File
JSON_FILE = "data/input.json"

# Teams Data File
TEAMS_FILE = "data/teams.js"

# Create the argument parser
parser = argparse.ArgumentParser(description="Process arguments for a Pokémon utility.")

# Add string arguments
parser.add_argument(
    "--format", type=str, required=True, help="The format (e.g., Singles, Doubles)."
)
parser.add_argument(
    "--subformat",
    type=str,
    required=False,
    help="The subformat (e.g. VGC2024).",
    default="default",
)
parser.add_argument(
    "--name", type=str, required=True, help="The name of the team"
)
parser.add_argument(
    "--owner", type=str, required=False, help="The name of the team owner", default="Scrubbs"
)
parser.add_argument(
    "--link",
    type=str,
    required=False,
    help="A link to the team owner's profile or website",
    default="https://twitter.com/SirScrubbington",
)

# Add the 'sets' argument with validation
parser.add_argument("sets", type=str, help="Path to the .sets or .team file.")

# Parse the arguments
args = parser.parse_args()

if __name__ == "__main__":

    # Json data
    data = {}

    # Open the teams json file
    with open(JSON_FILE, "r+", encoding="utf-8") as jf:

        # Load the json data
        data = json.load(jf)

        team = {
            "name": args.name, 
            "owner": {
                args.owner, 
                args.link
            }, 
            "sets": args.sets
        }

        print(team)

        jf.seek(0)

        # Clear contents
        jf.truncate()

        # Save the json data
        json.dump(data, jf, indent=2)

    # Save to the teams data file
    with open(TEAMS_FILE, "w", encoding="utf-8") as tf:

        # Dump data to string
        out = f"const TEAMS = {json.dumps(data, indent=2)}"

        # Write to file
        tf.write(out)
