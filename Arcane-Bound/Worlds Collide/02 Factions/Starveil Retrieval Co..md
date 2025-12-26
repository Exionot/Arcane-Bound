---
type: faction
name: Starveil Retrieval Co.
origin: Astral City
leader: Victoria Veloux Canidel
galleryImage: 
status: Active
aliases:
  - Starveil Retrieval
---

# **Basic Information**
**Name**: Starveil Retrieval Co.
**Location**: [[Astral City]], [[NOVA Region]], [[HyperCorp Republic]]
**Founder/s**: [[Victoria Veloux Canidel]]
**Holder of Power**: [[Victoria Veloux Canidel]]
**Affiliation/s**:

**Status**: `INPUT[factionStatus][]`

# **Overview**
**Starveil Retrieval Co.** presents itself as a specialized agency that focuses on retrieving lost or stolen items. However, the company is a covert front for the notorious phantom thief faction led by [[Victoria Veloux Canidel]]. While [[Victoria Veloux Canidel|Vi]] stands as the current leader of the faction, [[Rem Orion]] serves as the public-facing managing director. ^1e015c
 
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