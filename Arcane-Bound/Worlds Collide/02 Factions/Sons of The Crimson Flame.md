---
type: faction
origin: Region's Edge
leader: 
galleryImage: 
aliases:
  - 
status: Active
---

# **Basic Information**
**Name**: `= this.file.name`
**Location**: [[Region's Edge]], [[CinderScorch Sector]], [[Synthspire]]
**Founder/s**:
**Holder of Power**:
**Affiliation/s**:

**Status**: `INPUT[factionStatus][]`

# **Overview**
The **Sons of The Crimson Flame** is a faction within the [[CinderScorch Sector]], they are one of the powerful faction in [[CinderScorch Sector|CinderScorch]] competing with other factions for [[Surgespark]] and other resources.

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

%%
# **Contracts**
```dataview
TABLE status as "Status" WHERE type = "contract" AND contains(faction, this.file.name)
```

# **Mission Reports**
```dataview
TABLE status as "Status" WHERE type = "mission" AND contains(faction, this.file.name)
```
 %%
# **Affiliation/s**

# **History**

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```