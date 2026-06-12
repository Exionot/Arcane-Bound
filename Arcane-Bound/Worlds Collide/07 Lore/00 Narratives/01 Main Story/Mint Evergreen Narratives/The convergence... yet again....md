---
type: narrative 
characters:
  - Mint Evergreen
  - Ion Kynne
location:
  - Rhilekos City
  - Amphere Square
related:
time:
  year: 2405
  month: Early Winter
  day: 3rd
cssclasses:
  - narrative
---

**Character/s**: `$= dv.span(dv.current().characters ? dv.current().characters.map(p => "==[[" + p + "]]==").join(" ") : "")`
**Location**: `$= dv.span(dv.current().location == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().location ? dv.current().location.map(p => "==[[" + p + "]]==").join(" ") : "Unknown")`
**Time of Occurrence**: `$= dv.span(dv.current().time == ('unknown' || 'Unknown') ? 'Unknown' : dv.current().time ? dv.current().time.year + ", " + dv.current().time.day + " of " + dv.current().time.month : "Unknown")`
`$= dv.span(dv.current().related ? "**Related:** " + dv.current().related.map(p => "==[[" + p + "]]==").join(" ") : "")`

*It is the morning, the wanderers are preparing to go to Sol Capital. Mint is looking at one of the market stalls in the area.*

**Ion:** Mint!! We're going now!
**Mint:** Oh! Coming!

*Mint walks through the crowd of people and when she passes through, silence creeps in. Mint has found herself once again in an unknown alleyway.*

**Mint:** Ion?
**Mint:** *Oh no, not this again...*
**Mint:** *Alright, I just need to find Aura or her house but... Where am I??*


> [!NOTE] Notes
> Must be tiring to swap places every other day...
