---
type: location 
locationType: nation 
location: Northern Lands
system: magic
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**: Aquarin Kingdom 
**Type**: Kingdom 
**Location**: [[Northern Lands]], [[Arcaena]]
**Capital**: [[Shellport Capital]]
**Holder of Power**:

# **Description** 
**Aquarin** is a kingdom located in the [[Northern Lands]] of [[Arcaena]]. Renowned for its expertise in [[Elemental Magic##Hydra|Hydra Magic]], and its thriving trades economy. ^c0713a

Its capital, [[Shellport Capital]], serves as one of the major trades and export hub in the [[Arcaena|Continent of Arcaena]].

# **Areas**
## Vaap-ur Region
> **Full Note:** [[Vaap-ur Region]]

# **Subareas** 
## Vaap-up Region
- [[Shellport Capital]]
- [[Fontur City]]

# **History** 

# **Groups/Entities**
## Continental Arcaenian Magic Association 
> **Full Note:** [[Continental Arcaenian Magic Association]]

## Court of The Flowing Waters
> **Full Note:** [[Court of The Flowing Waters]]

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