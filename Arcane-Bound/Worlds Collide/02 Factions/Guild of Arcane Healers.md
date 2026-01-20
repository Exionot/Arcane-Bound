---
type: faction
name: Guild of Arcane Healers
origin: Bauserst City
leader: 
galleryImage: 
status: Active
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().logoImage ? "![[" + dv.current().logoImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Guild of Arcane Healers   |
> | --- | --- |
> |  Founder/s   |     |
> |  Leader/s   |     |
> |  Location   |  [[Bauer Quarter]], [[Bauserst City]], [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]]   |
> |  Affiliation/s   |     |
> |  Status   |   `INPUT[factionStatus][]`  |

# **Overview**
The **Guild of Arcane Healers** is a guild found in the [[Bauer Quarter]] of [[Bauserst City]], they seek to train and spread the knowledge of healing magic to future generations. Like the nation's warriors, they are one of the most important groups of the city, often being needed during times of conflict. They also serve the people of [[Bauserst City|Bauserst]] by providing aid to those in need.

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