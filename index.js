// Get the page's query string
const query = window.location.search;

// Retrieve the params from the string
const params = new URLSearchParams(query);

// Show the page title
function showPageTitle(title)
{ 
  // Set the document title to the title
  document.title = title;

  // Set the page subtitle to the title
  document.getElementById('sitesubtitle').innerHTML =  title;
}

// Get the table for the set
function showTableSet(body, set)
{
  // Create the table for the given set
  let table = document.createElement('table');

  // Set the classlist to the table
  table.classList.add('table');
  table.classList.add('table-dark');

  let row_content = `
  <tr>
    <th class='bordered align-middle'>
        Pokémon
    </th>
    <th class='bordered align-middle' id='species'>`
      + set.species + 
    `</th>
    <td class='bordered align-middle' rowspan=2>`
      + getColSprite([set]) + 
    `</td>
  </tr>
  <th class='bordered'>
    Ability
  </th>
  <td class='bordered' id=ability1>`
    // Add the ability to the form
    + set.ability + 
  `</td>
  <tr>

  </tr>
  <tr>
    <th class='bordered'>
        Held Item
    </th>
    <td class='bordered' id='item1'>`
      // Add the item to the form
      + set.item + 
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                HP
            </small>
        </sup>
        <small>`
          // Add the hp to the EVs 
          + set.evs.hp + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.hp + 
          `</small>
        </sub>
    </td>
  </tr>
  <tr>
    <th>
      Nature
    </th>
    <td>`
      + set.nature + 
    `
    </td>
    <td class='bordered'>
        <sup>
            <small>
                Atk
            </small>
        </sup>
        <small>`
          // Add the atk to the EVs 
          + set.evs.atk + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.atk + 
          `</small>
        </sub>
    </td>
  </tr>
  <tr>
    <th class='bordered'>
        Move 1
    </th>
    <td class='bordered' id='move11'>`
      // Add the first move to the form
      + set.moves[0] + 
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                Def
            </small>
        </sup>
        <small>`
          // Add the def to the EVs 
          + set.evs.def + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.def + 
          `</small>
        </sub>
    </td>
  </tr>
  <tr>
    <th class='bordered'>
        Move 2
    </th>
    <td class='bordered' id='move2'>`
      // Add the first move to the form
      + set.moves[1] + 
    `</td>
    <td class='bordered'>
        <sup>
            <small>
            Sp. Atk
            </small>
        </sup>
        <small>`
          // Add the def to the EVs 
          + set.evs.spa + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.spa + 
          `</small>
        </sub>
    </td>
  </tr>
  <tr>
    <th class='bordered'>
        Move 3
    </th>
    <td class='bordered' id='move31'>`
      // Add the first move to the form
      + set.moves[2] + 
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                Sp. Def
            </small>
        </sup>
        <small>`
            // Add the def to the EVs 
            + set.evs.spd + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.spd + 
          `</small>
        </sub>
    </td>
  </tr>
  <tr>
    <th class='bordered'>
        Move 4
    </th>
    <td class='bordered' id='move41'>`
      // Add the first move to the form
      + set.moves[3] + 
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                Speed
            </small>
        </sup>
        <small>`
            // Add the def to the EVs 
            + set.evs.spe + 
        `</small>
        <sub>
          <small>`
            // Add the def to the EVs
            + set.ivs.spe + 
          `</small>
        </sub>
    </td>
  </tr>
  `;

  // Add the row to the table
  table.innerHTML = row_content;

  // Add the row to the content
  body.appendChild(table);
}

