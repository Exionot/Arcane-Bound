---
type: location 
locationType: nation 
location: Northern Lands
system: magic
galleryImage:
aliases:
- Frostalies
---

# **Basic Information** 
**Name**: Frostalies Kingdom
**Type**: Kingdom
**Location**: [[Northern Lands]], [[Arcaena]]
**Capital**: [[Glacialis City]]
**Holder of Power**:

# **Description** 
**Frostalies** is a kingdom found in the northern edges of the [[Northern Lands]]. It is a kingdom of ice and snow, mountainous regions are found within the kingdom, the [[Nivelgor Region]] experiences long winters, while the [[Frienna Region]] receives regular snowing throughout the year. A large population of [[Elves]] live in **Frostalies**, which contributes to the kingdom's specialization of [[Elemental Magic#Glacia|Glacia Magic]]. ^d9de81

# **Areas**
## Frienna Region
> **Full Note:** [[Frienna Region]]

## Nivelgor Region
> **Full Note:** [[Nivelgor Region]]

# **Subareas** 
## Frienna Region
- [[Glacialis City]]
- [[Icepeak Mountains]]

## Nivelgor Region
- [[Snowdrop Village]] 

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