---
type: character
location:
  origin: Unknown
  nation: Verdthorne Kingdom
  city:
  town:
  village:
  poi: Vilebloom Forest
faction:
  active:
  FactionName:
    status:
    rank:
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/Devil's Charm Blank.png
galleryImage:
posterImage:
  - Arcane-Bound/Archives/Devil's Charm Final.png
aliases:
  - Demon of the Vilebloom Forest
relations:
  - Mhaxxine Dark
  - Rem Orion
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Clair Tempest   |
> | --- | --- |
> |   Nickname  |  "Demon of the forest"   |
> |   Sex  |  Female   |
> |   Height  |     |
> |   Birthday  |     |
> |   Age  |  ~150 Years Old   |
> |   Species  |  [[Devil]]   |
> |   Origin  |  [[Underworld]], [[Arcaena]]   |
> |   Faction/s  |     |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> This note is about Clair's [[Arcaena|Arcaenian]] variant. For the [[Underworld|Underworldian]] variant, see [[Underworldian - Clair]].

> **Character Thread**: 

> [!Character] 
> **"Please go... This forest is dangerous with people like me."**
> -Clair guiding a lost traveler



---
# **History** 
## Background 
**`= this.file.name`** is a [[Devil]] from the underworld of [[Arcaena]]. She's a natural [[Elemental Magic#^9ead57|Pyra]] mage. 

She often causes chaos within the different kingdoms of [[Arcaena]] during her early years. However, that careless behavior caused her right horn to be shot by an wind-charged arrow while she was in the [[Aquarin Kingdom]]. This incident caused her horn to break which also caused a conflict with her psyche.

She was then exiled from the [[Underworld]] after this incident where she then decided to reside in [[Vilebloom Forest]] of [[Verdthorne Kingdom]]. 

After her exile in the [[Underworld]] the started experiencing conflicts with her identity and mentality which led her to her decision to start a new identity in [[Vilebloom Forest]]. She started practicing [[Elemental Magic#^c09a5b|Flora]] and [[Elemental Magic#^f32d09|Vitalis]] magic. It is rumored that she is the reason why [[Vilebloom Forest]] shifted from a lush green forest to an almost bright blue forest.

Due to her [[Devil]] lineage, residents that have seen her in the forest have spread rumors of her being dangerous giving her the name 'Demon of the [[Vilebloom Forest]]'. It also caused people to traverse into the [[Vilebloom Forest]] less because of these rumors.
# **Appearance** 
## General Appearance 
She has cyan hair with gold-like highlights and black horns. Her eyes are a brighter shade of cyan. Like all other [[Devil|Devils]] she has long pointy ears and a devil's tail. 

Her right horn is broken due to an incident during her time in the [[Underworld]].

# **Personality** 
**Clair** is shy and often reserved, nobody really knows about her personalities due her isolation in [[Vilebloom Forest]]. However, whenever there are lost travelers in the forest, which are mostly children, she helps and points the way to exit the forest and whenever she gets actual lost travelers they almost always try to fight her off if not pass out from fear, so she just immobilize them with a binding spell and drag them away from the forest.

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

# **Other Information** 

> [!NOTE] Meta Note
> ### Character Traits
>  - #### Split Persona Architect
>  She's a split between her devil side and human side because of her broken horn. Her devil side sometimes takes over and does devil things, but her usual self is sweet and often shies away due to her unpredictable swings 
>  *(Ref: Cheval Grand | Still in Love)*
>  ### Magic 
>  - #### [[Elemental Magic#^c09a5b|Flora Magic]] 
>  She has a binding spell that wraps the target with silk-like threads that are as strong as steel
>  *(Ref: Silksong)* 

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 26, 2021** - [Original Post](https://x.com/Exionot/status/1452695715616940032?s=20)
> ## Changes over the years
> - She was once part of my banner until she was replaced by Vi
> - Was named "Teal" then changed to "Haruka" then to "Clair Tempest" in this project
> - Remained dormant until the first redraw in January 10, 2025 (Age of Elementals)
> - Another redraw was made in October 25, 2025 to fix her hair color from the first redraw (greenish cyan to blueish cyan) 
> - Design remained similar besides the change in outfit (still subject to change)

## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives
```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Character Thread"
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

## Character Profile Image
```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
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