// Show the team page
function showPageTeam(format, folder, team)
{
  // Get the data for the given team
  let data = TEAMS[format][folder][team];

  // Show the title for the format and team
  showPageTitle(toCapitalCase(data.name));
  
  // Update the format drop-down
  showFormatDropdown();

  // Update the folder drop-down
  showFolderDropdown(format);

  // Set the selected property for the format
  document.getElementById(format).selected = 'selected';

  // Set the selected property for the folder
  document.getElementById(folder).selected = 'selected';

  // Get the page body from the content
  let body = document.getElementById('content');

  // Create the container element
  let container = document.createElement('div');
  
  // Set the class list for the row
  container.classList.add('container');

  // Create the row element
  let row = document.createElement('div');

  // Set the class list for the row
  row.classList.add('row');

  // Loop over the sets
  for (let set of data.sets)
  {
    // Create the column element
    let col = document.createElement('div');

    // Set the class list for the column
    col.classList.add('col-sm-6');

    // Add the set to the table
    showTableSet(col, set);

    // Add the col to the row
    row.appendChild(col);
  }

  // Add the row to the container
  container.appendChild(row);

  // Add the table to the body
  body.appendChild(container);

  // Create the paste export button
  let btn = document.createElement('button');

  // Set the id for the button
  btn.id = 'paste-export';
  btn.innerHTML = "Showdown Export";

  // Set the class list for the button
  btn.classList.add('btn');
  btn.classList.add('btn-secondary');

  // Add the button to the body
  body.appendChild(btn);

  // Export to clipboard event listener
  document.getElementById('paste-export').addEventListener('click', async event => {
    
    // If the clipboard module exists in the client's browser
    if(navigator.clipboard)
    {
      // Export string which will be copied to the clipboard
      content = parseJson(data.sets);
      
      try
      {
        // Copy the string to the clipboard
        await navigator.clipboard.writeText(content);
        
        // Successful copy alert
        window.alert("Team '" + data.name +  "' copied to clipboard successfully.");
      }
      catch (err)
      {
        // Report the failure to the error console
        console.error('Failed to copy content "' + content + '"! Reason: "' + err + '"');
      }
    }
    else // Clipboard module is not available
    {
      // Report failure to console, continue
      console.error('Clipboard interaction not supported by browser.');
    }
  });
}

function toCapitalCase(str)
{
  // Split the string on the spaces
  let spl = str.split(' ');

  // Loop over the string splits
  for (let i=0; i<spl.length; i++)
  {
    // If the string is greater
    // than one character
    if (spl[i].length > 1)
    {
      // Capitalise the first letter, add the rest as lowercase
      spl[i] = spl[i].charAt(0).toUpperCase() + spl[i].slice(1).toLowerCase();
    }
    else // String is one or less characters
    {
      // Convert the string to upper case
      spl[i] = spl[i].toUpperCase();
    }
  }

  // Join the split string on spaces
  return spl.join(" ");
}

function getColSprite(sets)
{
  // Exactly 3/4 of original width
  let spr_width = '51px';

  // Exactly 3/4 of original height
  let spr_height = '42px';

  // Column contents
  let col = [];

  // Sprite main directory
  let spdir = 'img/sprite/gen7x/';

  // Argument is not an array
  if (!Array.isArray(sets))
  {
    // Convert it to an array
    sets = [sets];
  }

  // Current number of sets
  let it = 0;

  // Loop over the sets
  for(let set of sets)
  {
    // While we have
    // processed six
    // sets or less
    if (it < 6)
    {
      // Sprite source
      let src = spdir;

      // If the set is a shiny
      if (
        set.other.hasOwnProperty('shiny') && 
        set.other.shiny == 'Yes'
      )
      {
        // Add shiny to the path
        src += 'shiny/';
      }
      else // Not shiny
      {
        // Add regular to the path
        src += 'regular/';
      }

      // Add the name (converted to lower case) to the path
      src += set.species.toLowerCase().trim().replace(" ", "-").replace("’","").replace(".", "") + '.png';

      // Add the sprite to the column
      col.push("<img width='" + spr_width + "' height='" + spr_height + "' src='" + src + "' alt='" + set.species + "'>");

      // Increment the iterator
      it++;
    }
    else // We've processed more than six
    {
      // Don't show the sprite, just show the number remaining
      col.push("<p> ... (" + (sets.length - it) + " more)</p>");

      // Break the loop
      break;
    }
  }

  // Return the array joined as a string
  return col.join("");
}

