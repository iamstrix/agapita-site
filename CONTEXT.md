# Website handoff context

## Purpose and scope

This is Agapita's public-facing information website, separated from the private application repository for intellectual property privacy. Work here should concern the website and public assets only. It does not need to connect to the Agapita application or expose its implementation.

The current page explains the communication problem, a three-step sketch-to-message flow, intended benefits for patients and care teams, the founder's story, and recognition. The hero uses selected event photographs as a rotating background. The inline sketch, explicit patient review and confirmation step, and illustrative nurse message sit in How it helps. The carousel uses a small vanilla JavaScript file. There is no asset bundler or package manager setup.

## Existing public narrative

The following summarizes the supplied page, rather than independent verification:

- Agapita is intended to help stroke survivors with Broca's aphasia communicate by drawing on affordable tablets.
- A patient reviews a suggested message before it goes to a nurse; messages may also be read aloud.
- The page describes offline operation and keeping patient information within the hospital as design goals. Intended benefits are not measured clinical outcomes; the earlier implied privacy-law compliance claim has been removed.
- The founder's grandmother's experience after a severe stroke inspired the project. The story names the founder, Jose Gian Tubera.
- The owner confirmed Agapita was conceived on May 11, 2026, for the SEA-CICSIC 2026 application. Our story shows May 2026, with the full date in the `<time>` element.
- The owner confirmed the SEA-CICSIC 2026 bronze award at Xiamen University Malaysia on June 21, 2026, and Grand Winner, Collegiate Category, at the 17th Alfredo M. Yao Innovation Awards (AMY) on September 18, 2026.
- Community acknowledgments are listed separately from competition awards: mayoral recognition by Angeles City on July 7, 2026, and recognition by the SK at the Sangguniang Panlungsod ng Angeles on July 21, 2026. Angeles City is confirmed by the owner-supplied photograph (City Mayor Carmelo B. Lazatin II, Angeles City Information Office watermark) and the linked Angeles City Information Office post. Do not invent a formal award title.
- Recognition entries link to owner-supplied public sources: the SEA-CICSIC Facebook announcement, Context.ph coverage of the AMY awards (published October 28, 2026; names Jose Gian Tubera and Agapita as collegiate-category winner), and Facebook posts for the mayoral and SK recognitions. The Context.ph article mentions Angeles University Foundation; the page itself still does not state an institutional affiliation.
- The owner requested removal of the creator credit from the footer. Keep the footer focused on the brand and prototype notice. Our story names Jose Gian Tubera as founder, and the contact section names Jose Gian Tubera as the contact. The project's current AUF affiliation is uncertain; do not imply an institutional affiliation.
- The page explicitly says the prototype is in development, is not a medical device, and has not yet been tested with patients. Seeking clinical partners for pilot testing is listed as a next step, and the contact section invites hospitals and clinicians to help plan it; existing hospital partnerships are not implied.
- The owner confirmed English and Filipino (Tagalog) as planned message languages. The page describes them as planned, not supported, and shows an illustrative Filipino version of the nurse message. Do not add other languages unless the owner confirms them.
- The owner decided not to embed the Gemma 4 Good submission video for now because it reveals parts of the development process. Do not add it, or name the underlying models, without the owner's approval.

Keep intended benefits distinct from validated clinical outcomes. Do not infer certification, patient trials, regulatory compliance, or hospital partnerships beyond what the owner has confirmed. The page's existing benefit and privacy claims should receive owner review as the project develops.

## Visual direction

The design uses a light clinical palette: blue `#005eb8`, dark blue `#003087`, aqua accents, a green primary button, pale backgrounds, and dark body text. Rubik One is used for the header/footer wordmarks; body copy uses a native system font stack. At the owner's request, the hero has no eyebrow label; it opens directly with the headline. The prototype notice directly below the hero remains. Its gradient preserves headline contrast while easing over the presenter. Feature cards have subtle hover elevation only for precise pointers, with motion disabled under reduced-motion preferences. Preserve readable type, generous spacing, keyboard focus, the skip link, and reduced-motion support.

## Event-photo carousel

The owner supplied photographs in the root `photos/` folder and approved a hero background carousel. It uses three selected photographs behind the desktop headline, leading with the AMY plaques photograph at the owner's request (then SEA-CICSIC, then the AMY stage), with a dark blue gradient for readable text and event captions and controls at the lower right. On screens below 1000 pixels, the text appears above the photographs; images are contained without cropping out participants. The explanatory sketch sits in How it helps and forms a horizontal flow on wider screens.

