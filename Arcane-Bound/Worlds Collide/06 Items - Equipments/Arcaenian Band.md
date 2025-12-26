---
type: item
itemType: attachment
systemUsed:
  - Arcaenian Magic
  - Mana
galleryImage: 
status: Commonly Used
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**: Arcaenian Band
**Type**: Attachment 
**Origin**: [[Arcaena]]
**System**: [[Arcaenian Magic]]

**Status**: `INPUT[usageStatus][]`

# **Overview**
An **Arcaenian Band** is spellcasting tool used in [[Arcaenian Magic#Arcana|Arcana]].

# **Appearance**
A strip of enchanted cloth with an [[Arcaenic Crystal]] tied to one of its end. 

# **Mechanism**
An **Arcaenian Band** works by channeling the powers of the [[Arcaenic Crystal]] using the object it is wrapped around to as a vessel, amplifying mana output, allowing the user to cast powerful spells for less mana.

# **Limitation**
%%The band can be wrapped around any object however, the power of depends on the purity of [[Arcaenic Crystal]]. Maybe%%

An **Arcaenian Band** will not work when wrapped around a living being, it simply consumes too much mana to be able to cast spells.

# **Application**
## Arcana
> **Full Note:** [[Arcaenian Magic#Arcana|Arcana]]

# **History**
## Era of The Goblins
> **Full Note:** [[Era of The Goblins]]

It was used by swordsmen from [[Bauserst City]] in the [[Goblin War]]. The use of arcaenian bands led to the [[Shortage of Arcaenic Crystals]] which banned the use of arcaenian bands from the military. 

# **Systems used** 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(itemUsed, this.file.name)
FLATTEN faction
```

---

# **Gallery**
 ```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```

