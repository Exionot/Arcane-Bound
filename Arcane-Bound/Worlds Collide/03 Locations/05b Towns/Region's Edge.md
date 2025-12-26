---
type: location
locationType:
  - town
location: CinderScorch Sector
system: technology
galleryImage: 
aliases:
---

# **Basic Information** 
**Name**: Region's Edge
**Type**: Town
**Location**: [[CinderScorch Sector]], [[Synthspire]]
**Nearby Location/s**:

# **Description** 
**Region's Edge** is a town located within the edge of [[CinderScorch Sector|CinderScorch Sector]]. It specializes in [[Pyro Technology]] and is one of the major source of [[Pyrathyl Ether]]. ^07a5b3

# **Points of Interest** 

# **Subpoints of Interest** 

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