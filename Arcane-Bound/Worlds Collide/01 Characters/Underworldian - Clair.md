---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Devil
  - Magic
  - Pyra
  - Caster
  - Multiple Personalities
  - Arcaena
  - Underworld
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
manaPresence: High
magicAffinity: Caster
---

> [!Category]-
> `$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Clair Tempest   |
> | --- | --- |
> |   Nickname  |  "Demon of the forest"    |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  ~150 Years Old   |
> |   Species  |  [[Devil]]   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Underworld]], [[Arcaena]]   |
> |   Faction/s  |  [[Blackreign Gang]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> This note is about Clair's [[Underworld|Underworldian]] variant. For the [[Arcaena|Arcaenian]] variant, see [[Clair Tempest]].

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

```dataviewjs
const narrativeFolder = "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives";
const pages = dv.pages(`"${narrativeFolder}"`).where(p => p.type == "narrative");

let groupedPages = pages.groupBy(p => p.file.folder ?? null);
groupedPages = groupedPages.array().sort((a, b) => {
  // null goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

//dv.el("div", groupedPages[0].rows[0].file);
for (const group of groupedPages){
	const lastSlash = (group.key).lastIndexOf("/");
	const folderName = (group.key).slice(lastSlash + 1) ?? "No Folder";
	
	let lines = [];
	let isHeaderPushed = false;
	for (const narrative of group.rows){
		const characterArr = narrative.file.frontmatter.characters ?? null;
		if (characterArr === null || !characterArr.includes(dv.current().file.name)) continue;
		
		if (!isHeaderPushed){
			lines.push(`> [!navigation]- ${folderName}`);
			isHeaderPushed = true;
		}
		
		lines.push(`> - ${narrative.file.link}`);
	}
	
	dv.el("div", lines.join("\n"));
}
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
![[Character Navigation]]

---