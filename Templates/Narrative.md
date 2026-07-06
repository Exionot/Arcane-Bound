---
type: narrative
characters:
location:
time:
related:
cssclasses:
  - narrative
---

**Character/s**: `$= dv.span(dv.current().characters ? dv.current().characters.map(p => "==[[" + p + "]]==").join(" ") : "")`
**Location**: `$= dv.span(dv.current().location == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().location ? dv.current().location.map(p => "==[[" + p + "]]==").join(" ") : "Unknown")`
**Time of Occurrence**: `$= dv.span(dv.current().time == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().time ? dv.current().time.year + ", " + dv.current().time.day + " of " + dv.current().time.month : "Unknown")`
`$= dv.span(dv.current().related ? "**Related:** " + dv.current().related.map(p => "==[[" + p + "]]==").join(" ") : "")`

---

*Dialogue goes here*

---

> [!NOTE] Notes
> Extra notes about the moment goes here

