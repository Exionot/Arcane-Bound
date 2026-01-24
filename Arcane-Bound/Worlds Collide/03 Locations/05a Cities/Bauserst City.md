---
type: location
locationType:
  - city
location: Phthalo Region
system: magic
galleryImage: 
aliases:
  - Bauserst
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().areaImage ? "![[" + dv.current().areaImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Bauserst City   |
> | --- | --- |
> |  Type  |  Capital City   |
> |  Leader/s   |  [[Grant Verdthorne\|King Grant Verdthorne]]   |
> |  Location   |  [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]]   |

# **Basic Information** 
**Name**: Bauserst City
**Type**: Capital City
**Location**: [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]]

# **Description** 
**Bauserst City** is the capital city of [[Verdthorne Kingdom]] located in [[Phthalo Region]]. It specializes in advanced alchemy and magic involving plants.

# **Areas** 
## Bauer Quarter
> **Full Note:** [[Bauer Quarter]]

## Almia Quarter
> **Full Note:** [[Almia Quarter]]

## Vyra Quarter
> **Full Note:** [[Vyra Quarter]]
 
# **Subareas** 
## Bauer Quarter
- Eastern City Gate
- Southern City Gate
- [[Cathedrum so' Bauserst]]
- [[Bauserst City Central]]
- [[Bauserst Palace]]
- [[Guild of Arcane Healers]]
- [[School of Flora]]
- Traders' Passage
- Warriors' Inn

## Almia Quarter
- Northern City Gate
- Northern Park
- [[Bauserst Racecourse]]
- [[Racer's Inn]]
- [[Maya's Alchemy Shop]]
- [[Alchemist Academy]]

## Vyra Quarter
- Western City Gate
- [[Academy of Healers]]

# **History** 

# **Characters** 
```dataviewjs
const name = dv.current().file.name;

const pages = dv.pages().where(p => { 
	for(let key in p.location){ 
		if (key === "active") continue;
		const locationValue = p.location[key]
		if (Array.isArray(locationValue) && locationValue.includes(name)){ 
			return true; 
		} 
		if (locationValue === name) return true;
	} 
	return false;
});

dv.table(
["Name", "Origin", "Faction"],
pages.map(p => [p.file.link, p.location.origin, p.faction.active])
)
```

---

# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):areaImage]
```

```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```