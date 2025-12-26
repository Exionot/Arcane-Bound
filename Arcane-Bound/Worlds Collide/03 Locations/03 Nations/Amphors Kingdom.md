---
type: location 
locationType: nation 
location: Southern Lands
system: magic
galleryImage:
aliases:
- Amphors
---

# **Basic Information** 
**Name**: Amphors Kingdom 
**Type**: Kingdom 
**Location**: [[Southern Lands]], [[Arcaena]]
**Capital**: [[Amphors City]]
**Holder of Power**:

# **Description** 
**Amphors** is a kingdom found in the [[Southern Lands]] of [[Arcaena]]. Its is the kingdom of light and electricity, known for its expertise in [[Elemental Magic#Thundra|Thundra Magic]] and [[Elemental Magic#Stellaris|Stellaris]]. ^531d8f

# **Areas**
## Electrivis Region
> **Full Note:** [[Electrivis Region]]

## Kion Region
> **Full Note:** [[Kion Region]]

# **Subareas** 
## Kion Region
- [[Ohmpalos City]]

## Electrivis Region
- [[Amphors City]]
- [[Voltiere City]]

# **History** 

# **Groups/Entities**

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