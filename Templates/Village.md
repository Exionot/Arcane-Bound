---
type: location 
locationType: village
location:
system:
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
> |  Name   |    |
> | --- | --- |
> |  Nickname   |    |
> |  Type  |  Village  |
> |  Area Code  |    |
> |  Leader/s   |     |
> |  Location   |     |
> |  Nearby Location/s  |    |

# **Description** 

# **Points of Interest** 

# **Subpoints of Interest** 

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
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```