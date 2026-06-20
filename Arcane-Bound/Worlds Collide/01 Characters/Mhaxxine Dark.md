---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Human
  - Caster
  - Null's Disease
  - Void Crystal
  - Synthspire
  - NULL Region
  - Void Operation & Investigation Department
  - Void Special Operation Division 1
  - Dawn Squad
  - Blackreign Gang
location:
  origin: Rockcore City
  nation:
  city:
  town:
  village:
  poi:
faction:
  active: Blackreign Gang
  Blackreign Gang:
    status: Active
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/In Darkness Blank.png
galleryImage:
posterImage:
  - Arcane-Bound/Archives/In Darkness Final.png
aliases: Mhax
relations:
  - Krystalle Eos
  - Clair Tempest
manaPresence: None
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
> |   Name  |  Mhaxxine Dark   |
> | --- | --- |
> |   Nickname  |  "Mhax"   |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |  October 23rd   |
> |   Age  |  Young Adult   |
> |   Species  |  [[Human]]   |
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |   Origin  |  [[Rockcore City]], [[NULL Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]   |
> |   Faction/s  |  [[Blackreign Gang]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

---
# **History** 
## Background 

# **Appearance** 
## General Appearance 
%% Choker -> void inhibitor %%

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

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 23, 2021** - [Original Post](https://x.com/Exionot/status/1452505549208125447?s=20)
> ## Changes over the years
> - Remained untouched and unnamed until October 20, 2025 where she was redrawn and was given the name "Mhax" by a friend which turned into her current name "Mhaxxine Dark".
> - The redraw remained loyal to her original design though it is subject to change (I don't know what to do with her).


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