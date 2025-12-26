---
type: meta
---
The following are all the unresolved notes within [[Arcane-Bound – Worlds Collide]].

```dataviewjs
// Build map: target → set of origin files
const unresolved = Object.entries(dv.app.metadataCache.unresolvedLinks)
  .filter(([, targets]) => Object.keys(targets).length);

const targetMap = {};
for (const [origin, targets] of unresolved) {
  for (const target of Object.keys(targets)) {
    targetMap[target] ??= new Set();
    targetMap[target].add(origin);
  }
}

// Compose rows, sort by count desc then target name asc (case-insensitive)
const rows = Object.entries(targetMap)
  .map(([target, originsSet]) => ({
    target,
    count: originsSet.size,
    origins: Array.from(originsSet).map(o => dv.fileLink(o))
  }))
  .sort((a, b) => {
    if (b.count !== a.count) return b.count - a.count; // higher reference count first
    return a.target.localeCompare(b.target, undefined, { sensitivity: "base" }); // tie-breaker alphabetical
  })
  .map(r => [dv.fileLink(r.target), r.count, r.origins]);

dv.table(["Unresolved Note", "Ref count", "Linked from"], rows);
```