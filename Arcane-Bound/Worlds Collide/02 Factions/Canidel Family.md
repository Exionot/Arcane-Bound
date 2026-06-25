---
type: faction
origin:
leader:
galleryImage:
aliases:
  - 
logoImage: ᐳExternal Assets/Canidel Logo noBG White.png
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().logoImage ? "![[" + dv.current().logoImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Canidel  |
> | --- | --- |
> |  Founder/s   |  aa   |
> |  Leader/s   |  aa   |
> |  Location   |  aa   |
> |  Affiliation/s   |  HATS   |
> |  Status   |   `INPUT[factionStatus][]`  |

# **Overview**
The **Canidel Family** is a rich family in [[Lightspeed City]]. They are the founder and owner of [[Lighting Industries]], a tech company that --. They are also part of the High Association on Teran Society, giving them a massive influence internationally. 

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