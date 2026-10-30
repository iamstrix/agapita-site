# Website handoff context

## Purpose and scope

This is Agapita's public-facing information website, separated from the private application repository for intellectual property privacy. Work here should concern the website and public assets only. It does not need to connect to the Agapita application or expose its implementation.

The current page explains the communication problem, a three-step sketch-to-message flow, intended benefits for patients and care teams, the founder's story, and recognition. The hero contains an inline animated sketch, an explicit patient review and confirmation step, and an illustrative nurse message. A small vanilla JavaScript carousel presents selected event photographs below the story and recognition. There is no asset bundler or package manager setup.

## Existing public narrative

The following summarizes the supplied page, rather than independent verification:

- Agapita is intended to help stroke survivors with Broca's aphasia communicate by drawing on affordable tablets.
- A patient reviews a suggested message before it goes to a nurse; messages may also be read aloud.
- The page describes offline operation and keeping patient information within the hospital as design goals. Intended benefits are not measured clinical or environmental outcomes; the earlier implied privacy-law compliance claim has been removed.
- The founder's grandmother's experience after a severe stroke inspired the project.
- The page lists a June 2026 bronze award at SEA-CICSIC 2026, Xiamen University Malaysia, and a September 2026 Collegiate Finalist recognition at the 17th Alfredo M. Yao Innovation Awards (AMY).
- The footer credits computer science students at Angeles University Foundation, College of Computer Studies.
- The page explicitly says the prototype is in development, is not a medical device, and has not yet been tested with patients. Seeking clinical partners for pilot testing is listed as a next step; existing hospital partnerships are not implied.

Keep intended benefits distinct from validated clinical outcomes. Do not infer certification, patient trials, regulatory compliance, or hospital partnerships beyond what the owner has confirmed. The page's existing benefit and privacy claims should receive owner review as the project develops.

## Visual direction

The existing design uses a light clinical palette: blue `#005eb8`, dark blue `#003087`, aqua accents, a green primary button, pale backgrounds, and dark body text. Rubik One is used for the Agapita wordmark, with system fonts for body copy. Preserve readable type, generous spacing, responsive layouts, keyboard focus indicators, the skip link, and reduced-motion support.

## Event-photo carousel

The owner supplied photographs in the root `photos/` folder and requested a carousel with event captions. The implemented carousel sits below Our story and Recognition, preserving the explanatory sketch in the hero. It uses three selected photographs with captions separate from the images so text does not obscure people or awards. Images are contained within a consistent frame without cropping out participants on mobile.

Rotation runs every seven seconds while the carousel is in view. Previous/next and play/pause buttons support keyboard interaction; focus and manual navigation stop rotation until explicitly restarted. Hover and a hidden browser tab temporarily suspend rotation. Reduced-motion users start with automatic playback off and no fade animation. Without JavaScript, all three captioned figures remain visible as a static gallery.

Originals remain local in the Git-ignored `/photos/` folder. Optimized JPEG copies, with camera metadata removed and widths capped at 1600 pixels, live in `site/assets/events/`:

| Website asset | Local source | Event evidence |
| --- | --- | --- |
| `sea-cicsic-demonstration.jpg` | `IMG_7243.jpg` | SEA-CICSIC banner and participant badge; tablet demonstration. Event location follows the existing owner-supplied narrative. |
| `amy-awards-stage.jpg` | `866339679_1099598699349656_4242730167503540279_n.jpg` | AMY awards stage photograph, with collegiate grand-winner text on screen. |
| `amy-awards-recognition.jpg` | `847763390_29022109097401523_7710659296667913294_n.jpg` | AMY plaques and the 52nd Philippine Business Conference and Expo backdrop, dated October 2026 at Manila Hotel. |

The AMY photos show an October grand-winner milestone beyond the existing September finalist entry. Owner confirmation was requested before updating that timeline claim. A public email address or contact link was also requested; do not invent contact details.

Do not invent photos, event details, or captions. Review additional images for visible people, badges, slides, and screens containing material that should remain private. The hero remains usable independently of the event photographs.

## Handoff boundaries

Only `site/index.html`, `site/style.css`, `site/.nojekyll`, and `site/assets/favicon.svg` were copied as website content. The existing Pages workflow was copied and adjusted to accept `main` as well as `master`. The README, this context file, website-specific agent instructions, and ignore rules were added for the independent repository.

No application source, research notes, event submission documents, database files, patient information, Git history, or secrets were included. The original website files were left unchanged.
