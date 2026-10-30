# Website handoff context

## Purpose and scope

This is Agapita's public-facing information website, separated from the private application repository for intellectual property privacy. Work here should concern the website and public assets only. It does not need to connect to the Agapita application or expose its implementation.

The current page explains the communication problem, a three-step sketch-to-message flow, intended benefits for patients and care teams, the founder's story, and recognition. The hero uses selected event photographs as a sliding background. The inline sketch, explicit patient review and confirmation step, and illustrative nurse message sit in How it helps. The carousel uses a small vanilla JavaScript file. There is no asset bundler or package manager setup.

## Existing public narrative

The following summarizes the supplied page, rather than independent verification:

- Agapita is intended to help stroke survivors with Broca's aphasia communicate by drawing on affordable tablets.
- A patient reviews a suggested message before it goes to a nurse; messages may also be read aloud.
- The page describes offline operation and keeping patient information within the hospital as design goals. Intended benefits are not measured clinical or environmental outcomes; the earlier implied privacy-law compliance claim has been removed.
- The founder's grandmother's experience after a severe stroke inspired the project.
- The owner confirmed the SEA-CICSIC 2026 bronze award at Xiamen University Malaysia on June 21, 2026, and Grand Winner, Collegiate Category, at the 17th Alfredo M. Yao Innovation Awards (AMY) on September 18, 2026.
- Community acknowledgments are listed separately from competition awards: mayoral recognition on July 7, 2026, and recognition by the SK at the Sangguniang Panglungsod ng Angeles on July 21, 2026. The municipality for the mayoral recognition was requested but has not yet been supplied; do not invent it or a formal award title.
- The footer credits computer science students at Angeles University Foundation, College of Computer Studies.
- The page explicitly says the prototype is in development, is not a medical device, and has not yet been tested with patients. Seeking clinical partners for pilot testing is listed as a next step; existing hospital partnerships are not implied.

Keep intended benefits distinct from validated clinical outcomes. Do not infer certification, patient trials, regulatory compliance, or hospital partnerships beyond what the owner has confirmed. The page's existing benefit and privacy claims should receive owner review as the project develops.

## Visual direction

The existing design uses a light clinical palette: blue `#005eb8`, dark blue `#003087`, aqua accents, a green primary button, pale backgrounds, and dark body text. Rubik One is used for the Agapita wordmark, with system fonts for body copy. Preserve readable type, generous spacing, responsive layouts, keyboard focus indicators, the skip link, and reduced-motion support.

## Event-photo carousel

The owner supplied photographs in the root `photos/` folder and approved a hero background carousel with right-to-left slides. It uses three selected photographs behind the desktop headline, with a dark blue gradient for readable text and event captions and controls at the lower right. On screens below 1000 pixels, the text appears above the photographs; images are contained without cropping out participants. The explanatory sketch sits in How it helps and forms a horizontal flow on wider screens.

Rotation runs every seven seconds while the carousel is in view, with a 1.1-second right-to-left transition. At the owner's request, the navigation panel, arrows, counter, and descriptive captions have been removed. Captions contain only event names and the SEA-CICSIC location. A discreet pause/play icon remains, with a keyboard-accessible button, accessible label, and tooltip. Focus pauses rotation until explicitly restarted. Hover and a hidden browser tab temporarily suspend rotation. Reduced-motion users start with a static photo and no sliding animation. Without JavaScript, the first photo and its caption remain visible with the pause icon hidden. Hero text remains usable if photographs fail to load.

Originals remain local in the Git-ignored `/photos/` folder. Optimized JPEG copies, with camera metadata removed and widths capped at 1600 pixels, live in `site/assets/events/`:

| Website asset | Local source | Event evidence |
| --- | --- | --- |
| `sea-cicsic-demonstration.jpg` | `IMG_7243.jpg` | SEA-CICSIC banner and participant badge; tablet demonstration. Event location follows the existing owner-supplied narrative. |
| `amy-awards-stage.jpg` | `866339679_1099598699349656_4242730167503540279_n.jpg` | AMY awards stage photograph, with collegiate grand-winner text on screen. |
| `amy-awards-recognition.jpg` | `847763390_29022109097401523_7710659296667913294_n.jpg` | AMY plaques and the 52nd Philippine Business Conference and Expo backdrop, dated October 2026 at Manila Hotel. |

The AMY photos include an October ceremony backdrop, but the owner explicitly confirmed September 18, 2026 as the grand-winner award date. Use that confirmed award date in the timeline; do not infer award dates from the photographs.

## Contact and page structure

The owner approved public contact details: Viber +63 960 550 2514, email `josegiantubera@gmail.com`, and LinkedIn `https://www.linkedin.com/in/josegiantubera/`. The Contact section links to these channels and includes a local SVG QR code encoding the exact LinkedIn URL, with a four-module quiet zone. It uses no external QR service. The QR itself is also a clickable link. Keep the visible contact links usable on mobile.

How it helps now uses one illustrated three-step flow with descriptive text integrated into its panels. The duplicate numbered cards have been removed. Keep the patient review/confirmation step and prototype notice explicit.

Do not invent photos, event details, or captions. Review additional images for visible people, badges, slides, and screens containing material that should remain private. The hero remains usable independently of the event photographs.

## Handoff boundaries

Only `site/index.html`, `site/style.css`, `site/.nojekyll`, and `site/assets/favicon.svg` were copied as website content. The existing Pages workflow was copied and adjusted to accept `main` as well as `master`. The README, this context file, website-specific agent instructions, and ignore rules were added for the independent repository.

No application source, research notes, event submission documents, database files, patient information, Git history, or secrets were included. The original website files were left unchanged.
