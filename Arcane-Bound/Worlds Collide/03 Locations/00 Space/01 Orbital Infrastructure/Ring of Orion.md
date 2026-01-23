---
type: location 
locationType: 
- orbital 
- nation
location: Terra
system: technology 
galleryImage:
aliases:
- 
---

# **Basic Information** 
**Name**: Ring of Orion
**Type**: Habitable Orbital Ring
**Location**: Low Planetary Orbit of [[Terra]]
**Holder of Power**:

# **Overview** 
**Ring of Orion** is a habitable orbital ring of [[Terra]]. It is located in low planetary orbit of [[Terra]], strategically placed to never face the sun. It is an engineering marvel created to accommodate the planet's growing population. ^cfbe6f

# **Appearance**

# **Areas**
## ROO-00
> **Full Note:** [[ROO-00]]

## ROO-09
> **Full Note:** [[ROO-09]]

## ROO-18
> **Full Note:** [[ROO-18]]

## ROO-27
> **Full Note:** [[ROO-27]]

# **Subareas** 
## ROO-00
 - [[Orbital Access Transit Station##Gate-00|O.A.T.S. Gate-00]]

## ROO-09
 - [[Orbital Access Transit Station##Gate-09|O.A.T.S. Gate-09]]

## ROO-18
 - [[Orbital Access Transit Station##Gate-18|O.A.T.S. Gate-18]]

## ROO-27
 - [[Orbital Access Transit Station##Gate-27|O.A.T.S. Gate-27]]

# **History** 

# **Characters**
```dataview
TABLE origin as "Origin", faction.active as "Faction"
WHERE type = "character" AND contains(nation, this.file.name)
FLATTEN faction
```

---

# **Gallery**
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```