function showRowTeam(body, format, folder, index, data)
{
  // Table row element which will be appended
  let tr = document.createElement('tr');

  // Table row content
  let row = [
    "<td scope='row'>" + 
    // Hyperlink to show the page for the specific team
    "<a class='link-light' href='?team=" + index + "&format=" + format + "&folder=" + folder + "'>" + toCapitalCase(data.name) + "</a>",
    getColSprite(data.sets),

    // Hyperlinks to show all teams for the folder in the format
    "<a class='link-light' href='?format=" + format + "'>" + format + "</a>"
  ];

  // If folder is not default
  if (folder.toLowerCase() !== 'default')
  {
    // Add it to the row
    row.push(
      // Hyperlinks to show all teams for the folder in the format
      "<a class='link-light' href='?format=" + format + "&folder=" + folder + "'>" + folder + "</a>"
    );
  }
  else // Folder is default
  {
    // Add a dash
    row.push("-");
  }
  
  // Set the row contents to the joined list
  tr.innerHTML = row.join("</td><td>");

  // Create the copy table element
  let td = document.createElement('td');

  // Create the copy link object
  let copy = document.createElement('a');
  
  // Set the link text to copy
  copy.innerHTML = 'copy';

  // Set the link to a light link
  copy.classList = 'link-light';

  // Set the link target to '#'
  copy.href = '#';

  // Add the on-click event to the copy button
  
  // Export to clipboard event listener
  copy.addEventListener('click', async event => {
    
    // If the clipboard module exists in the client's browser
    if(navigator.clipboard)
    {
      // Export string which will be copied to the clipboard
      content = parseJson(data.sets);
      
      try
      {
        // Copy the string to the clipboard
        await navigator.clipboard.writeText(content);
        
        // Successful copy alert
        window.alert("Team '" + data.name +  "' copied to clipboard successfully.");
      }
      catch (err)
      {
        // Report the failure to the error console
        console.error('Failed to copy content "' + content + '"! Reason: "' + err + '"');
      }
    }
    else // Clipboard module is not available
    {
      // Report failure to console, continue
      console.error('Clipboard interaction not supported by browser.');
    }
  });

  // Add the copy link to the element
  td.appendChild(copy);

  // Add the element to the row
  tr.appendChild(td);

  // Add the row to the body
  body.appendChild(tr);
}

function showTableHome(body, format = null, folder = null)
{
  // Lists containing formats /
  // folders to be processed
  let process = [];

  // If the format is not null
  if (format !== null)
  {
    // If the folder is not null
    if (folder !== null)
    {
      // Push the format, folder to process list
      process.push([format, folder]);
    }
    else // Folder is not set
    {
      // Just add the format
      process.push([format]);
    }
  }
  else // Format is not set
  {
    // All of the formats in the list
    let fmts = Object.keys(TEAMS);

    // Sort the keys
    fmts.sort()
    
    // Reverse the sort
    fmts.reverse();

    // Loop over all of the formats
    for(let fmt of fmts)
    {
      // Append format to the list
      process.push([fmt]);
    }
  }

  // Loop over the processes
  for(let p of process)
  {
    // Dereference format
    let fmt = p[0];

    // Assigned later
    let folders;

    // If folder is provided
    if (p.length > 1)
    {
      // Dereference folder
      folders = [p[1]];
    }
    else // No folder specified
    {
      // Get all of the folders for the format
      folders = Object.keys(TEAMS[fmt]);
    }

    // Sort the keys
    folders.sort()
    
    // Reverse the sort
    folders.reverse();

    // Loop over the folders
    for(let fldr of folders)
    {
      // Index of the team
      let i = 0; 

      // Loop over the teams
      for (team of TEAMS[fmt][fldr])
      {
        // Add a row for the team to the table
        showRowTeam(body, fmt, fldr, i, team);

        // Increment the index
        i++;
      }
    }
  }
}

