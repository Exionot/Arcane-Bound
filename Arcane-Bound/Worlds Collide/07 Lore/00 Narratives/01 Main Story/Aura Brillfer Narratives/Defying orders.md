---
type: narrative
characters:
  - Aura Brillfer
location:
  - Amphere Square
time:
  year: 2405
  month: Early Winter
  day: 1st
related:
  - A fellow feline
cssclasses:
  - narrative
prevNarrative: An order you can't fight
nextNarrative: My house
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

*As Aura was about to continue her patrol in Amphere Square, a voice was heard from behind. She turns around and sees a mint green feline virken standing before her. Her clothes look ancient, something that could have been from the first civilization. Then Aura comes to a realization.*

**Aura:** *This girl... Is she what radio was talking about? I don't see why she would be dangerous.*

*Suddenly, Aura's bodyguards raises their weapons and point it towards Mint. Aura swiftly pushes their barrels downwards.*

**Aura:** Stand down, she's not even doing anything.
**Aura:** Are you in need of any assistance?

*Mint just stood still in front of Aura completely ignoring the question.*

**Aura:** ... Are you lost?
**Mint:** Ah! Yes, it seems like I got suddenly transported here...
**Mint:** Where are we right now?
**Aura:** This is Amphere Square of Fluxpoint City.
**Aura:** *If she is what radio says she is, why would she be approaching authorities?*
**Mint:** I didn't know Arcaena had such developed cities like this...
**Aura:** *Arcaena? I should just let her go, but if the other agents get to her...*
**Aura:** *Sigh... I guess responsibility is the one looking for me...*

*Aura looks back at her bodyguards.*

**Aura:** Alright, let's just wrap it up here for today. Do not report this to station, just say I dismissed you early.
**Bodyguards:** Roger!

*The bodyguards walks away leaving Aura and Mint together.*

**Aura:** Follow me.
**Aura:** *If radio wont give me anything useful, then I'll just get the information myself.*