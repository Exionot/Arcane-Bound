---
type: faction
origin: Evemark City
leader: 
status: Active
galleryImage: 
aliases:
  - V.S.O.D.9
---

# **Basic Information**
**Name**: `= this.file.name`
**Location**: [[Evemark City]], [[Lushborne Region]], [[Republic of Chloros]]
**Founder/s**:
**Holder of Power**:
**Affiliation/s**: [[Void Operation & Investigation Department]]

**Status**: `INPUT[factionStatus][]`

# **Overview**
**Void Special Operation Division 9**, also called **V.S.O.D.9** is a frontline unit of the Special Operation Department of the [[Void Operation & Investigation Department]]. ^4a3fcf

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