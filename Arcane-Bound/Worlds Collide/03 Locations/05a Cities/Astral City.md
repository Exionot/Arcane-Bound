---
type: location
locationType:
  - city
location: HyperCorp Republic
system: technology
galleryImage: 
aliases:
---

# **Basic Information** 
**Name**: `= this.file.name`
**Type**: City
**Location**: [[NOVA Region]], [[HyperCorp Republic]], [[Thunderdrop Sector]], [[Synthspire]]

# **Description** 
**Astral City** is a city located in the [[NOVA Region|Nova Region]] of [[HyperCorp Republic]]. A city dedicated to astronomy, it is where majority of space research companies like [[Aerospace Space & Technology Research Organization|ASTRO]] are found. Launch stations for the [[Ring of Orion]] are also found in **Astral City**, allowing commercial and cargo transport to the ring.

# **Areas** 
## Tiamat Region
> **Full Note:** [[Tiamat Region]]

# **Subareas** 
## Tiamat Region
- [[Starlight Tower]]

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