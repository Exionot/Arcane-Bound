---
type: location
locationType:
  - nation
location: Veridian Sector
system: technology
galleryImage: 
aliases:
---

# **Basic Information** 
**Name**: NeoTech Union
**Location**: [[Veridian Sector]], [[Synthspire]], [[Terra]]
**Capital**: [[Fluxpoint City]]
**Holder of Power**: [[Neo-Technology Corporation]]

# **Description** 
**NeoTech Union** is a nation of [[Synthspire]] governed by [[Neo-Technology Corporation]]. This nation is known for its great contributions to the advancements of [[Mechanical Technology]] and [[Bio-Technology]]^[[[Neo-Technology Corporation]]], providing the world with cutting edge mechanical and bionic technology.

**NeoTech Union** is a combination of three major cities which specializes in discovering and producing innovations in technology; [[Fluxpoint City]], the nation's capital, known for its innovative discoveries; [[Shatterpoint City]], known as the "testing grounds" of new technology; and [[SteelForge City]], known for the mass production of technology. ^45d57c

# **Areas**
## Ground Zero (NTU-00) 
> **Full Note:** [[Ground Zero]]

## Cable Region (NTU-01)
> **Full Note:** [[Cable Region]]

## Split Region (NTU-02)
> **Full Note:** [[Split Region]]

![[Split Region#^f4a759]]

# **Subareas** 
## Ground Zero
- [[Desolate Mounds]]
- [[Area Zero]]

## Cable Region
- [[Shatterpoint City]]
- [[SteelForge City]]

## Split Region
- [[Fluxpoint City]]
- [[Hydro River]]

# **History** 

# **Groups/Entities** 
## Neo-Technology Corporation 
> **Full Note:** [[Neo-Technology Corporation]]

![[Neo-Technology Corporation#^a4d913]]

## Protection Of Local Livelihood 
> **Full Note:** [[Protection Of Local Livelihood]]

![[Protection Of Local Livelihood#^918ba6]]

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