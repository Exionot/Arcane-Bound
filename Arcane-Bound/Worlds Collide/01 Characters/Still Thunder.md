---
type: character
location:
 origin: Yushinami City
 nation: Erder Kingdom
 city: Yushinami City
 town: 
 village: 
 poi: 
faction: 
 active: Wandering Traders of Arcaena
 Wandering Traders of Arcaena: 
  status: Active
  rank: 
  alias: 
systemUsed: []
abilityUsed: 
itemUsed: 
profileImage:
galleryImage:
posterImage:
aliases:
  - スティル・サンダー (Still Thunder)
  - Stelle
relations:
  - Ion Kynne
  - Ted Ursa
  - Victoria Veloux Canidel
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```

# **Basic Information** 
**Name**:  `= this.file.name`
**Sex**: Female
**Age**: Adult
**Birthday**:
**Species**: [[Virken]] (Equus)
**Origin**: [[Yushinami City]], [[Lander Region]], [[Erde Kingdom]], [[Central Lands]], [[Arcaena]]
**Hobbies**:
**Nickname/s**: "Stelle" ([[Ion Kynne]])
**Faction/s**: [[Wandering Traders of Arcaena]]
**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```

**Character Thread**: 

---
# **History** 
## Background 
**`= this.file.name`** is a [[Virken]] from [[Yushinami City]] of [[Erde Kingdom]]. She is a retired [[Stakes Running|Stakes Runner]] who now travels the lands of [[Arcaena]] with the [[Wandering Traders of Arcaena]].

Her parents are Immovable (Father) and Thunderstorm (Mother).

**`= this.file.name`** was a [[Stakes Running|Standard Stakes Runner]] where she ran race courses without magical intervention. Her debut race was the [[Starter Stakes]] where she managed to win against [[Unknown Grace]] by pulling off a last second lead. She was seen as a "Virken who can define her era" due to her performance during her early career winning 5 consecutive races after her debut.

However, her career was cut short when she suffered a major leg injury before her first G1 race. The injury was said to take an extended period of time which led to her decision to retire early and later join the [[Wandering Traders of Arcaena]] thanks to [[Ion Kynne|Ion]]'s invitation.

She accepted [[Ion Kynne|Ion]]'s invitation as a way to keeping moving and as a chance to explore [[Arcaena]].


## Stakes Record
|  Date   |   Couse   | Stake Name (Grade)              | Place | Track | Distance | 1st Place / Runner Up |
| :-----: | :-------: | -------------------------- | :---: | :----: | :----: | --------------------- |
| 05-2402 | YUSHINAMI | [[Summer Mile Cup]] (G2)   |  1st  |  TURF  | 1600M  |                       |
| 01-2402 | YUSHINAMI | [[New Years Stakes]] (G3)   |  1st  |  TURF  | 1600M  |                       |
| 12-2401 | YUSHINAMI | [[Winter Star Cup]] (G2)   |  1st  |  TURF  | 2200M  |                       |
| 07-2401 | YUSHINAMI | [[Thunder Stakes]] (G3)    |  1st  |  TURF  | 2000M  |                       |
| 04-2401 | YUSHINAMI | [[Spring Stakes]]          |  1st  |  TURF  | 1600M  |                       |
| 01-2401 | YUSHINAMI | [[Starter Stakes]] (Debut) |  1st  |  TURF  | 1600M  | [[Unknown Grace]]     |

# **Appearance**  
## General Appearance 

# **Personality** 
**Still Thunder** is generally what someone would call a "chill friend", she usually just go with what the [[Wandering Traders of Arcaena|guild]] is up to. However, like all [[Virken|Equus Virken]], it is in their nature to have a desire to run.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**

# **Relations**
## Ion Kynne
> **Full Note:** [[Ion Kynne]]

She has been a fan of **Still Thunder** even since her debut at the [[Starter Stakes]]. 

She always tries to put back **Still Thunder** on the track, often asking her to join non-rated races, but **Still Thunder** always lightly declines, insisting on watching rather than competing.

# **Other Information** 
> [!NOTE] Note
> Though not actually based on a real horse, her name is based on JRA's naming conventions.
> Girl is literally an umamusume without the idol part.
> ### Ref
> - Fuji Kiseki (Umamusume: BOANE backstory)
> 
> Her name in katakana is: スティル・サンダー (sutiru・sandā)

## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS Folder
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
```

---

# **Gallery** 
## Character Archives Poster
```meta-bind
INPUT[imageListSuggester(optionQuery("Arcane-Bound/Archives"), class(gallery-img)):posterImage]
```

## Other Images
```meta-bind
INPUT[imageListSuggester(optionQuery("ᐳExternal Assets"), class(gallery-img)):galleryImage]
```

---

# **Navigation**
```dataviewjs
const baseFolder = "Arcane-Bound/Worlds Collide/01 Characters";
const pages = dv.pages(`"${baseFolder}"`);

// group by faction.active or null
let groups = pages.groupBy(p => p.faction?.active ?? null);

groups = groups.array().sort((a, b) => {
  // null (no faction) goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

for (const group of groups) {
  // header: show "No Faction" if null
  //dv.header(2, group.key ?? "No Faction");
  
  const title = group.key ?? "No Faction";

  // Build datacards block
  let lines = [];
  if (group.key === null) {
	  lines.push(`> [!navigation]+ ${title}`);
  }else{
	  lines.push(`> [!navigation]+ ${"[[" + title + "]]"}`);
  }
  
  lines.push(">```datacards");
  lines.push(`>TABLE profileImage`);
  lines.push(`>FROM "${baseFolder}"`);

  // Use `faction.active = null` if group key is null
  if (group.key === null) {
    lines.push(">WHERE faction.active = null");
  } else {
    lines.push(`>WHERE contains("${group.key}", faction.active)`);
  }

  lines.push(">SORT file.name ASC");
  lines.push(">");
  lines.push(">//Settings");
  lines.push(">preset: square");
 // lines.push("imageProperty: cover");
  //lines.push("imageFit: contain");
  //lines.push("imageHeight: 10px");
  lines.push(">columns: 5");
  lines.push(">fontSize: smallest");
  lines.push(">```");

  dv.el("div", lines.join("\n"));
}
```