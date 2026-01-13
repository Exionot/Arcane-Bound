---
type: faction
origin: Unknown
leader: 
galleryImage: 
aliases:
  - Wanderers
status: Active
---

# **Basic Information**
**Name**: `= this.file.name`
**Location**: [[Arcaena]]
**Nickname/s**: Wanderers 
**Status**: `INPUT[factionStatus][]`

# **Overview**
The **Wandering Traders of Arcaena** is a guild of various traders across the [[Arcaena|continent of Arcaena]]. They travel in small groups across different kingdoms and cities. They buy, sell, and barter for rare artifacts but their main source of [[Numia Coins|income]] comes from selling items found in other kingdoms with a slightly increased price. 

The guild does not have a formal organizational hierarchy but rather, any person or group willing to travel the lands and sell precious artifacts is considered to be a wanderer. 

# **Members**
```dataviewjs
const name = dv.current().file.name;

const pages = dv.pages()
  .where(p => p.faction && p.faction[name]);

for (let p of pages) {
const charName = p.file.name;
const rank = p.faction[name].rank;
const status = p.faction[name].status;
const alias = p.faction[name].alias;

dv.paragraph(`## ${charName}`);
dv.paragraph(`> **Full Note:** [[${charName}]]`)
let output = "";
  if (rank) output += ("Rank: "+rank);
  if (status) output += ("\nStatus: "+status);
  if (alias) output += ("\nFaction Alias: "+alias);
dv.paragraph(output);
dv.paragraph(`ㅤ`);
};
```

# **History**

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```