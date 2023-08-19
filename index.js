// Get the page's query string
const query = window.location.search;

// Retrieve the params from the string
const params = new URLSearchParams(query);

// Show the page title
function showPageTitle(title) {
  // Set the document title to the title
  document.title = title;

  // Set the page subtitle to the title
  document.getElementById('sitesubtitle').innerHTML = title;
}

function getTypeColor(type) {

  // Placeholder
  color = "";

  // Color is found
  if (type in COLORS) {
    // Get the color for the type
    color = COLORS[type];
  }
  else // Color not found
  {
    // Warning
    console.warn(`Color for type '${type}' not found!`)
  }

  // Return color
  return color;
}

// Get the table for the set
function showTableSet(body, set) {

  // Container for the table
  let table_div = document.createElement('div');

  // Create the table for the given set
  let table = document.createElement('table');

  // Set the classlist to the table
  table.classList.add('table');
  table.classList.add('table-dark');

  // Lower-case version of the species name
  const speciesLower = set.species.toLowerCase();

  // Species Name Text Colour
  let speciesColor = "";

  // Find the data for the given pokemon species
  const species = POKEMON.find(x => x.species == speciesLower);

  // Species is found
  if (species){
    // Get the colour for the species first type
    speciesColor = getTypeColor(species.type1);
  }
  else // Species not found
  {
    console.warn(`Data for species '${speciesLower}' not found!`);
  }

  // Tera Type Placeholder
  // For formats that don't support it
  let teraType = '-';

  // Tera Type Text Colour
  let teraColor = "";

  // Tera type is in the set
  if ('tera type' in set.other) {
    // Get the tera type from the set
    teraType = set.other['tera type'];
  }

  // Lower-case tera type (for color switch_)
  const teraTypeLower = teraType.toLowerCase();

  // Get the colour for the tera type
  teraColor = getTypeColor(teraTypeLower);

  // Switch on item
  const itemLower = set.item.toLowerCase();

  // item color string
  let itemColor = "";

  // Switch on item (lower case)
  switch (itemLower) {
    // Bug Type
    case 'beedrillite': 
    case 'scizorite': 
    case 'heracronite': 
    case 'tanga berry':
    case 'silver powder':
    case 'insect plate':
    case 'bug gem':
    case 'buginium z': {
      itemColor = getTypeColor('bug');
    }; break;

    // Dark Type
    case 'sablenite': 
    case 'absolite': 
    case 'houndoominite': 
    case 'gyaradosite':
    case 'colbur berry':
    case 'black glasses':
    case 'dread plate':
    case 'dark gem':
    case 'incinium z':
    case 'darkinium z': {
      itemColor = getTypeColor('dark');
    }; break;

    // Dragon Type
    case 'salamencite': 
    case 'sceptilite': 
    case 'garchompite': 
    case 'ampharosite': 
    case 'charizardite x': 
    case 'haban berry':
    case 'dragon fang':
    case 'draco plate':
    case 'dragon gem':
    case 'kommonium z':
    case 'draconium z': {
      itemColor = getTypeColor('dragon');
    }; break;

    // Electric Type
    case 'manectite': 
    case 'wacan berry':
    case 'magnet':
    case 'zap plate':
    case 'electric gem':
    case 'aloraichium z':
    case 'pikanium z':
    case 'electric seed':
    case 'pikachunium z':
    case 'electrium z': {
      itemColor = getTypeColor('electric');
    }; break;

    // Fairy Type
    case 'audinite': 
    case 'altarianite': 
    case 'roseli berry':
    case 'pixie plate':
    case 'misty seed':
    case 'tapunium z':
    case 'fairium z': {
      itemColor = getTypeColor('fairy');
    }; break;

    // Fighting Type
    case 'lopunnite': 
    case 'lucarionite': 
    case 'medichamite': 
    case 'mewtwonite x': 
    case 'chople berry':
    case 'black belt':
    case 'fist plate':
    case 'fighting gem':
    case 'fightinium z': {
      itemColor = getTypeColor('fighting');
    }; break;

    // Fire Type
    case 'heat rock': 
    case 'cameruptite': 
    case 'blazikenite': 
    case 'charizardite y': 
    case 'occa berry':
    case 'charcoal':
    case 'red orb':
    case 'flame plate':
    case 'fire gem':
    case 'firium z': {
      itemColor = getTypeColor('fire');
    }; break;

    // Flying Type
    case 'pinsirite':
    case 'coba berry':
    case 'sharp beak':
    case 'sky plate':
    case 'flying gem':
    case 'flyinium z': {
      itemColor = getTypeColor('flying');
    }; break;

    // Ghost Type
    case 'bannettite': 
    case 'gengarite':
    case 'kasib berry':
    case 'spell tag':
    case 'spooky plate':
    case 'ghost gem':
    case 'mimikium z':
    case 'lunalium z':
    case 'marshadium z':
    case 'ghostium z': {
      itemColor = getTypeColor('ghost');
    }; break;

    // Grass Type
    case 'abomasite': 
    case 'venusaurite': 
    case 'rindo berry':
    case 'miracle seed':
    case 'meadow plate':
    case 'rose incense':
    case 'decidium z':
    case 'grassy seed':
    case 'grass gem':
    case 'grassium z': {
      itemColor = getTypeColor('grass');
    }; break;

    // Ground Type
    case 'shuca berry':
    case 'soft sand':
    case 'ground gem':
    case 'earth plate':
    case 'groundium z': {
      itemColor = getTypeColor('ground');
    }; break;

    // Ice Type
    case 'icy rock': 
    case 'glalitite': 
    case 'yache berry':
    case 'never-melt ice':
    case 'icicle plate':
    case 'ice gem':
    case 'icium z': {
      itemColor = getTypeColor('ice');
    }; break;

    // Normal Type
    case 'pidgeotite': 
    case 'kangaskhanite': 
    case 'chilan berry':
    case 'silk scarf':
    case 'blank plate':
    case 'eevium z':
    case 'normal gem':
    case 'normalium z': {
      itemColor = getTypeColor('normal');
    }; break;

    // Poison Type
    case 'kebia berry':
    case 'black sludge':
    case 'poison barb':
    case 'toxic plate':
    case 'poison gem':
    case 'poisonium z': {
      itemColor = getTypeColor('poison');
    }; break;

    // Psychic Type
    case 'galladite':
    case 'latiasite':
    case 'latiosite': 
    case 'gardevoirite':
    case 'mewtwonite y': 
    case 'alakazite': 
    case 'payapa berry':
    case 'twisted spoon':
    case 'stone plate':
    case 'odd incense':
    case 'rock gem':
    case 'psychic seed':
    case 'ultranecrozium z':
    case 'mewnium z':
    case 'psychium z': {
      itemColor = getTypeColor('psychic');
    }; break;

    // Rock Type
    case 'smooth rock': 
    case 'diancite': 
    case 'tyranitarite': 
    case 'aerodactylite':
    case 'charti berry':
    case 'hard stone':
    case 'mind plate':
    case 'psychic gem':
    case 'rock incense':
    case 'lycanium z':
    case 'rockium z': {
      itemColor = getTypeColor('rock');
    }; break;

    // Steel Type
    case 'steelixite': 
    case 'mawilite': 
    case 'aggronite': 
    case 'metagrossite': 
    case 'rusted sword': 
    case 'rusted shield':
    case 'babiri berry':
    case 'metal coat':
    case 'iron plate':
    case 'steel gem':
    case 'solganium z':
    case 'steelium z': {
      itemColor = getTypeColor('steel');
    }; break;

    // Water Type
    case 'damp rock': 
    case 'sharpedonite': 
    case 'slowbronite': 
    case 'blastoisinite': 
    case 'swampertite':
    case 'passho berry':
    case 'mystic water':
    case 'splash plate':
    case 'wave incense':
    case 'sea incense':
    case 'blue orb':
    case 'water gem':
    case 'primarium z':
    case 'waterium z': {
      itemColor = getTypeColor('water');
    }; break;

    // Default
    default: {
      itemColor = getTypeColor('default');
    }; break;
  }

  // Get the ability from the set
  const abilityLower = set.ability.toLowerCase();

  // Ability color
  let abilityColor = "";

  // Switch on ability (lower case)
  switch (abilityLower) {

    // Ghost
    case 'disguise':
    case 'stance change': 
    case 'as one (spectrier)': {
      abilityColor = getTypeColor('ghost');
    }; break;

    // Water
    case 'torrent': 
    case 'primordial rain':
    case 'water bubble':
    case 'swift swim':
    case 'rain dish':
    case 'hydration':
    case 'dry skin':
    case 'drizzle': {
      abilityColor = getTypeColor('water');
    }; break;

    // Fire
    case 'blaze': 
    case 'flame body':
    case 'orichalcum pulse':
    case 'primordial sun':
    case 'flower gift':
    case 'leaf guard':
    case 'solar power':
    case 'protosynthesis':
    case 'flash fire':
    case 'chlorophyll':
    case 'drought': {
      abilityColor = getTypeColor('fire');
    }; break;

    // Hail / Snow
    case 'ice face':
    case 'ice body':
    case 'snow cloak':
    case 'slush rush':
    case 'refridgerate':
    case 'snow warning':
    case 'as one (glastrier)': {
      abilityColor = getTypeColor('ice');
    }; break;

    // Rock
    case 'sand stream':
    case 'sand force':
    case 'sand rush':
    case 'sand veil':
    case 'sand spit': {
      abilityColor = getTypeColor('rock');
    }; break;

    // Flying
    case 'levitate':
    case 'aerilate':
    case 'air lock':
    case 'gale wings':
    case 'delta stream': {
      abilityColor = getTypeColor('flying');
    }; break;

    // Electric
    case 'transistor':
    case 'quark drive':
    case 'electric surge': {
      abilityColor = getTypeColor('electric');
    }; break;

    // Psychic
    case 'psychic surge': {
      abilityColor = getTypeColor('psychic');
    }; break;

    // Grass
    case 'overgrow': 
    case 'grassy surge': {
      abilityColor = getTypeColor('grass');
    }; break;

    // Fairy
    case 'intrepid sword': 
    case 'dauntless shield': 
    case 'pixilate':
    case 'fairy aura':
    case 'misty surge': {
      abilityColor = getTypeColor('fairy');
    }; break;

    // Dark
    case 'dark aura': {
      abilityColor = getTypeColor('dark');
    }; break;

    // Default
    default: {
      abilityColor = getTypeColor('default');
    }; break;
  }

  // Switch on nature (lower case)
  const natureLower = set.nature.toLowerCase();

  // Nature Colors
  const natureColors = {
    atk: "",
    def: "",
    spa: "",
    spd: "",
    spe: "",
  }

  // Switch on lower-case nature
  switch (natureLower) {
    case 'lonely': { natureColors.atk = getTypeColor('grass'); natureColors.def = getTypeColor('fire'); }; break;
    case 'brave': { natureColors.atk = getTypeColor('grass'); natureColors.spe = getTypeColor('fire'); }; break;
    case 'adamant': { natureColors.atk = getTypeColor('grass'); natureColors.spa = getTypeColor('fire'); }; break;
    case 'naughty': { natureColors.atk = getTypeColor('grass'); natureColors.spd = getTypeColor('fire'); }; break;
    case 'bold': { natureColors.def = getTypeColor('grass'); natureColors.atk = getTypeColor('fire'); }; break;
    case 'relaxed': { natureColors.def = getTypeColor('grass'); natureColors.spe = getTypeColor('fire'); }; break;
    case 'impish': { natureColors.def = getTypeColor('grass'); natureColors.spa = getTypeColor('fire'); }; break;
    case 'lax': { natureColors.def = getTypeColor('grass'); natureColors.spd = getTypeColor('fire'); }; break;
    case 'timid': { natureColors.spe = getTypeColor('grass'); natureColors.atk = getTypeColor('fire'); }; break;
    case 'hasty': { natureColors.spe = getTypeColor('grass'); natureColors.def = getTypeColor('fire'); }; break;
    case 'jolly': { natureColors.spe = getTypeColor('grass'); natureColors.spa = getTypeColor('fire'); }; break;
    case 'naive': { natureColors.spe = getTypeColor('grass'); natureColors.spd = getTypeColor('fire'); }; break;
    case 'modest': { natureColors.spa = getTypeColor('grass'); natureColors.atk = getTypeColor('fire'); }; break;
    case 'mild': { natureColors.spa = getTypeColor('grass'); natureColors.def = getTypeColor('fire'); }; break;
    case 'quiet': { natureColors.spa = getTypeColor('grass'); natureColors.spe = getTypeColor('fire'); }; break;
    case 'rash': { natureColors.spa = getTypeColor('grass'); natureColors.spd = getTypeColor('fire'); }; break;
    case 'calm': { natureColors.spd = getTypeColor('grass'); natureColors.atk = getTypeColor('fire'); }; break;
    case 'gentle': { natureColors.spd = getTypeColor('grass'); natureColors.def = getTypeColor('fire'); }; break;
    case 'sassy': { natureColors.spd = getTypeColor('grass'); natureColors.spe = getTypeColor('fire'); }; break;
    case 'careful': { natureColors.spd = getTypeColor('grass'); natureColors.spa = getTypeColor('fire'); }; break;
    // Other natures have no modifiers
  }

  // Nature color (default)
  const natureColor = getTypeColor('default');

  // IV colours
  const ivColors = {
    hp: "",
    atk: "",
    def: "",
    spa: "",
    spd: "",
    spe: "",
  };

  // Loop over the stats
  for (const key in set.ivs) {

    // Get the value for the iv
    const val = set.ivs[key];

    // If iv is 0
    if (val === 0) {
      // Set the statColor to red
      ivColors[key] = getTypeColor('fire');
    }
    // Stat is not perfect
    else if (val < 31) {
      // Set statColor to yellow
      ivColors[key] = getTypeColor('electric');
    }
    else // Stat is perfect
    {
      // Set statColor to green
      ivColors[key] = getTypeColor('grass');
    }
  }

  // EV Colors
  const evColors = {
    hp: "",
    atk: "",
    def: "",
    spa: "",
    spd: "",
    spe: "",
  };

  // Loop over the stats
  for (const key in set.evs) {

    // Get the value for the iv
    const val = set.evs[key];

    // If iv is 0
    if (val === 0) {
      // Set the statColor to red
      evColors[key] = getTypeColor('fire');
    }
    // Stat is less than halfway
    else if (val <= 128) {
      // Set statColor to yellow
      evColors[key] = getTypeColor('electric');
    }
    else // 128+
    {
      // Set statColor to green
      evColors[key] = getTypeColor('grass');
    }
  }

  // Default level
  let level = 100;

  // Level is defined in set
  if ('level' in set.other) {
    // Get the level from the set
    level = parseInt(set.other.level);
  }

  // Color for the level
  let levelColor = "";

  // Standard levels for competitive
  const standardLevels = [5, 50, 100];

  // If the level is a standard level
  if (standardLevels.includes(level)) {
    // Set the level color to green
    levelColor = getTypeColor('grass');
  }
  else // Set level color to yellow
  {
    // Set level color to yellow
    levelColor = getTypeColor('electric');
  }

  // List of move colors
  const moveColors = [];

  // If there are less than 4 moves
  while (set.moves.length < 4){
    set.moves.push("(No Move)");
  }

  // Loop over the moves
  for (move of set.moves) {

    // Type placeholder
    let type = null;

    // Move color
    let moveColor = "";

    // Convert the move to lower case
    moveLower = move.toLowerCase();

    // Account for special cases
    switch (moveLower) {
      // No Move
      case '(no move)': {
        // No move color
        moveColor = getTypeColor('-');
      }; break;
      // Tera Blast
      case 'tera blast': {
        // Match tera color
        moveColor = teraColor;
      }; break;
      // General Case
      default: {

        // If the move contains 'hidden power'
        if (moveLower.includes('hidden power')) {
          // Seperate the type of the hidden power from the name
          type = moveLower.split(']')[0].split('[')[1];
        }
        else // Move is not hidden power
        {
          // Find a move matching the move name
          moveData = MOVES.find(x => x.name == moveLower);

          // If move data is found
          if (moveData) {
            // Get the move type
            type = moveData.type;
          }
          else // Move not found
          {
            console.warn(`Data for move '${moveLower}' not found!`)
          }
        }
      }; break;
    }

    // Type is not null
    if (type) {

      // Move type is normal
      if (type == 'normal'){
        // Switch on ability
        switch (abilityLower){
          // Refridgerate
          case 'refridgerate': {
            // Convert to ice
            type = 'ice';
          }; break;
          // Pixilate
          case 'pixilate': {
            // Convert to fairy
            type = 'fairy';
          }; break;
          // Aerilate
          case 'aerilate': {
            // Convert to flying
            type = 'flying';
          }; break;
        }
      }

      // Get the colour for the move type
      moveColor = getTypeColor(type);
    }

    // Add to the list of colors
    moveColors.push(moveColor);
  }

  let row_content = `
  <tr>
    <th class='bordered align-middle'>
        Pokémon
    </th>
    <th class='bordered align-middle' id='species' style='${speciesColor}'>`
    + set.species +
    `</th>
    <td class='bordered align-middle' rowspan=2>`
    + getColSprite([set]) +
    `</td>
  </tr>
  <tr>
    <th class='bordered'>
      Tera Type
    </th>
    <td class='bordered' id=tera1 style='${teraColor}'>`
    // Add the tera type to the form
    + teraType +
    `</td>
  </tr>
  <tr>
    <th class='bordered'>
      Ability
    </th>
    <td class='bordered' id=ability1 style='${abilityColor}'>`
    // Add the ability to the form
    + set.ability +
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                Level
            </small>
        </sup>
        <small style='${levelColor}'>`
    // Add the level
    + level +
    `</small>
    </td>
  </tr>
  <tr>
    <th class='bordered'>
        Held Item
    </th>
    <td class='bordered' id='item1' style='${itemColor}'>`
    // Add the item to the form
    + set.item +
    `</td>
    <td class='bordered'>
        <sup>
            <small>
                HP
            </small>
        </sup>
        <small style='${evColors.hp}'>`
    // Add the hp to the EVs 
    + set.evs.hp +
    `</small>
        <sub>
          <small style='${ivColors.hp}'>`
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
    <td style='${natureColor}'>`
    + set.nature +
    `
    </td>
    <td class='bordered'>
        <sup>
            <small style='${natureColors.atk}'>
                Atk
            </small>
        </sup>
        <small style='${evColors.atk}'>`
    // Add the atk to the EVs 
    + set.evs.atk +
    `</small>
        <sub>
          <small style='${ivColors.atk}'>`
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
    <td class='bordered' id='move11' style='${moveColors[0]}'>`
    // Add the first move to the form
    + set.moves[0] +
    `</td>
    <td class='bordered'>
        <sup>
            <small style='${natureColors.def}'>
                Def
            </small>
        </sup>
        <small style='${evColors.def}'>`
    // Add the def to the EVs 
    + set.evs.def +
    `</small>
        <sub>
          <small style='${ivColors.def}'>`
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
    <td class='bordered' id='move2' style='${moveColors[1]}'>`
    // Add the first move to the form
    + set.moves[1] +
    `</td>
    <td class='bordered'>
        <sup>
            <small style='${natureColors.spa}'>
            Sp. Atk
            </small>
        </sup>
        <small style='${evColors.spa}'>`
    // Add the def to the EVs 
    + set.evs.spa +
    `</small>
        <sub>
          <small style='${ivColors.spa}'>`
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
    <td class='bordered' id='move31' style='${moveColors[2]}'>`
    // Add the first move to the form
    + set.moves[2] +
    `</td>
    <td class='bordered'>
        <sup>
            <small style='${natureColors.spd}'>
                Sp. Def
            </small>
        </sup>
        <small style='${evColors.spd}'>`
    // Add the def to the EVs 
    + set.evs.spd +
    `</small>
        <sub>
          <small style='${ivColors.spd}'>`
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
    <td class='bordered' id='move41' style='${moveColors[3]}'>`
    // Add the first move to the form
    + set.moves[3] +
    `</td>
    <td class='bordered'>
        <sup>
            <small style='${natureColors.spe}'>
                Speed
            </small>
        </sup>
        <small style='${evColors.spe}'>`
    // Add the def to the EVs 
    + set.evs.spe +
    `</small>
        <sub>
          <small style='${ivColors.spe}'>`
    // Add the def to the EVs
    + set.ivs.spe +
    `</small>
        </sub>
    </td>
  </tr>
  `;

  // Div for containing the set copy link
  let link_div = document.createElement('div');
  link_div.classList.add('text-center');
  link_div.classList.add('mt-0');

  // Create the copy set link
  let btn = document.createElement('button');
  btn.innerHTML = `Copy ${set.species} Set`;
  
  // Set the class list for the button
  btn.classList.add('btn');
  btn.classList.add('btn-link');
  btn.style = `${speciesColor}`;


  // Export to clipboard event listener
  btn.addEventListener('click', async event => {

    // If the clipboard module exists in the client's browser
    if (navigator.clipboard) {
      // Export string which will be copied to the clipboard
      content = parseJson([set]);

      try {
        // Copy the string to the clipboard
        await navigator.clipboard.writeText(content);

        // Successful copy alert
        window.alert(set.species + " copied to clipboard successfully.");
      }
      catch (err) {
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

  // Add the button to the link div
  link_div.appendChild(btn);

  // Add the link div to the body
  table_div.appendChild(link_div);

  // Add the row to the table
  table.innerHTML = row_content;

  // Add the table to the div
  table_div.appendChild(table);

  // Add the div to the content
  body.appendChild(table_div);
}

// Show the team page
function showPageTeam(format, folder, team) {
  // Get the data for the given team
  let data = TEAMS[format][folder][team];

  // Convert team name to capitals
  const name = toCapitalCase(data.name);

  // Show the title for the format and team
  showPageTitle(toCapitalCase(name));

  // Add subtitle

  // Get the subtitle element from the form
  const sitelink = document.getElementById('sitelink');

  // Create the link element
  const link = document.createElement('a');

  // Grey link text
  link.classList.add('text-secondary');

  // Open link in new tab
  link.target = "_blank";

  // Get the keys for the team data
  const keys = Object.keys(data);

  // Owner is defined in the data
  if (keys.includes('owner')) {

    // Add 'Contributed by' text to innerHTML
    sitelink.innerHTML = `Created by `;

    // Set the name to the owner name
    link.innerHTML = data.owner.name;

    // Set the link to the owner link
    link.href = data.owner.link;

  }
  else // No creator
  {
    // Add 'no creator' message to the innerHTML
    sitelink.innerHTML = `No creator found - offer a correction `;

    // Simple link text
    link.innerHTML = 'here';

    // Set the link to the issues section of the repository (Convert any spaces to pluses to preserve formatting)
    link.href = `https://github.com/damon-murdoch/pokemon-teams/issues/new?title=Creator+Correction:+${format}/${folder}/${name.replace(' ', '+')}`
  }

  // Description is defined in the data
  if (keys.includes('desc')) {
    // Get the description element
    const sitedesc = document.getElementById('sitedesc');

    // Set the description to the team description
    sitedesc.innerHTML = data.desc;
  }
  else // No description
  {
    sitedesc.innerHTML = `No description found - offer a correction `;

    // Create the link element
    const desclink = document.createElement('a');

    // Grey link text
    desclink.classList.add('text-secondary');

    // Open link in new tab
    desclink.target = "_blank";

    // Sample link text
    desclink.innerHTML = 'here';

    // Set the link to the issues section of the repository (Convert any spaces to pluses to preserve formatting)
    desclink.href = `https://github.com/damon-murdoch/pokemon-teams/issues/new?title=Add+Description:+${format}/${folder}/${name.replace(' ', '+')}`

    // Add the link to the description
    sitedesc.appendChild(desclink);
  }

  // Add the link to the subtitle
  sitelink.appendChild(link);

  // Update the format drop-down
  showFormatDropdown();

  // Update the folder drop-down
  showFolderDropdown(format);

  // Set the selected property for the format
  document.getElementById(format).selected = 'selected';

  // Set the selected property for the folder
  document.getElementById(folder).selected = 'selected';

  // Get the back link element
  const backlnk = document.getElementById('backlnk');

  // Replace the on-click event with the new link
  backlnk.onclick = function () {
    // Go back to previous page
    history.back();
  };

  // Replace the backlink text with 'back to teams'
  backlnk.innerHTML = 'Go Back';

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
  for (let set of data.sets) {
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

  // Create the paste export button
  let btn = document.createElement('button');

  // Set the id for the button
  btn.id = 'paste-export';
  btn.innerHTML = "Copy Team to Clipboard";

  // Set the class list for the button
  btn.classList.add('btn');
  btn.classList.add('btn-link');
  btn.classList.add('text-secondary');

  // Add the button to the body
  body.appendChild(btn);

  // Add the table to the body
  body.appendChild(container);

  // Export to clipboard event listener
  document.getElementById('paste-export').addEventListener('click', async event => {

    // If the clipboard module exists in the client's browser
    if (navigator.clipboard) {
      // Export string which will be copied to the clipboard
      content = parseJson(data.sets);

      try {
        // Copy the string to the clipboard
        await navigator.clipboard.writeText(content);

        // Successful copy alert
        window.alert(name + " copied to clipboard successfully.");
      }
      catch (err) {
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

function toCapitalCase(str) {
  // Split the string on the spaces
  let spl = str.split(' ');

  // Loop over the string splits
  for (let i = 0; i < spl.length; i++) {
    // If the string is greater
    // than one character
    if (spl[i].length > 1) {
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

function getColSprite(sets) {
  // Exactly 3/4 of original width
  let spr_width = '51px';

  // Exactly 3/4 of original height
  let spr_height = '42px';

  // Column contents
  let col = [];

  // Sprite main directory
  let spdir = 'img/sprite/gen7x/';

  // Argument is not an array
  if (!Array.isArray(sets)) {
    // Convert it to an array
    sets = [sets];
  }

  // Current number of sets
  let it = 0;

  // Loop over the sets
  for (let set of sets) {
    // While we have
    // processed six
    // sets or less
    if (it < 6) {
      // Sprite source
      let src = spdir;

      // If the set is a shiny
      if (
        set.other.hasOwnProperty('shiny') &&
        set.other.shiny == 'Yes'
      ) {
        // Add shiny to the path
        src += 'shiny/';
      }
      else // Not shiny
      {
        // Add regular to the path
        src += 'regular/';
      }

      // Add the name (converted to lower case) to the path
      src += set.species.toLowerCase().trim().replace(" ", "-").replace("’", "").replace(".", "") + '.png';

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

function getPrettyName(name) {
  // Name placeholder
  let placeholder = name;

  // If name in pretty names
  if (name in NAMES) {
    // Use the pretty name
    placeholder = NAMES[name];
  }
  else // No pretty name
  {
    // Warning
    console.warn(`No pretty name for ${name}!`)
  }

  // Return placeholder
  return placeholder;
}

function showRowTeam(body, format, folder, index, data) {
  // Table row element which will be appended
  let tr = document.createElement('tr');

  // Pretty format name
  let formatName = getPrettyName(format);

  // Pretty folder name
  let folderName = getPrettyName(folder);

  // Table row content
  let row = [
    "<td scope='row'>" +
    // Hyperlink to show the page for the specific team
    "<a class='link-light' href='?team=" + index + "&format=" + format + "&folder=" + folder + "'>" + toCapitalCase(data.name) + "</a>",
    getColSprite(data.sets),

    // Hyperlinks to show all teams for the folder in the format
    "<a class='link-light' href='?format=" + format + "'>" + formatName + "</a>"
  ];

  // If folder is not default
  if (folder.toLowerCase() !== 'default') {
    // Add it to the row
    row.push(
      // Hyperlinks to show all teams for the folder in the format
      "<a class='link-light' href='?format=" + format + "&folder=" + folder + "'>" + folderName + "</a>"
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
  copy.innerHTML = 'Copy';

  // Set the link to a light link
  copy.classList = 'link-light';

  // Set the link target to '#'
  copy.href = '#';

  // Add the on-click event to the copy button

  // Export to clipboard event listener
  copy.addEventListener('click', async event => {

    // If the clipboard module exists in the client's browser
    if (navigator.clipboard) {
      // Export string which will be copied to the clipboard
      content = parseJson(data.sets);

      try {
        // Copy the string to the clipboard
        await navigator.clipboard.writeText(content);

        // Successful copy alert
        window.alert("Team '" + data.name + "' copied to clipboard successfully.");
      }
      catch (err) {
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

function showTableHome(body, format = null, folder = null) {
  // Lists containing formats /
  // folders to be processed
  let process = [];

  // If the format is not null
  if (format !== null) {
    // If the folder is not null
    if (folder !== null) {
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
    for (let fmt of fmts) {
      // Append format to the list
      process.push([fmt]);
    }
  }

  // Total number of teams
  let counter = 0;

  // Loop over the processes
  for (let p of process) {
    // Dereference format
    let fmt = p[0];

    // Assigned later
    let folders;

    // If folder is provided
    if (p.length > 1) {
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
    for (let fldr of folders) {
      // Index of the team
      let i = 0;

      // Loop over the teams
      for (team of TEAMS[fmt][fldr]) {
        // Add a row for the team to the table
        showRowTeam(body, fmt, fldr, i, team);

        // Increment the index
        i++;
      }

      // Add iterator to team count
      counter += i;
    }

  }

  // Update the team counter element
  const teamCount = document.getElementById('sitedesc');

  // Update the team count content
  teamCount.innerHTML = `Teams Found: ${counter}`;
}

function showFormatDropdown() {
  // Get the format drop down element
  let format = document.getElementById('sel-format');

  // Get the keys from the teams
  let keys = Object.keys(TEAMS);

  // Sort the keys alphabetically
  keys.sort().reverse();

  // Get the format keys
  for (let key of keys) {
    // Option for the format
    let option = document.createElement('option');

    // Set option value to the key
    option.value = key;

    // Set option id to the key
    option.id = key;

    // Set innerhtml to the key
    option.innerHTML = getPrettyName(key);

    // Add the option to the select
    format.appendChild(option);
  }
}

function setFormat(format) {
  // If folder is selected
  if (params.has('folder')) {
    // Get the folder from the params
    params.delete('folder');
  }

  // If team is selected
  if (params.has('team')) {
    // Get the team from the params
    params.delete('team');
  }

  // Set the format to the selected
  params.set('format', format);

  // Reload the page with the requested format
  window.location.href = window.location.pathname + '?' + params.toString();
}

function showFolderDropdown(format) {
  // Get the format drop down element
  let folder = document.getElementById('sel-folder');

  // Get the keys from the teams
  let keys = Object.keys(TEAMS[format]);

  // Sort the keys alphabetically
  keys.sort();

  // Get the format keys
  for (let key of keys) {
    // Option for the format
    let option = document.createElement('option');

    // Set option value to the key
    option.value = key;

    // Set option id to the key
    option.id = key;

    // Set innerhtml to the key
    option.innerHTML = getPrettyName(key);

    // Add the option to the select
    folder.appendChild(option);
  }
}

function setFolder(folder) {
  // If team is selected
  if (params.has('team')) {
    // Get the team from the params
    params.delete('team');
  }

  // Set the folder to the selected
  params.set('folder', folder);

  // Reload the page with the requested format and folder
  window.location.href = window.location.pathname + '?' + params.toString();
}

// Show the home page
function showPageHome(format = null, folder = null) {
  // Populate the format select
  showFormatDropdown();

  // Set selected format dropdown
  const selFormat = document.getElementById('sel-format');

  // Set selected folder dropdown
  const selFolder = document.getElementById('sel-folder');

  // Add subtitle

  // Get the subtitle element from the form
  const sitelink = document.getElementById('sitelink');

  // Create the link element
  const link = document.createElement('a');

  // Grey link text
  link.classList.add('text-secondary');

  // Open link in new tab
  link.target = "_blank";

  sitelink.innerHTML = `Want a team added? Submit it `;

  // Simple link text
  link.innerHTML = 'here';

  // Format is null
  if (format == null) {
    // Get the default format
    format = DEFAULT_FORMAT;
  }

  // Update format value
  selFormat.value = format;

  // Update the folder drop-down
  showFolderDropdown(format);

  // Placeholder string
  let sitetitle = format;

  // Format has a pretty name
  if (format in NAMES) {
    // Use the pretty name instead
    sitetitle = NAMES[format];
  }
  else // No pretty name
  {
    // Write warning
    console.log(`Warning: no pretty name for format ${format} ...`);
  }

  // Folder message
  let msgFolder = folder;

  // Folder is null
  if (folder == null) {
    // Add to the string
    msgFolder = `[folder]`;
  }
  else // Folder is not null
  {
    // Placeholder string
    let sitefolder = folder;

    // Folder has pretty name
    if (folder in NAMES) {
      // Use the pretty name instead
      sitefolder = NAMES[folder];
    }
    else // No pretty name
    {
      // Write warning
      console.log(`Warning: no pretty name for folder ${folder} ...`);
    }

    // Add the folder name to the site title
    sitetitle = `${sitetitle} / ${sitefolder}`;

    // Update folder value
    selFolder.value = folder;
  }

  // Show the title home section
  showPageTitle(sitetitle);

  // Static content for the issue
  const msgBody = `Creator+Name:%0ACreator+Link:%0ATeam+Paste+(Raw+or+Pokepaste):%0A`;

  // Set the link to the issues section of the repository (Convert any spaces to pluses to preserve formatting)
  link.href = `https://github.com/damon-murdoch/pokemon-teams/issues/new?title=Team+Submission:+${format}+/+${msgFolder}+/+[Team+Name]&body=${msgBody}&labels=enhancement`

  // Add the link to the subtitle
  sitelink.appendChild(link);


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
          Team Name
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
let format, folder, team;

// If format is selected
if (params.has('format')) {
  // Get the format from the params
  format = params.get('format');
}

// If folder is selected
if (params.has('folder')) {
  // Get the format from the params
  folder = params.get('folder');
}

// If team is selected
if (params.has('team')) {
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