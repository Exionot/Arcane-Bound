---
type: location 
locationType: nation 
system:
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**:
**Type**:
**Location**:
**Capital**:
**Holder of Power**:

# **Description** 

# **Areas**

# **Subareas** 

# **History** 

# **Groups/Entities**

# **Characters** 
```dataview
TABLE location.origin as "Origin", faction.active as "Faction"
WHERE type = "character" AND contains(location.nation, this.file.name)
FLATTEN faction
```

```dataviewjs
const name = dv.current().file.name;

const pages = dv.pages().where(p => { 
	for(let key in p.location){ 
		if (key !== "active" && p.location[key] === name){ 
			return true; 
		} 
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