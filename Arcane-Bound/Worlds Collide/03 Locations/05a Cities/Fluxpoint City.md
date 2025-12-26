---
type: location
locationType:
  - city
location: Split Region
system: technology
galleryImage: 
aliases:
---

# **Basic Information** 
**Name**: Fluxpoint City
**Type**: Capital City
**Location**: [[Split Region]], [[NeoTech Union]], [[Veridian Sector]], [[Synthspire]]

# **Description** 
**Fluxpoint City** is the capital of [[NeoTech Union]]. Located in [[Split Region]] of [[NeoTech Union]], the [[Hydro River]] runs through the city, dividing [[Circuit District]] and [[Fuse District]] while providing beautiful scenic views. It is known for its innovative discoveries on mechanical technology. ^854f85

# **Areas** 
## Fuse District (FP-02)
> **Full Note:** [[Fuse District]]

## Circuit District (FP-03) 
> **Full Note:** [[Circuit District]]

# **Subareas** 
## Fuse District 
- [[FluxPort]]

## Circuit District 
- [[Amphere Square]] 
	- [[Aura's Apartment]]
	- [[Protection Of Local Livelihood]]

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