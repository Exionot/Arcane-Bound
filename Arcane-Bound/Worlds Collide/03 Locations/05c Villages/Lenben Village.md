---
type: location 
locationType: village
location: Phtalo Region
system: magic
galleryImage:
aliases:
- Lenben
---

# **Basic Information** 
**Name**: Lenben Village
**Location**:  [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena|Arcaena]]
**Nearby Location/s**: [[Bauserst City]]

# **Description** 
**Lenben Village** is a small village located in near the outskirts of [[Bauserst City]] in [[Phthalo Region]] of [[Verdthorne Kingdom]]. It specializes in alchemy and basic [[Elemental Magic#Vitalis|Vitalis]].
# **Points of Interest** 

# **Subpoints of Interest** 
- [[Evergreen Household]]

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