---
type: character
location:
 origin: 
 nation: Verdthorne Kingdom
 city: 
 town: 
 village: 
 poi: Vilebloom Forest
faction: 
 active: Blackreign Gang
 Blackreign Gang: 
  status: Active
  rank: 
  alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
posterImage:
aliases:
  - Demon of the Vilebloom Forest
relations:
  - Mhaxxine Dark
  - Rem Orion
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> |   Name  |  Clair Tempest   |
> | --- | --- |
> |   Nickname  |  "Demon of the forest"    |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |     |
> |   Species  |  [[Devil]]   |
> |   Origin  |  [[Underworld]], [[Arcaena]]   |
> |   Faction/s  |  [[Blackreign Gang]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> This note is about Clair's [[Underworld|Underworldian]] variant. For the [[Arcaena|Arcaenian]] variant, see [[Clair Tempest]].

> **Character Thread**: 

> [!Character]
> **"Come with me... I can give you anything you want~"**
> -Clair luring a worker to her trap

---
# **History** 
![[Clair Tempest#Background]]

# **Appearance** 
## General Appearance 
She has an ash colored hair and black horns. Her eyes have a deep red color with a faint glow. Like all other [[Devil|Devils]] she has long pointy ears and a devil's tail. 

# **Personality** 
She is careless and loves causing chaos withing the kingdoms of [[Arcaena]]. She will captivate residents with different methods to lure them into various situations that can collapse even the most resilient sectors of the kingdom.

She also think highly of herself, often bragging her chaos to other demons.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**

# **Relations**

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