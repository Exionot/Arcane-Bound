---
type: location 
locationType: nation 
location: Central Lands
system: magic
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**: `= this.file.name`
**Type**: Kingdom
**Location**: [[Central Lands]], [[Arcaena]]
**Capital**: [[Sol Capital]]
**Holder of Power**: [[King Fulgor Ignia II]] (Former)

# **Description** 
**Ignia** is the hottest kingdom in all of [[Arcaena]]. It is found in-between [[Obsidian Mountains]] and [[Sandstone Desert]] in the west of [[Central Lands]]. It is the kingdom of fire and flames, renowned for having the greatest blacksmiths in the world and its abundant metal resources.

# **Areas**
## Fulgor Region
> **Full Note:** [[Fulgor Region]]

## Pyrinia Region
> **Full Note:** [[Pyrinia Region]]

## Scorcher Region
> **Full Note:** [[Scorcher Region]]

# **Subareas** 
## Fulgor Region
- [[Sol Capital]]

## Pyrinia Region
- [[Fireblaze City]]

## Scorcher Region


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