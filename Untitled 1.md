---
type: system
systemType: corruption
status: Active Threat
---

> [!infobox] **Void Crystal**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
> 
> ---
> #### Details
> |  Name   |    |
> | --- | --- |
> |  Type  |  Crystalline Corruption Phenomenon  |
> |  Origin   |  Unknown  |
> |  System  |  Technology (Synthspire)  |
> |  Status  |  `INPUT[usageStatus][]` Active Threat  |

# **Overview** 
**Void Crystals** are a crystalline corruption phenomenon that spread uncontrollably throughout the Republic of Chloros, destroying the old capital Rockcore City and forcing mass evacuation to Lushborne Region. The crystals turn everything in their path into more crystal, creating expanding zones of corruption that have rendered the NULL Region largely uninhabitable. The Chloros Administration has industrialized and monetized crystal extraction through the Void Operation & Investigation Department, allowing controlled harvesting while managing the ongoing threat.

The Blackreign Gang operates as cult-like faction believing void crystal corruption represents the Void God's method of eradicating technology and resetting the world to its "Prime Form."

# **How does it work?**
The exact mechanics of void crystal corruption remain partially understood. What is documented:

Void crystals interact with mana systems in affected individuals. Exposure causes small crystals to emerge from skin, as seen in Krystalle Eos where crystallization appears on the left side of her face and arm (covered by mechanical gauntlet to conceal the corruption).

Crystals affect magical beings who enter corrupted areas or come into contact with crystal material. The corruption appears to spread from initial exposure points, manifesting as crystal growths on the body's surface.

Current theories under exploration suggest crystals may consume or violently extract mana from magical beings, though the specific mechanism remains undetermined. Effects being investigated include silent mana consumption weakening spell output, violent mana extraction causing dangerous loss of spell control, or complete spell control loss resulting in catastrophic overcharge and mana depletion.

The corruption's relationship to mana may explain why it devastated Republic of Chloros—Synthspirians possess trace mana below Arcaenian detection thresholds, potentially making them vulnerable to crystal corruption despite their technology-focused civilization.

# **Application** 
The Void Operation & Investigation Department extracts and studies void crystals, operating from VOID Headquarters in Newslate City with Special Operation Divisions deployed across affected regions. VOID personnel potentially use specialized anti-void masks covering eyes and nose, featuring internal digital displays allowing vision while providing protection or analytical capabilities when working near crystals.

The Blackreign Gang illegally extracts void crystal resources in the NULL Region, treating corruption as divine phenomenon rather than environmental hazard.

Krystalle Eos serves as documented example of corrupted individual continuing to function as VOID Special Operator despite visible crystallization, suggesting corruption doesn't immediately incapacitate victims or can be managed through unknown means.

# **Variants**
Raw void crystals found in naturally corrupted areas versus potentially refined or weaponized forms remain undocumented. Different corruption stages or severity levels may exist based on exposure duration or crystal concentration, though specific classifications haven't been established.

# **Limitations**
Void crystal corruption appears containable to some degree, as evidenced by the Great Divider separating NULL Region from inhabited areas and VOID's ability to operate extraction operations without total personnel loss. However, the crystals' spread destroyed entire capital city, indicating containment remains imperfect or requires constant active management.

The relationship between corruption and technology versus magic remains unclear. Crystals devastated technology-based Republic of Chloros, but their effects on transported Arcaenian mages and interaction with mana systems suggests the threat transcends simple technological vulnerability.

# **History** 
Void crystal corruption emerged in what was then the capital region of Republic of Chloros. The uncontrolled spread transformed Rockcore City into uninhabitable crystallized wasteland, forcing the catastrophic fall of the old capital.

Most of Chloros's population evacuated to Lushborne Region, away from the spreading corruption. Newslate City, which had opened its borders to Rockcore refugees during the crisis, was subsequently declared the new capital of Republic of Chloros.

Following the disaster, the Chloros Administration established the Void Operation & Investigation Department to study, contain, and manage the ongoing crystal threat. The administration monetized extraction, allowing public and private entities to harvest crystal resources in the NULL Region under VOID oversight, turning existential threat into controlled industry.

The NULL Region, containing abandoned Rockcore City and the Great Divider, remains heavily corrupted and serves as primary source for crystal material.

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

# **Gallery**
```meta-bind
INPUT[imageSuggester(optionQuery("á³External Assets"), class(gallery-img)):profileImage]
```
```meta-bind
INPUT[imageListSuggester(optionQuery("á³External Assets"), class(gallery-img)):galleryImage]
```