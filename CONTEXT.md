# Website handoff context

## Purpose and scope

This is Agapita's public-facing information website, separated from the private application repository for intellectual property privacy. Work here should concern the website and public assets only. It does not need to connect to the Agapita application or expose its implementation.

The current page explains the communication problem, a three-step sketch-to-message flow, intended benefits for patients and care teams, the founder's story, and recognition. The hero contains an inline animated sketch and an example nurse message. There is no JavaScript, asset bundler, or package manager setup.

## Existing public narrative

The following summarizes the supplied page, rather than independent verification:

- Agapita is intended to help stroke survivors with Broca's aphasia communicate by drawing on affordable tablets.
- A patient reviews a suggested message before it goes to a nurse; messages may also be read aloud.
- The page describes offline operation and patient information staying within the hospital.
- The founder's grandmother's experience after a severe stroke inspired the project.
- The page lists a June 2026 bronze award at SEA-CICSIC 2026, Xiamen University Malaysia, and a September 2026 Collegiate Finalist recognition at the 17th Alfredo M. Yao Innovation Awards (AMY).
- The footer credits computer science students at Angeles University Foundation, College of Computer Studies.
- The page explicitly says the prototype is in development, is not a medical device, and has not yet been tested with patients. Clinical pilot testing is listed as a next step.

Keep intended benefits distinct from validated clinical outcomes. Do not infer certification, patient trials, regulatory compliance, or hospital partnerships beyond what the owner has confirmed. The page's existing benefit and privacy claims should receive owner review as the project develops.

## Visual direction

The existing design uses a light clinical palette: blue `#005eb8`, dark blue `#003087`, aqua accents, a green primary button, pale backgrounds, and dark body text. Rubik One is used for the Agapita wordmark, with system fonts for body copy. Preserve readable type, generous spacing, responsive layouts, keyboard focus indicators, the skip link, and reduced-motion support.

## Photo carousel discussion: proposed, not implemented

The owner asked about an automatically sliding background showing photographs of them presenting Agapita at SEA-CICSIC and AMY. They clarified that **no photographs are available yet** and that they were consulting about the idea. There is no carousel in the current website, and this handoff does not add one.

The suggested direction was a hero background using 3–5 strong event photos, with a slow crossfade every 6–8 seconds, an overlay for text contrast, mobile-aware crops, event captions, a pause control, and reduced-motion support. These are recommendations, not an approved final design. Once the owner supplies photos, assess whether the hero background or a separate presentation gallery works better with their composition.

Do not invent photos, event details, or captions. Use only publication-approved images; review visible people, badges, slides, and screens for material that should remain private. Keep the existing hero usable while images are unavailable or fail to load.

## Handoff boundaries

Only `site/index.html`, `site/style.css`, `site/.nojekyll`, and `site/assets/favicon.svg` were copied as website content. The existing Pages workflow was copied and adjusted to accept `main` as well as `master`. The README, this context file, website-specific agent instructions, and ignore rules were added for the independent repository.

No application source, research notes, event submission documents, database files, patient information, Git history, or secrets were included. The original website files were left unchanged.
