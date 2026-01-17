---
type: character
location:
  nation: Verdthorne Kingdom
  city: 
  town: 
  village: Lenben Village
  poi: 
  origin: Lenben Village
faction:
  active: 
  Guild of Arcane Healers:
    status: Alumni
    rank: Master Healer
    alias: 
systemUsed:
  - Mana
  - Arcaenian Magic
  - Healing Magic
  - Elemental Magic
abilityUsed:
  - Transient Bolt
itemUsed:
  - Arcaenian Band
  - Mint's Staff
profileImage: ᐳExternal Assets/Mint_Arcaena_Outfit.png
galleryImage:
  - ᐳExternal Assets/Mint_Arcaena_Weapon_Drawn.png
  - ᐳExternal Assets/Mint_Synthspire_Glasses.png
posterImage:
  - Arcane-Bound/Archives/Staying Minty Final.png
  - Arcane-Bound/Archives/Arcane Origins Final.png
  - Arcane-Bound/Archives/Feeling Relaxed Final.png
aliases:
  - Mint
relations:
  - Aura Brillfer
  - Ion Kynne
---

```meta-bind
INPUT[imageSuggester(optionQuery("ᐳExternal Assets"), class(character-img)):profileImage]
```
> [!character]
> **"Your bed is so fluffy! I want to stay in it forever!"**
> -Mint Evergreen on Aura's bed


# **Basic Information** 
**Name**: `= this.file.name`
**Sex**: Female 
**Age**: Young Adult
**Birthday**: 
**Species**: [[Virken]] (Feline)
**Origin**: [[Lenben Village]], [[Phthalo Region]], [[Verdthorne Kingdom]], [[Central Lands]], [[Arcaena]]
**Hobbies**: Gardening
**Nickname/s**:
**Faction/s**: [[Guild of Arcane Healers]] (Former member)
**Relation/s**: 
```dataviewjs
const relations = dv.current().relations;
if (relations != null){
	dv.list(relations.map(p => `[[${p}]]`));
}
```

**Character Thread**: [[Mint Evergreen Narratives Manuscript]]

---
# **History** 
## Background 
**Mint Evergreen** is a [[Virken]] mage from [[Lenben Village]]. She is a former member of the [[Guild of Arcane Healers]] and used to serve as the village's healer before pursuing magic.
## Early childhood 
**Mint** was disallowed by her parents to learn offensive magic as a tradition in their village and in fear of her getting harmed. They enrolled her to the [[Academy of Healers]] to learn [[Elemental Magic#Vitalis|Vitalis]] where she later became a member of the [[Guild of Arcane Healers]]. Though not in favor of this decision, she had to comply due to the village's tradition.

Despite being taught healing magic, **Mint** stayed focused in her trainings treating it as if she was learning offensive magic. This gave her an advantage compared to her colleagues, her mana control was better than most of the young mages, she's able to cast healing spells faster than most beginners.
## Young Adolescence 
After being part of the [[Guild of Arcane Healers]] for more than half a decade, **Mint** craved to learn real magic and reach her true potential. Her parents disagreed with her decision and made it clear that they would not be supporting her if she continued. Despite the lack of support from her parents, Mint went on to pursue the art of magic knowing that she too can be as powerful as one of [[Arcaena]]'s [[Ace Mages]].

She has been recruited multiple times by [[Ion Kynne]] to join the [[Wandering Traders of Arcaena]], even joining one of their trip across [[Arcaena]]. But despite her experience and connections with the guild, Mint refused to join the [[Wandering Traders of Arcaena|Wanderers]]. She wanted to explore the lands more freely and learn new spells, even taking quests in exchange of tomes and grimoires.
## During The Convergence
**Mint** was transported to the technologically advanced world of [[Fluxpoint City]], where she found and met [[Aura Brillfer]].^[[[The Convergence]]]

[[Aura Brillfer]] took her in whilst they figure out what is currently happening with the world.^[[[Narrative - Her house]]]

# **Appearance** 
## General Appearance 
A human with feline-like ears and tail. She has a long mint-green hair with emerald-like eyes. 

## Outfits
### In [[Arcaena]]
Her hairstyle is a big singular braid. She wears a short light blue with gold accent poncho with a hood on top of her black long sleeved shirt. She has a gold leaf clip on her hair with a gold cat enamel holding her poncho together.

### In [[Synthspire]]
She wears a light blue jacket, with piercings on both of her ears(2 on the left, 1 on the right).

# **Personality** 
## Before [[The Convergence]]
**Mint** is seen as kind and helpful in [[Lenben Village|Lenben]], she is well disciplined and determined in pursuing her goals.

On a serious day, she is able to get task done quickly. She is also very efficient in multitasking, using her tail in her advantage.

However, majority of the time she is a playful and wholesome feline. She plays with the children of the village and teaches them magic. She can also be carefree from time to time being too relaxed and sometimes acting childish.

She is also very curious about her surroundings, she wants to learn the world and discover magic never seen before.

# **Skills and Abilities** 
## Healing mastery 
**Mint** is capable of healing large, life-threatening wounds within seconds. It is also rumored that she is able to regenerate severed limbs.
## Expertise in magic 
**Mint** has traveled the majority of [[Arcaena]] in pursuit of learning new magic. She has a wide variety of spells and attacks but only uses them in tight situations.
## Mana invisibility 
She is able to conceal her mana aura, making it near impossible for other mages to detect her.
## Feline instincts 
She has a 6th sense that allow her to detect danger and dodge incoming attacks.
## Tail mobility 
She is able to use her tail as another hand for extra efficiency.

```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

# **Items and Equipment**
```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

# **Factions** 
## Guild of Arcane Healers
> **Full Note:** [[Guild of Arcane Healers]]

**Mint** was part of the [[Guild of Arcane Healers]] during her early childhood. 

She was one the best healers in the guild, casting healing magic like it's second nature. She remained as a part of the guild for majority of her childhood, helping people in need and teaching young mages healing spells for several years.

After years of helping the guild, Mint finally made up her mind that wanted to learn magic beyond the healing spells she's been taught. She left the guild as one of the best healers they have trained.

# **Relations**
## Aura
> **Full Note:** [[Aura Brillfer]]

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
