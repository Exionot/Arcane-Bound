---
type: item
itemType: attachment
systemUsed:
  - Arcaenian Magic
  - Mana
galleryImage:
status: Occasionally Used
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Evergreen  |
> | --- | --- |
> |  Type  |  Attachment  |
> |  Origin   |  [[Bauserst City]]   |
> |  System  |  [[Arcaenian Magic]]  |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview**
An **Arcaenian Band** is spellcasting tool used in [[Arcaenian Magic#Arcana|Arcana]]. It is a modern staple of [[Arcaenian Magic]], without it, no modern magic would be casted. 

The **Arcaenian Band** allows for a more efficient spellcasting for it also amplifies the mana passed through it.

# **Appearance**
A strip of enchanted cloth with an [[Arcaenic Crystal]] tied to one of its end. 

# **Mechanism**
An **Arcaenian Band** is wrapped into a staff and works by channeling the powers of the [[Arcaenic Crystal]] using the staff as a vessel, amplifying mana output, allowing the user to cast powerful spells for less mana.

# **Limitation**
An **Arcaenian Band** will not work when wrapped around a living being, casting spells whilst having the band wrapped to a living being makes [[Mana]] control impossible and will use majority of the user's mana, and since the band also amplifies mana output, the casted spell will be released beyond it's maximum limit which can cause unpredictable consequences.

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

# **Additional Information**
> [!NOTE] Note
> The vessel that the band wraps around is basically acts like a resistor to a circuit that prevents the bulb(spell) to receive more electricity(mana) than it needs.


---

# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):profileImage]
```

 ```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```

