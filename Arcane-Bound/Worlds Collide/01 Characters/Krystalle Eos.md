---
type: character
location:
  origin: Evemark City
  nation: Republic of Chloros
  city: Evemark City
  town:
  village:
  poi:
faction:
  active: Void Special Operation Division 9
  Void Special Operation Division 9:
    status: Active
    rank: Special Operator
    alias:
systemUsed: []
abilityUsed:
itemUsed:
profileImage: ᐳExternal Assets/Crystal Clear Blank.png
galleryImage:
posterImage:
  - Arcane-Bound/Archives/Crystal Clear Final.png
aliases:
relations:
  - Mhaxxine Dark
---

> [!Infobox] **`=this.file.name`**
> ---
> `$= dv.span(dv.current().profileImage ? "![[" + dv.current().profileImage + "]]" : "")`
>  ---
> #### Profile
> 
> |   Name  |  Krystalle Eos   |
> | --- | --- |
> |  Nickname  |     |
> |  Sex  |  Female   |
> |  Height  |     |
> |  Birthday  |     |
> |  Age  |  Adult   |
> |  Species  |  [[Virken]] (Vulpes)   |
> |  Condition/s  |  [[Null's Disease]]  |
> |  Infection Status  |  21V% (0.14u/L)  |
> |   Origin  |  [[Evemark City]], [[Lushborne Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]   |
> |   Faction/s  |   [[Void Special Operation Division 9]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> **Character Thread**: 

> [!Character] 
> **"My past... I need to reunite with it once more."**

---
# **History** 
## Background 
**Krystalle Eos** is a [[Virken]] from [[Evemark City]] of the [[Republic of Chloros]]. She is a special operator of the [[Void Special Operation Division 9]] under the [[Void Operation & Investigation Department]]. 

She was awoken from a "failed operation" where she unexpectedly contracted [[Null's Disease]] on her left arm during the operation. Her memories beyond this seems to be hazy, though she remembers her name and some of her colleagues. She has tried multiple therapeutic sessions in an attempt to regain her memories but none were effective. Her distant memories show themselves as fragmented dreams too vague to actually remember anything.

Her infection has progressed further since the incident, but with the recent improvement with [[Void Crystalline Inhibitors|void suppressants]], she has been able to slow down the infection.

# **Appearance** 
## General Appearance 
A human with foxlike ears and tail. She has light pink hair with bright pink accents and magenta eyes. Small to large [[Void Crystal|Void Crystals]] emerges mostly from her left hand gradually becoming less to the side of her face. She wears a mechanical gauntlet on her left arm to cover up her infection.

# **Personality** 
**Krystalle** is seen as an energetic but professional operator, though people that remembers her past self say that she was a lot more serious, often seen as someone who can lead an army. She might seem careless now, however, she knows when be serious; her senses have yet to show themselves once again.

# **Skills and Abilities** 
```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions**
## Void Special Operation Division 9
> **Full Note:** [[Void Special Operation Division 9]]

# **Relations**

# **Other Information** 
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