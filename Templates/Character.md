---
type: character
location:
 origin: 
 nation: 
 city: 
 town: 
 village: 
 poi: 
faction: 
 active: 
 FactionName: 
  status: 
  rank: 
  alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
posterImage:
aliases:
relations:
manaPresence: 
magicAffinity: 
---

> [!Category]-
> `$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> |   Name  |     |
> | --- | --- |
> |   Nickname  |     |
> |   Sex  |     |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |     |
> |   Species  |     |
> |   Race  |     |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |    |
> |   Faction/s  |     |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

---

# **History** 
## Background 

# **Appearance** 
## General Appearance 

# **Personality** 

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