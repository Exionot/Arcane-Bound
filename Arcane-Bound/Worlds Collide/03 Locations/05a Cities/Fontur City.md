---
type: location 
locationType: city
location: Vaap-ur Region
system: magic
galleryImage:
aliases:
- 
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().areaImage ? "![[" + dv.current().areaImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Fontur City  |
> | --- | --- |
> |  Type  |  City  |
> |  Leader/s   |     |
> |  Location   |  [[Vaap-ur Region]], [[Aquarin Kingdom]], [[Northern Lands]], [[Arcaena]]   |

# **Description** 

# **Areas** 
## Eterna Quarter 
> **Full Note:** [[Eterna Quarter]]

## Fluere Quarter
> **Full Note:** [[Fluere Quarter]]

# **Subareas** 
## Eterna Quarter
- [[Academy of Ace Mages]]
- [[Continental Arcaenian Magic Association]] 

## Fluere Quarter
- [[Court of The Flowing Waters]]

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