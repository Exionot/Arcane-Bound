---
type: meta
---

The following is a complete list of all existing factions within [[Arcane-Bound – Worlds Collide]].
# **Faction List**
```dataview
TABLE WITHOUT ID 
	file.link AS "Faction", 
	link(leader) as "Holder of Power", 
	origin AS "Origin",
	status AS "Status"
FROM "Arcane-Bound"
WHERE contains(type, "faction")
SORT file.name ASC
```
