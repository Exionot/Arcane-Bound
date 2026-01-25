---
type: system
systemType: Technology
---

> [!infobox] **`= this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |  Void Crystal  |
> | --- | --- |
> |  Scientific Name  |  "Crystalline Ether-207"  |
> |  Type  |  Material  |
> |  Origin   |  [[Rockcore City]]  |
> |  Status  |  `INPUT[usageStatus][]`  |

# **Overview** 
**Void Crystals**, scientifically named **Crystalline Ether-207** or **CE-207**, are a synthesized organic crystalline material that was originally synthesized in [[Rockcore City]] of the [[Republic of Chloros]]. It was created as a "solution to civilization's waste". Though its synthesis was a major success, this innovation quickly took a dark turn for it spread uncontrollably, turning other materials into **Void Crystals**, slowly corrupting anything in its path.

# **How does it work?**
**Void Crystals** were initially synthesized to turn waste (non-biodegradable trash) into energy. It works by slowly transforming the molecules of a material into crystals. However, once it was synthesized, it's spread was inevitable. 

When broken, the crystals emit energy which is converted into electricity; this allowed it to become a new type of reusable energy, allowing [[Republic of Chloros|Chloros]] to run on pure green energy. When the broken crystal has emitted all its energy it dissipates into air, eliminating waste while providing clean energy.

However, prolonged exposure to the crystals will eventually convert any object or material into **void Crystals**. This was a dark discovery for the habitants of Chloros since [[Void Energy]] was already widely adapted into majority of Chloros and without it, the nation would, without a doubt, be affected dramatically.

Shortly after being classified as an uncontainable threat by the [[Chloros Administration]], people started showing symptoms of corruption, small pieces of crystals emerge from their skin. This corruption would later be categorized as an infection called [[Null's Disease]] and individuals with this infection will be marked with the [[Black Tag]] where they would be under constant monitoring.

Though being able to corrupt both organic and inorganic materials, its corruption speed differs between the two having a faster corruption speed in organic materials.


%% 
CURRENTLY UNDISCOVERED
**Void Crystals** corrupt individuals by depleting their mana, Synthspireians naturally have a low amount of mana below the detectable threshold which is why they are vulnerable to [[Null's Disease]] while Arcaenians are more resistant. 

However, having a larger amount of mana does not mean it is not a threat to Arcaenians; since the crystals silently absorb mana, it can mess up a mage's mana equilibrium, making their spells weaker or if a large cluster is within proximity, the rate in which the crystals absorb mana could interfere with mana control, causing accidental high output casts.
%%

# **Application** 
## Waste Elimination and Energy Production

# **Variants**
## Void Plasma

# **Limitations**

# **History** 

# **Known Users**
```dataview
TABLE faction.active as "Faction" 
WHERE type = "character" AND contains(systemUsed, this.file.name)
FLATTEN faction
```

# **Used in** 
## Skills / Abilities 
```dataview
TABLE abilityType as "Type" WHERE type = "ability" AND contains(systemUsed, this.file.name)
```
## Items 
```dataview
TABLE itemType as "Type" WHERE type = "item" AND contains(systemUsed, this.file.name)
```

# Additional Information

> [!summary] Initial Idea 
> - A crystal like material that slowly corrupts an individual in proximity. It corrupts by slowly replacing the individual's cell with crystal shards.
> - It corrupts organic material faster than inorganic ones.
> - Individuals with high concentration of crystals will be diagnosed with "Null's disease". As the corruption worsen, crystal shards emerge from the individual's body. 
> - Infected (but not corrupted) individuals will be marked with the "Black Tag" by the government.
> - Meant to be the Synthspire version of the Arcaenian Crystal. On occasion it glows the color of the Arcaenian Crystal. 
> - Scientifically named as "Crystalline Ether-207" / "CE-207" then later nicknamed as "Void Crystals" due to it's dark color that resembled looking into an endless abyss.
> ## References
> **Zenless Zone Zero** - Ether
> **Arknights & Arknights: Endfield** - Originium


# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):profileImage]
```

 ```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```