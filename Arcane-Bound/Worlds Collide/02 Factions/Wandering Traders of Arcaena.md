---
type: faction
origin: Unknown
leader: 
galleryImage: 
aliases:
  - 
status: Active
---

# **Basic Information**
**Name**: `= this.file.name`
**Location**: [[Arcaena]]
**Founder/s**:
**Holder of Power**:
**Affiliation/s**:

**Status**: `INPUT[factionStatus][]`

# **Overview**
The **Wandering Traders of Arcaena** is a traders guild that travels throughout the [[Arcaena|Continent of Arcaena]]. They go through major cities of every nation in the continent, bringing rare and exclusive items from different kingdoms in exchange for [[Numia Coins]].

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

# **Contracts**
```dataview
TABLE status as "Status" WHERE type = "contract" AND contains(faction, this.file.name)
```

# **Mission Reports**
```dataview
TABLE status as "Status" WHERE type = "mission" AND contains(faction, this.file.name)
```

# **Affiliation/s**

# **History**

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```