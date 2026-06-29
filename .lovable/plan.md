## Post-Launch Updates Plan

### 1. Pricing Update
- 7-day camp: **$499 USD** (currently $700)
- 4-day camp: **$249 USD** (new)
- Update the price sticker and any other price mentions across the page.

### 2. Dynamic 4-Day / 7-Day Selector
In the "Your Kuta Lombok Surf Camp" booking section, add a toggle (pill switch) between **4 Days** and **7 Days**. The toggle drives:
- Displayed price ($249 / $499)
- "Book Now" button destination:
  - 7-day → `https://madmonkeyhostels.com/tours-events/surf-camp`
  - 4-day → `https://madmonkeyhostels.com/tours-events/surf-camp-4-day`
- Any "what's included" line that differs by length (e.g. number of surf sessions / nights).

All **Book Now** buttons on the page (hero, sticky, etc.) will anchor-scroll to this section instead of going straight to an external URL, so the user picks 4 vs 7 first.

### 3. Itinerary Toggle (Your Week, Sorted)
Add the same 4/7 toggle above the itinerary grid:
- **7 Days**: current Check-in + Mon–Sun cards.
- **4 Days**: shortened subset (need confirmation on which 4 days — assume Check-in + Mon/Tue/Wed/Thu unless you tell me otherwise).
- Both desktop columns and mobile accordion respect the toggle.

### 4. "Everything Included" Section
- Change copy "surf week" → "**surf trip**".
- Remove **Boat Party access**.
- Remove **Video analysis sessions** (also strip from Thursday/Friday itinerary entries).
- Add new perk: **25% off food & drinks at Mad Monkey**.

### 5. Open Questions Before Build
1. For the **4-day** itinerary, which days do you want included?
2. Anything that differs between 4 vs 7 day inclusions beyond nights/surf sessions (e.g. fewer meals, no Karaoke night)?
3. Should the price sticker show both prices, or only the currently-selected one?

Once you confirm #1–#3 I'll implement everything in one pass.
