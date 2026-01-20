---
type: faction
origin: Rockcore City
leader: 
galleryImage: 
aliases: 
status: Active
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().logoImage ? "![[" + dv.current().logoImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Blackreign Gang   |
> | --- | --- |
> |  Founder/s   |     |
> |  Leader/s   |     |
> |  Location   |  [[NULL Region]], [[Republic of Chloros]]   |
> |  Affiliation/s   |     |
> |  Status   |   `INPUT[factionStatus][]`  |

# **Overview**
The **Blackreign Gang** is a faction in the [[NULL Region]] that illegally extracts [[Void Crystal]] resources. They are a cult-like faction, operating to satisfy the [[Void God]] and with the belief that [[Void Crystal]] corruption is the [[Void God]]'s way of eradicating all technology and resetting the world back to its "Prime Form". ^0b6b9a

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