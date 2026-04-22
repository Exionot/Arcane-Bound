---
type: item
itemType: attachment
systemUsed:
  - Arcaenian Magic
  - Mana
galleryImage:
status: Commonly Used
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Arcaenian Band  |
> | --- | --- |
> |  Type  |  Attachment  |
> |  Origin   |  [[Arcaena]]   |
> |  System  |  [[Arcaenian Magic]]  |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview**
The **Arcaenian Band** is a spellcasting tool used in [[Arcaenian Magic#Arcana|Arcana]]. It is a modern staple of [[Arcaenian Magic]], without it, no modern magic would be casted. 

The **Arcaenian Band** allows for a more efficient spellcasting for it also amplifies the mana passed through it.

# **Appearance**
A strip of enchanted cloth with an [[Arcaenic Crystal]] tied to one of its end. Some have designs that include a group or kingdom's insignia.

# **Mechanism**
The **Arcaenian Band** is wrapped into a staff and works by channeling the powers of the [[Arcaenic Crystal]] using the staff as a vessel, amplifying mana output, allowing the user to cast powerful spells for less mana.

The amplification of the **Arcaenian Band** relies on the purity and size of the [[Arcaenic Crystal]], making large large high purity crystals more powerful and valuable. However, using large Arcaenic Crystals are considered to be impractical since it also adds to the staff's weight. 

# **Limitation**
The **Arcaenian Band** must not be wrapped onto a living being for doing so will cause a [[Death Siphon]](a self siphoning effect to the user's [[Mana]], making mana control near impossible and cast outputs reach beyond its maximum limit, which can cause the spell to self-detonate) when any type of magic is casted.

# **Application**
## Arcana
> **Full Note:** [[Arcaenian Magic#Arcana|Arcana]]

# **History**
## Era of The Goblins
> **Full Note:** [[Era of The Goblins]]

It was used by swordsmen from [[Bauserst City]] in the [[Goblin War]]. The use of Arcaenian Bands led to the [[Shortage of Arcaenic Crystals]] which banned the use of Arcaenian Bands from the military. 

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

