# Fablebrink | Design handoff

The current Figma page follows the latest website source. Earlier iterations are kept separately so the design process is easy to follow.

[Open the current designs](https://www.figma.com/design/m1JMrEeFiQKkrbcpRGlVE6?node-id=11-69)

## What is included

| Website view | Desktop frame | Phone frame |
| --- | --- | --- |
| Home | 12:1107 | 13:450 |
| Films | 12:1369 | 13:715 |
| Series | 12:1531 | 13:879 |
| Browse | 12:1693 | 13:1043 |
| My list, empty | 12:1849 | 13:1203 |
| After the Last Train | 12:1892 | 13:1246 |
| The Moon Keeps a Garden | 12:1998 | 13:1353 |
| Train preview | 12:2073 | 13:1429 |
| Moon preview | 15:999 | 15:1011 |
| Preferences | 12:2084 | 13:1440 |
| Saved series | 16:831 | 16:897 |
| Saved film | 16:964 | 16:1020 |

Desktop pages use a 1440px canvas. Phone pages use 390px. Player and preferences frames use their own dialog widths.

## Design choices carried across

The catalog uses the same sixteen fictional titles, descriptions, genres, moods, and artwork as the website. Typography uses DM Sans and DM Serif Display. Dark viewing areas sit alongside a warm light catalog, with lime used for the main actions.

Cards and navigation connect to the relevant collection or story. The two playable titles have dedicated design frames and preview states. Other title cards link to their website pages. Save actions demonstrate a saved title state; removing the title returns to the empty list.

## Where the browser is still needed

Figma shows the main layouts and selected interaction states. It does not reproduce native video playback, every filter combination, persistent browser storage, or the full accessibility tree. The browser implementation handles those behaviors.

The designs were checked against source content and layout rules. A Figma hero render was inspected. Full visual comparison in a browser, screen reader testing, and participant feedback are still open. This is not a claim of pixel perfect parity or Section 508 compliance.
