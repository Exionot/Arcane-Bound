---
type: faction
origin: Fluxpoint City
leader: 
galleryImage: 
status: Active
aliases:
  - NeoTech Corporation
  - NeoTech Corp.
---

# **Basic Information**
**Name**: Neo-Technology Corporation
**Location**: [[Fluxpoint City]], [[Split Region]], [[NeoTech Union]]
**Founder/s**:
**Holder of Power**:
**Affiliation/s**:

**Status**: `INPUT[factionStatus][]`

# **Overview**
**Neo-Technology Corporation**, commonly known as **NeoTech**, is a technology corporation and governing body of [[NeoTech Union]]. It focuses on the invention and innovation of [[Mechanical Technology]] and [[Bio-Technology]], providing the world with powerful suits and armor, bionic arms and legs, and other artificial organs. ^a4d913

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