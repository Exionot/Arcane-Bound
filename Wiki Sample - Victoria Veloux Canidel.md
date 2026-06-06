---
type: character
category:
  - Characters
  - Gen 0 Characters
  - Virken
  - Vulpes
  - Caster
  - Vixen's Claws
  - Synthspire
  - Lightspeed City
  - Canidel Family
  - High Alliance on Terran Society
  - Starveil Retrieval Co.
location:
  nation: HyperCorp Republic
  city: Astral City
  origin: Lightspeed City
faction:
  active: Starveil Retrieval Co.
  Starveil Retrieval Co.:
    status: Active
    rank: Leader
    alias: null
systemUsed:
  - Solid-Light Energy
itemUsed:
  - Vixen's Claws
aliases:
  - Vi
  - Victoria "Vi" Veloux Canidel
relations:
  - Canidel Family
  - Rem Orion
manaPresence: None
magicAffinity: Caster
stub: false
---

> [!infobox] **Victoria Veloux Canidel**
> ---
> ![[ᐳExternal Assets/Noble Wanderer Blank.png]]
> ---
> #### Profile
> 
> | | |
> |---|---|
> | **Full Name** | Victoria Veloux Canidel |
> | **Preferred Name** | "Vi" |
> | **Nickname/s** | "Little Fox" ([[Ion Kynne]]) |
> | **Sex** | Female |
> | **Age** | Young Adult |
> | **Height** | 153 cm (166 cm incl. ears) |
> | **Species** | [[Virken]] (Vulpes) |
> | **Mana Presence** | None |
> | **Magic Affinity** | Caster |
> | **Origin** | [[Lightspeed City]], [[HyperCorp Republic]] |
> | **Residence** | [[Astral City]], [[HyperCorp Republic]] |
> | **Faction** | [[Starveil Retrieval Co.]] (Leader) |
> | **Status** | Active |

**Victoria Veloux Canidel**, more commonly known as **Vi**, is a [[Virken]] (Vulpes) and former noble of the [[Canidel Family]] from [[Lightspeed City]] in [[HyperCorp Republic]]. After running away from her family, she settled in [[Astral City]] under the alias "Vi", where she works as a server at [[The Food Horizon]] and secretly operates as the founder and leader of [[Starveil Retrieval Co.]] — a phantom thief faction disguised as a legitimate retrieval agency.

---

## Background

Vi was born into the noble [[Canidel Family]] in [[Lightspeed City]], a bustling metropolitan city within the [[HyperCorp Republic]]. The circumstances behind her departure from the family remain undisclosed, but at some point she abandoned her noble title and relocated to [[Astral City]], where she began using the shortened name "Vi" in place of her full name.

In [[Astral City]], she established a dual life: working openly as a server at [[The Food Horizon]] in the [[Tiamat District]], while covertly founding [[Starveil Retrieval Co.]] as a front for high-value theft operations. She delegates most contracts to her members, personally joining only when a mission is deemed too high-risk to leave unsupervised.

### During The Convergence

> *Main article: [[The Convergence]]*

Vi was among those transported to [[Brickstone Town]] during The Convergence, where she crossed paths with [[Ted Ursa]] and the two became acquaintances.

> *See narrative: [[Narrative - Guide of an unknown world]]*

---

## Appearance

Vi presents a human-like figure with distinctly fox-like ears and a tail — characteristic of the Vulpes subtype of [[Virken]]. She has short pale purple hair and deep purple eyes. She wears two piercings on her left ear, one of which bears a four-pointed star charm.

### Outfits

