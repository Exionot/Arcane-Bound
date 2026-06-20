---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Virken
  - Vulpes
  - Caster
  - Null's Disease
  - Void Crystal
  - Amnesia
  - Synthspire
  - Evemark City
  - NULL Region
  - Void Operation & Investigation Department
  - Void Special Operation Division 1
  - Dawn Squad
  - Void Special Operation Division 9
  - Ranger Squad
  - Taskforce Icarus
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
manaPresence: None
magicAffinity: Caster
---

> [!Category]-
> `$= dv.span(dv.current().category ? dv.current().category.map(p => "==[[" + "Arcane-Bound/Worlds Collide/99 Extras/Categories/" + p + " | " + p + "]]==").join(" ") : "")`

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
> |  Mana Presence  |  `=this.manaPresence`  |
> |  Magic Affinity  |  `=this.magicAffinity`  |
> |  Condition/s  |  [[Null's Disease]]  |
> |  Infection Status  |  21V% (0.14u/L)  |
> |   Origin  |  [[Evemark City]], [[Lushborne Region]], [[Republic of Chloros]], [[Veridian Sector]], [[Synthspire]]   |
> |   Faction/s  |   [[Void Special Operation Division 9]]   |
> |   Hobbies  |     |
> |   Relations  | `$= dv.span(dv.current().relations ? dv.current().relations.map(p => "[[" + p + "]]").join("\n ") : "")`  |

> [!Character] 
> **"My past... I need to reunite with it once more."**

---
# **History** 
## Background 
**Krystalle Eos** is a [[Virken]] from [[Evemark City]] of the [[Republic of Chloros]]. She is a special operator of the [[Void Special Operation Division 9]] under the [[Void Operation & Investigation Department]]. 

She was awoken from a "failed rescue operation" where she unexpectedly contracted [[Null's Disease]] on her left arm during the operation. Her memories beyond this seems to be hazy, though she remembers her name and some of her colleagues. She has tried multiple therapeutic sessions in an attempt to regain her memories but none were effective. Her distant memories show themselves as fragmented dreams too vague to actually remember anything.

Her infection has progressed further since the incident, but with the recent improvement with [[Void Crystalline Inhibitors|void suppressants]], she has been able to slow down the infection. Despite her infection she still chose to work for [[Void Operation & Investigation Department|VOID]], in hope that her memories would come back to her one day. She now wears a special mechanical gauntlet covering the crystals and also tracking her infection status.
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

> [!NOTE] Meta History
> ## First Appearance / Creation
> **October 23, 2021** - [Original Post](https://x.com/Exionot/status/1452506452283695110?s=20)
> ## Changes over the years
> - Technically it was her original design before I tried to revamp her as another separate character on July 14, 2023.
> - Design has been overhauled, from human to fox, from long twin tails to short ones
> - Was only named on this project.
> 
> You can probably mark them as separate on their own but this was technically her *true* origin.  

## Systems Used 
```dataview
TABLE systemType as "Type" WHERE contains(this.systemUsed, file.name)
```
## Narratives

```dataviewjs
const narrativeFolder = "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives";
const pages = dv.pages(`"${narrativeFolder}"`).where(p => p.type == "narrative");

let groupedPages = pages.groupBy(p => p.file.folder ?? null);
groupedPages = groupedPages.array().sort((a, b) => {
  // null goes last
  if (a.key === null) return 1;
  if (b.key === null) return -1;
  return a.key.localeCompare(b.key);
});

//dv.el("div", groupedPages[0].rows[0].file);
for (const group of groupedPages){
	const lastSlash = (group.key).lastIndexOf("/");
	const folderName = (group.key).slice(lastSlash + 1) ?? "No Folder";
	
	let lines = [];
	let isHeaderPushed = false;
	for (const narrative of group.rows){
		const characterArr = narrative.file.frontmatter.characters ?? null;
		if (characterArr === null || !characterArr.includes(dv.current().file.name)) continue;
		
		if (!isHeaderPushed){
			lines.push(`> [!navigation]- ${folderName}`);
			isHeaderPushed = true;
		}
		
		lines.push(`> - ${narrative.file.link}`);
	}
	
	dv.el("div", lines.join("\n"));
}
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
![[Character Navigation]]

---