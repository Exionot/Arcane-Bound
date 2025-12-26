---
type: location 
locationType: nation 
location: Central Lands
system: magic
galleryImage:
aliases:
- Erde
---

# **Basic Information** 
**Name**: Erde Kingdom 
**Type**: Kingdom 
**Location**: [[Central Lands]], [[Arcaena]]
**Capital**: [[Lithos City]]
**Holder of Power**:

# **Description** 
**Erde** is a kingdom found in the [[Central Lands]] of [[Arcaena]]. It is the kingdom of ground and soil, specializing in controlling the element [[Elemental Magic#Gaia|Gaia]]. ^d344b9

# **Areas**
## Ceres Region
> **Full Note:** [[Ceres Region]]

## Geo Region 
> **Full Note:** [[Geo Region]]

## Lander Region
> **Full Note:** [[Lander Region]]

# **Subareas** 
## Ceres Region
- [[Lushfield Jungle]]

## Geo Region
- [[Mont Mountain]]
- [[Altudus Village]]

## Lander Region
- [[Lithos City]]
- [[Brickstone Town]]

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