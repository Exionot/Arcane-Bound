---
type: location 
locationType: city
location: Lushborne Region
system: technology 
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**: `= this.file.name`
**Type**: Capital City
**Location**: [[Lushborne Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]

# **Description** 
**Newslate City** is the new capital of the [[Republic of Chloros]]. With the fall of [[Rockcore City]] due to [[Void Crystal]] corruption, **Newslate City** remained open for evacuees from the [[Rockcore City|Old Capital]]. After the fall of [[Rockcore City]], **Newslate City** was declared as the new capital of [[Republic of Chloros|Chloros]]. 

# **Areas** 
## Ground Quarter
> **Full Note:** [[Ground Quarter]]

# **Subareas** 
## Ground Quarter
- [[VOID Headquarters]]

# **History** 
## During the fall of Rockcore City
- **Newslate City** opened for evacuees from [[Rockcore City]] to escape the expanding [[Void Crystal]] corruption.

## After the fall of Rockcore City
- **Newslate City** was declared as the new capital of the [[Republic of Chloros]].

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