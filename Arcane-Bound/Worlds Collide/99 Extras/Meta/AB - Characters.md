---
type: meta
---

The following is a complete list of all existing character notes within [[Arcane-Bound – Worlds Collide]].
# **Character List**
```dataview
TABLE WITHOUT ID embed(link(profileImage, "100")) as "Icon", link(file.name) as "Name", link(location.origin) as "Origin", link(faction.active) as "Faction"
FROM "Arcane-Bound"
WHERE contains(type, "character")
FLATTEN faction
SORT file.name asc, faction.active asc
```