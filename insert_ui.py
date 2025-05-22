import json
import os
import tkinter as tk
from tkinter import ttk, messagebox

from pylib.set_parser import parse_sets, parse_json
from pylib.constants import JSON_FILE, FORMATS

# Main insert team function
from insert import insert_team

def on_format_change(event=None):
    selected_format = format_var.get()
    folders = FORMATS.get(selected_format, ["default"])
    folder_dropdown["values"] = folders
    folder_var.set(folders[0])

def submit_form():

    try:

        name = name_var.get().strip()
        if name == "":
            raise Exception("Team name is required!")

        desc = desc_var.get().strip()  # No default

        format = format_var.get().strip()
        if format == "":
            raise Exception("Format is required!")

        # Use the provided folder, or 'Default'
        folder = folder_var.get().strip() or "Default"

        # Use the provided owner, or 'Scrubbs'
        owner = owner_var.get().strip() or "Scrubbs"

        # Use the provided link, or 'https://x.com/SirScrubbington'
        link = link_var.get().strip() or "https://x.com/SirScrubbington"

        team = team_text.get("1.0", tk.END).strip()
        if team == "":
            raise Exception("Team paste is required!")

        # Open the teams json file
        with open(JSON_FILE, "r+", encoding="utf-8") as file:

            # Load the json data
            data = json.load(file)

            # TODO: Popup if no name / format provided

            # Parse sets from the team
            sets = parse_sets(team)

            # Insert the team using the provided arguments
            insert_team(file, data, sets, name, format, folder, desc, owner, link)

        # Cleanup vars

        # Entry widgets
        name_var.set("")
        desc_var.set("")
        owner_var.set("")
        link_var.set("")

        # Text field widget
        team_text.delete("1.0", tk.END)

    # Generic error handler
    except Exception as e:
        messagebox.showerror("An Error Occured", str(e))


if __name__ == "__main__":

    root = tk.Tk()
    root.title("Team Input Form")
    root.iconbitmap("img/favicon.ico")

    padding = {"padx": 10, "pady": 5}

    # Variables
    format_var = tk.StringVar()
    folder_var = tk.StringVar()
    name_var = tk.StringVar()
    desc_var = tk.StringVar()
    owner_var = tk.StringVar()
    link_var = tk.StringVar()

    # Padding dictionary
    padding = {"padx": 5, "pady": 5}

    # ===== ROW 1: Team Name & Description =====
    row1 = ttk.Frame(root)
    row1.pack(fill="x", **padding)

    ttk.Label(row1, text="Team Name").grid(row=0, column=0, sticky="w")
    ttk.Entry(row1, textvariable=name_var).grid(row=1, column=0, sticky="ew", **padding)

    ttk.Label(row1, text="Description").grid(row=0, column=1, sticky="w")
    ttk.Entry(row1, textvariable=desc_var).grid(row=1, column=1, sticky="ew", **padding)

    row1.columnconfigure(0, weight=1)
    row1.columnconfigure(1, weight=1)

    # ===== ROW 2: Format & Folder (DROPDOWNS) =====
    row2 = ttk.Frame(root)
    row2.pack(fill="x", **padding)

    ttk.Label(row2, text="Format").grid(row=0, column=0, sticky="w")

    format_dropdown = ttk.Combobox(row2, textvariable=format_var, values=list(FORMATS.keys()), state="readonly")
    format_dropdown.grid(row=1, column=0, sticky="ew", **padding)
    format_dropdown.current(0)  # Set default selection

    ttk.Label(row2, text="Folder").grid(row=0, column=1, sticky="w")

    folder_dropdown = ttk.Combobox(row2, textvariable=folder_var, values=['Default'], state="readonly")
    folder_dropdown.grid(row=1, column=1, sticky="ew", **padding)
    folder_dropdown.current(0)  # Set default selection

    # Load initial folder
    on_format_change()

    format_dropdown.bind("<<ComboboxSelected>>", on_format_change)

    row2.columnconfigure(0, weight=1)
    row2.columnconfigure(1, weight=1)

    # ===== ROW 3: Owner & Link =====
    row3 = ttk.Frame(root)
    row3.pack(fill="x", **padding)

    ttk.Label(row3, text="Owner").grid(row=0, column=0, sticky="w")
    ttk.Entry(row3, textvariable=owner_var).grid(
        row=1, column=0, sticky="ew", **padding
    )

    ttk.Label(row3, text="Link").grid(row=0, column=1, sticky="w")
    ttk.Entry(row3, textvariable=link_var).grid(row=1, column=1, sticky="ew", **padding)

    row3.columnconfigure(0, weight=1)
    row3.columnconfigure(1, weight=1)

    # ===== Team Paste =====
    ttk.Label(root, text="Team Paste").pack(anchor="w", **padding)
    team_text = tk.Text(root, height=10)
    team_text.pack(fill="both", expand=True, **padding)

    # ===== Submit Button =====
    ttk.Button(root, text="Submit", command=submit_form).pack(pady=10)

    root.mainloop()