Rotation runs every seven seconds while the carousel is in view, with a 1.1-second transition. The full right-to-left push was replaced at the owner's request because the outgoing photo vanished abruptly and photo edges swept visibly across the hero. Now the outgoing photo fades out above the next one; on the desktop layout the next photo also drifts in slightly from the travel direction, and its left edge is feathered into the gradient. Below 1000 pixels the change is a plain crossfade. Layers in the hero: outgoing photo 1, gradient 2, captions and pause button 3, hero text 4. At the owner's request, the navigation panel, arrows, counter, and descriptive captions have been removed. Captions contain only event names and the SEA-CICSIC location. A discreet pause/play icon remains, with a keyboard-accessible button, accessible label, and tooltip. Focus pauses rotation until explicitly restarted. Single-finger horizontal swipes on photographs select next/previous and pause automatic rotation; vertical gestures remain native page scrolling. Left/right arrow keys on the pause button provide the same navigation, with manual changes announced to screen readers. Hover and a hidden browser tab temporarily suspend rotation. Reduced-motion users start with a static photo and no transition animation. Without JavaScript, the first photo and its caption remain visible with the pause icon hidden. Hero text remains usable if photographs fail to load.

Originals remain local in the Git-ignored `/photos/` folder. Optimized JPEG copies, with camera metadata removed and widths capped at 1600 pixels, live in `site/assets/events/`:

| Website asset | Local source | Event evidence |
| --- | --- | --- |
| `sea-cicsic-demonstration.jpg` | `IMG_7243.jpg` | SEA-CICSIC banner and participant badge; tablet demonstration. Event location follows the existing owner-supplied narrative. |
| `amy-awards-stage.jpg` | `866339679_1099598699349656_4242730167503540279_n.jpg` | AMY awards stage photograph, with collegiate grand-winner text on screen. |
| `amy-awards-recognition.jpg` | `847763390_29022109097401523_7710659296667913294_n.jpg` | AMY plaques and the 52nd Philippine Business Conference and Expo backdrop, dated October 2026 at Manila Hotel. |

The AMY photos include an October ceremony backdrop, but the owner explicitly confirmed September 18, 2026 as the grand-winner award date. Use that confirmed award date in the timeline; do not infer award dates from the photographs.

## Contact and page structure

The owner approved public contact details: Viber +63 960 550 2514, email `josegiantubera@gmail.com`, and LinkedIn `https://www.linkedin.com/in/josegiantubera/`. Contact links are accessible cards with decorative channel icons. Desktop includes a local SVG QR code encoding the exact LinkedIn URL, with a four-module quiet zone. It uses no external QR service. The QR itself is also a clickable link. Below 760 pixels, the QR is hidden in favor of the direct Connect on LinkedIn card.

How it helps uses one illustrated three-step flow. At the owner's request, each panel holds only its visual (sketch, message choices, received message), with the step heading and description as a caption below it. Captions come first in the markup so each heading precedes its visual for assistive technology; CSS places the panel above. On wider screens a CSS subgrid keeps the panels equal in height and the captions aligned. The flow is followed by two audience cards (patients; nurses and carers). To reduce repetition, the owner approved removing the For hospitals card (its points duplicated the hero ticks), the Environment goals in Intended impact, the duplicate language note in the message panel, and the "Illustrative choices" label (the note below the flow covers it). The contact intro is one sentence. The review panel includes static illustrative candidate messages and a confirmation visual; these are not working controls or a product screenshot. The duplicate numbered cards have been removed. Keep the patient review/confirmation step and prototype notice explicit.

The header stays at the top while scrolling. Below 760 pixels, navigation is a compact, horizontally scrollable row instead of wrapping onto multiple lines. `navigation.js` measures the header's rendered height so section links and keyboard focus scroll clear of it, including when text is enlarged. CSS provides fallback offsets without JavaScript. The same script marks the header link for the section in view with `aria-current="location"`, shown as a dark blue pill; nothing is marked over the hero, and reaching the page bottom selects Contact. On mobile, the marked link scrolls into view within the nav row. Without JavaScript, no link is marked. The fixed skip link remains above the header, and reduced-motion users retain immediate scrolling.

## Social previews

The page has a descriptive title and Open Graph/Twitter large-image metadata. `site/assets/social-preview.jpg` is a 1200 × 630 crop of the selected AMY stage photograph. Absolute share URLs use `https://iamstrix.github.io/agapita-site/`, derived from this repository's default Pages address; update them if a custom domain is configured. Live deployment could not be verified during this edit. Local asset links remain relative. Social previews require publication and may be cached by sharing platforms.

Do not invent photos, event details, or captions. Review additional images for visible people, badges, slides, and screens containing material that should remain private. The hero remains usable independently of the event photographs.

## Handoff boundaries

The original handoff copied only `site/index.html`, `site/style.css`, `site/.nojekyll`, and `site/assets/favicon.svg` as website content. Later additions made in this repository: `carousel.js`, `navigation.js`, the event photographs, LinkedIn QR code, social preview image, PNG icon fallbacks, `robots.txt`, and `404.html`. The existing Pages workflow was copied and adjusted to accept `main` as well as `master`. The README, this context file, website-specific agent instructions, and ignore rules were added for the independent repository.

No application source, research notes, event submission documents, database files, patient information, Git history, or secrets were included. The original website files were left unchanged.
