---
type: meta
---

The following is a complete list of all narratives within [[Arcane-Bound – Worlds Collide]].
# **Narrative List**
```dataviewjs
let pages = dv.pages('"Arcane-Bound"')
  .where(p => p.type && p.type.includes("narrative")).sort(p => p.file.itemType, 'asc');
dv.table(["Title"], pages.map(p => [dv.fileLink(p.file.path)]));
```