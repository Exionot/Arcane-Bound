---
type: narrative
characters:
  - Mint Evergreen
location:
  - Lenben Village
time:
  year: 2405
  month: Late Autumn
  day: 25th
related:
cssclasses:
  - narrative
---

> [!Invisible]
> |  `$= dv.span(dv.current().prevNarrative ? "==[[" + dv.current().prevNarrative + "\|Previous]]==" : "")`  |  `$= dv.span(dv.current().nextNarrative ? "==[[" + dv.current().nextNarrative + "\|Next]]==" : "")`  |
> |---|---|
> |   |   |

---

**Character/s**: `$= dv.span(dv.current().characters ? dv.current().characters.map(p => "==[[" + p + "]]==").join(" ") : "")`
**Location**: `$= dv.span(dv.current().location == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().location ? dv.current().location.map(p => "==[[" + p + "]]==").join(" ") : "Unknown")`
**Time of Occurrence**: `$= dv.span(dv.current().time == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().time ? dv.current().time.year + ", " + dv.current().time.day + " of " + dv.current().time.month : "Unknown")`
`$= dv.span(dv.current().related ? "**Related:** " + dv.current().related.map(p => "==[[" + p + "]]==").join(" ") : "")`

Arcaenian magic, an artform shared by all. Everyone has their own unique style; it is a way of expressing, and I want to see everyone's way of expressing their magic.


> [!NOTE] Notes
> Additional information goes here.
