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
**Holder of Power**: [[King Al Erde I]] (Founder)

# **Description** 
**Erde** is a kingdom found in the [[Central Lands]] of [[Arcaena]], South-east of [[Verdthorne Kingdom]]. The youngest of all kingdoms, it is the kingdom of ground and soil, specializing in controlling the element [[Elemental Magic#Gaia|Gaia]]. ^d344b9

Discovered by [[King Al Erde I]], its lands once dominated by unknown crystals now known as the [[Arcaenic Crystal]], it is one of the pillars that allowed modern [[Arcaenian Magic|magic]] to become what it is today. With the crystals now contained within [[Crystal Cave]], it has become one of the major sources of [[Arcaenic Crystal]]s and [[Arcaenian Band]]s.

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
- [[Crystal Cave]]

## Lander Region
- [[Yushinami City]]
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

# **Additional Info**

> [!NOTE] Idea
> Could be the counterpart to Rockcore except they actually got it controlled. The origin of Araenic crystals is still unknown tho.


---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```