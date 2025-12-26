---
type: location 
locationType: city
location: Vaap-ur Region
system: magic
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**: Shellport Capital
**Type**: Capital City
**Location**: [[Vaap-ur Region]], [[Aquarin Kingdom]], [[Northern Lands]], [[Arcaena]]

# **Description** 
**Shellport Capital** is the capital city of [[Aquarin Kingdom]], found within the coast of [[Vaap-ur Region]]. It is a thriving coastal city, serving as the kingdom's trades and export hub. ^5e79b7

# **Areas** 
## Neptune Quarter 
> **Full Note:** [[Neptune Quarter]]

# **Subareas** 
## Neptune Quarter 
- [[Port of Neptune]]

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