---
type: faction
origin: Newslate City
leader: 
galleryImage: 
aliases:
  - V.O.I.D.
  - VOID
status: Active
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().logoImage ? "![[" + dv.current().logoImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Void Operation & Investigation Department   |
> | --- | --- |
> |  Nickname   |  "V.O.I.D."   |
> |  Founder/s   |     |
> |  Leader/s   |     |
> |  Location   |     |
> |  Affiliation/s   |   [[Chloros Administration]], [[Newslate City Administration]], [[Void Special Operation Division 9]]   |
> |  Status   |   `INPUT[factionStatus][]`  |

# **Overview**
**Voidrock Operation & Investigation Department** referred to as **V.O.I.D.** or **VOID**, is a protection unit of the [[Chloros Administration]] against the [[Void Crystal]] corruption. They are found at [[VOID Headquarters]] in [[Ground District]] of [[Newslate City]], Special Operation Divisions are spread across cities of [[Republic of Chloros|Chloros]], and in the [[Great Divider]] near [[Rockcore City]]. ^07c61f

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