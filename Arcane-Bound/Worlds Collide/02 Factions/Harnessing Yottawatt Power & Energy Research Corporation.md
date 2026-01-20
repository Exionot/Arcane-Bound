---
type: faction
origin: Lightspeed City
leader: 
galleryImage: 
status: Active
aliases:
  - HYPER Corporation
  - HYPER Corp.
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().logoImage ? "![[" + dv.current().logoImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Harnessing Yottawatt Power & Energy Research Corporation   |
> | --- | --- |
> |  Nickname   |  "H.Y.P.E.R. Corp."   |
> |  Founder/s   |     |
> |  Leader/s   |     |
> |  Location   |  [[Lightspeed City]], [[Lumen Region]], [[HyperCorp Republic]]   |
> |  Affiliation/s   |     |
> |  Status   |   `INPUT[factionStatus][]`  |

# **Overview**
**Harnessing Yottawatt Power & Energy Research Corporation**, commonly referred to as **HYPER Corp.**, is a research corporation, and the governing body of [[HyperCorp Republic]], that focuses on generating and harnessing astronomical amounts of energy. Renowned for the invention of [[Light Technology]] like [[Solid-Light Energy]], it has been successful in providing the world with sustainable energy and cutting edge [[Light Technology]]. ^0af673

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
## Faction Logo
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):logoImage]
```

## Other Images
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```