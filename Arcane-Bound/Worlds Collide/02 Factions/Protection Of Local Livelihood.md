---
type: faction
name: Protection Of Local Livelihood
origin: Fluxpoint City
leader: 
galleryImage: 
status: Active
aliases:
  - P.O.L.L.
---

# **Basic Information**
**Name**: Protection Of Local Livelihood 
**Location**: [[Circuit District]], [[Fluxpoint City]], [[Split Region]], [[NeoTech Union]]
**Founder/s**: 
**Holder of Power**:
**Affiliation/s**: [[Fluxpoint City Administration]]

**Status**: `INPUT[factionStatus][]`

# **Overview**
**Protection Of Local Livelihood (P.O.L.L.)**, is a police/military organization under the public security department of the [[Fluxpoint City Administration]]. ^918ba6

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