function showFormatDropdown()
{
  // Get the format drop down element
  let format = document.getElementById('sel-format');

  // Get the keys from the teams
  let keys = Object.keys(TEAMS);

  // Sort the keys alphabetically
  keys.sort();

  // Get the format keys
  for (let key of keys)
  {
    // Option for the format
    let option = document.createElement('option');

    // Set option value to the key
    option.value = key;

    // Set option id to the key
    option.id = key;

    // Set innerhtml to the key
    option.innerHTML = key;

    // Add the option to the select
    format.appendChild(option);
  }
}

function setFormat(format)
{
  // If folder is selected
  if (params.has('folder'))
  {
    // Get the folder from the params
    params.delete('folder');
  }

  // If team is selected
  if (params.has('team'))
  {
    // Get the team from the params
    params.delete('team');
  }

  // Set the format to the selected
  params.set('format', format);

  // Reload the page with the requested format
  window.location.href = window.location.pathname + '?' + params.toString();
}

function showFolderDropdown(format)
{
  // Get the format drop down element
  let folder = document.getElementById('sel-folder');

  // Get the keys from the teams
  let keys = Object.keys(TEAMS[format]);

  // Sort the keys alphabetically
  keys.sort();

  // Get the format keys
  for (let key of keys)
  {
    // Option for the format
    let option = document.createElement('option');

    // Set option value to the key
    option.value = key;

    // Set option id to the key
    option.id = key;

    // Set innerhtml to the key
    option.innerHTML = key;

    // Add the option to the select
    folder.appendChild(option);
  }
}

function setFolder(folder)
{
  // If team is selected
  if (params.has('team'))
  {
    // Get the team from the params
    params.delete('team');
  }

  // Set the folder to the selected
  params.set('folder', folder);

  // Reload the page with the requested format and folder
  window.location.href = window.location.pathname + '?' + params.toString();
}

// Show the home page
function showPageHome(format = null, folder = null)
{
  // Placeholder title
  let title = "";

  // Populate the format select
  showFormatDropdown();

  // If format is set
  if (format)
  {
    // Set the title to the format
    title = format;

    // Update the selected drop-down element for the format
    document.getElementById(format).selected = 'selected';
    
    // Populate the folder select
    showFolderDropdown(format);

    // If folder is set
    if (folder)
    {
      // Add the folder to the title
      title += " - " + folder;
    }
  }
  else // No format / folder set
  {
    // Set title to default
    title = 'Pokémon Teams';
  }

  // Show the title home section
  showPageTitle(title);

  // Get the page body from the content
  let body = document.getElementById('content');

  // Create the table element
  let table = document.createElement('table');

  // Set the classes for the table
  table.classList.add('table');
  table.classList.add('table-dark');
  table.classList.add('table-striped');

  // Create the table header
  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">
          Description
        </th>
        <th scope="col">
          Pokémon
        </th>
        <th scope="col">
          Format
        </th>
        <th scope="col">
          Folder
        </th>
        <th scope="col">
          Copy
        </th>
      </tr>
    </thead>
  `;

  // Create the table body
  let tbody = document.createElement('tbody');

  // Populate the table body
  showTableHome(tbody, format, folder)

  // Add the table body to the table
  table.appendChild(tbody)

  // Add the document to the table
  body.appendChild(table);
}

// Default null variables
let  format, folder, team;

// If format is selected
if (params.has('format'))
{
  // Get the format from the params
  format = params.get('format');
}

// If folder is selected
if (params.has('folder'))
{
  // Get the format from the params
  folder = params.get('folder');
}

// If team is selected
if (params.has('team'))
{
  // Get the team from the params
  team = params.get('team');

  // Show the page for the team
  showPageTeam(format, folder, team);
}
else // No year selected
{
  // Show the home page
  showPageHome(format, folder);
}