| Context | Description |
|---|---|
| **In Synthspire** | White long-sleeved shirt, black vest, black pants, buckled belt, and a purple tie. [[Vixen's Claws]] worn at the hip. |
| **In Arcaena** | Khaki long-sleeved shirt, brown sweater vest, brown pants, and buckled belt. Still carries [[Vixen's Claws]]. |

---

## Personality

Vi carries herself with a composed elegance that belies her runaway noble status. She is self-reliant by nature and strongly prefers working alone, though she has enough pragmatism to recognize when collaboration is necessary. Her reliability and decisive demeanor have earned her considerable respect among her peers.

In more casual company, a different side of Vi surfaces — mischievous and playful, occasionally pulling pranks on those she trusts. She rarely has time for personal upkeep, a habit that extends to her often-neglected tail.

> [!quote]
> *"Ugh... Can you quit calling me by **that name** already? I told you my name is Vi!"*
> — Vi, when addressed by her full name

---

## Skills & Abilities

| Ability | Description |
|---|---|
| **Extreme Speed** | Reportedly capable of running to a city and back in under an hour. |
| **Stealth** | Able to move and conceal herself with enough precision to approach targets completely undetected. |
| **Advanced Hearing** | Can identify and distinguish individuals solely by the sound of their footsteps. |

```dataview
TABLE abilityType as "Type" WHERE contains(this.abilityUsed, file.name)
```

---

## Items & Equipment

| Item | Role |
|---|---|
| [[Vixen's Claws]] | Primary weapon, carried at all times regardless of outfit. |

```dataview
TABLE itemType as "Type" WHERE contains(this.itemUsed, file.name)
```

---

## Affiliations

### Starveil Retrieval Co.

> *Main article: [[Starveil Retrieval Co.]]*

Vi is the **founder and acting leader** of [[Starveil Retrieval Co.]], a phantom thief operation publicly presented as a retrieval agency based in [[Astral City]]. [[Rem Orion]] serves as the public-facing managing director, shielding Vi's identity as the true head of the faction. Vi steps in directly only for high-risk contracts.

### Canidel Family

> *Main article: [[Canidel Family]]*

Vi's family of origin. She severed ties with them at an unknown point before the events of the story. The nature of her departure and her current relationship with the family has not been revealed.

---

## Relations

### Rem Orion

> *Main article: [[Rem Orion]]*

Rem serves as Vi's personal assistant within [[Starveil Retrieval Co.]], and is one of the faction's earliest members. Rem has a noted fixation on grooming Vi's tail — something Vi openly acknowledges as an obsession, yet permits out of trust. Their dynamic is one of quiet mutual reliance.

---

## See Also

- [[Ion Kynne]] — Refers to Vi as "Little Fox"
- [[Ted Ursa]] — Met during [[The Convergence]]
- [[The Food Horizon]] — Vi's place of employment in [[Astral City]]
- [[Vixen's Claws]] — Vi's signature weapon
- [[Virken]] — Vi's species
- [[HyperCorp Republic]] — Vi's home nation
- [[Solid-Light Energy]] — Energy system Vi utilizes

---

## Narratives

```dataview
TABLE
  regexreplace(file.folder, ".*/", "") AS "Story Arc"
FROM "Arcane-Bound/Worlds Collide/07 Lore/00 Narratives"
WHERE contains(file.outlinks, this.file.link)
SORT file.folder ASC, file.name ASC
```

---

## Gallery

![[Arcane-Bound/Archives/Being Vigilant Final.png]]
![[Arcane-Bound/Archives/Vixen's Secret Final.png]]
![[Arcane-Bound/Archives/Noble Wanderer Final.png]]

---

## Behind the Scenes

> [!note]- Author Notes (click to expand)
> ### First Appearance
> **March 6, 2022** — [Original Post](https://x.com/ExionKFP/status/1500350706808946689?s=20)
> 
> ### Design History
> - Originally named "Vi" as a shortening of *Vi*olet; later formalized into "Victoria Veloux Canidel"
> - Replaced Clair in the creator's banner
> - **November 8, 2022** — First redesign: hair shifted from bright lavender to toned-down purple; choker and hairpin removed
> - **May 18, 2023** — Second redesign to match current art style; became the basis for her present design
