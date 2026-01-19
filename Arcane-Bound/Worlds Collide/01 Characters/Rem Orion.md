---
type: character
location:
 nation: HyperCorp Republic
 city: Astral City
 town: 
 village: 
 poi: 
 origin: Astral City
faction:
 active: Starveil Retrieval Co.
 Starveil Retrieval Co.:
  status: Active
  rank: Managing Director 
  alias: 
systemUsed: 
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
aliases:
relations:
  - Victoria Veloux Canidel
  - Clair Tempest
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Rem Orion   |
> | --- | --- |
> |   Nickname  |     |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  Young Adult   |
> |   Species  |  [[Human]]   |
> |   Origin  |  [[Astral City]], [[NOVA Region]], [[HyperCorp Republic]], [[Thunderdrop Sector]], [[Synthspire]]   |
> |   Faction/s  |  [[Starveil Retrieval Co.]] (Managing Director)   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

> [!Character]
> **"Oh I love working at Starveil Co.! I get to take care of Vi's tail every now and then; and that's a luxury you can't get from other jobs!"**
> -Rem Orion when asked about her working conditions in Starveil Retrieval Co.

---
# **History** 
## Background 
**Rem Orion** is a human from [[Astral City]] of [[HyperCorp Republic]]. She is the managing director of [[Starveil Retrieval Co.]], representing the company.^[[[Starveil Retrieval Co.]]]

She is one of the first members of [[Starveil Retrieval Co.|Starveil Retrieval]]. 

# **Appearance** 
## General Appearance 
**Rem** has a short, red velvet hair with bright red eyes. She wears a black headband.

# **Personality** 
Despite being the managing director of [[Starveil Retrieval Co.|Starveil Retrieval]], **Rem** acts more like an assistant rather than a leader. She is very caring of her colleagues, often making sure they are not overworked or stressed, especially to their leader, [[Victoria Veloux Canidel]]. She also likes fluffy things.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Starveil Retrieval Co.
> **Full Note:** [[Starveil Retrieval Co.]]

# **Relations**
## Victoria Veloux Canidel
> **Full Note:** [[Victoria Veloux Canidel]]

She is the leader of [[Starveil Retrieval Co.]]. Despite seeing it as a weird obsession, she still allows **Rem** to groom her tail.

# **Other Information** 
## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Character Thread"
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
```

---

# **Gallery** 
## Character Archives Poster
```meta-bind
INPUT[imageListSuggester(optionQuery("Arcane-Bound/Archives"), class(gallery-img)):posterImage]
```

## Character Profile Image
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
``` 

## Other Images
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```

---

# **Navigation**
```dataviewjs
const baseFolder = "Arcane-Bound/Worlds Collide/01 Characters";
const pages = dv.pages(`"${baseFolder}"`);

// group by faction.active or null
let groups = pages.groupBy(p => p.faction?.active ?? null);

groups = groups.array().sort((a, b) => {
  // null (no faction) goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

for (const group of groups) {
  // header: show "No Faction" if null
  //dv.header(2, group.key ?? "No Faction");
  
  const title = group.key ?? "No Faction";

  // Build datacards block
  let lines = [];
  if (group.key === null) {
	  lines.push(`> [!navigation]+ ${title}`);
  }else{
	  lines.push(`> [!navigation]+ ${"[[" + title + "]]"}`);
  }
  
  lines.push(">```datacards");
  lines.push(`>TABLE profileImage`);
  lines.push(`>FROM "${baseFolder}"`);

  // Use `faction.active = null` if group key is null
  if (group.key === null) {
    lines.push(">WHERE faction.active = null");
  } else {
    lines.push(`>WHERE contains("${group.key}", faction.active)`);
  }

  lines.push(">SORT file.name ASC");
  lines.push(">");
  lines.push(">//Settings");
  lines.push(">preset: square");
 // lines.push("imageProperty: cover");
  //lines.push("imageFit: contain");
  //lines.push("imageHeight: 10px");
  lines.push(">columns: 5");
  lines.push(">fontSize: smallest");
  lines.push(">```");

  dv.el("div", lines.join("\n"));
}
```