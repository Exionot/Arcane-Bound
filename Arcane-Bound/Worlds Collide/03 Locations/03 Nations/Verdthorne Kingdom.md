---
type: location 
locationType: nation
location: Central Lands
system: magic
galleryImage:
aliases:
- Verdthorne
---

# **Basic Information** 
**Name**: Verdthorne Kingdom 
**Type**: Kingdom 
**Location**: [[Central Lands]], [[Arcaena]]
**Capital**: [[Bauserst City]]
**Holder of Power**:

# **Description** 
**Verdthorne** is kingdom located in the [[Central Lands]] of [[Arcaena]]. It is known for its specialization in [[Elemental Magic##Flora|Flora Magic]] and [[Elemental Magic###Vitalis|Vitalis]]. ^96bef9

# **Areas**
## Phthalo Region
> **Full Note:** [[Phthalo Region]]

## Rhilekos Region
> **Full Note:** [[Rhilekos Region]]

## Verdthorne Forest
> **Full Note:** [[Verdthorne Forest]]

# **Subareas** 
## Phthalo Region
- [[Bauserst City]]
- [[Lenben Village]]
- [[Vilebloom Forest]]

## Rhilekos Region
- [[Rhilekos City]]

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