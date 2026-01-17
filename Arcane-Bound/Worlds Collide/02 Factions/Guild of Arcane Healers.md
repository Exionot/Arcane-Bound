---
type: faction
name: Guild of Arcane Healers
origin: Bauserst City
leader: 
galleryImage: 
status: Active
---

# **Basic Information**
**Name**: Guild of Arcane Healers
**Location**: [[Bauserst City]], [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]]
**Founder/s**:
**Holder of Power**:
**Affiliation/s**:

**Status**: `INPUT[factionStatus][]`

# **Overview**
A guild of healers that aims to spread the knowledge of healing magic and help those in need.

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