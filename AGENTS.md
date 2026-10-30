# Public website maintenance

This repository contains the standalone Agapita public website. Read `README.md` and `CONTEXT.md` before making changes.

- Publishable files live in `site/`; GitHub Pages uploads only that directory.
- Use plain HTML and CSS unless a feature needs JavaScript. No build system is currently required.
- Keep asset paths relative so repository-subpath hosting works.
- Preserve responsive layouts, semantic headings, keyboard focus, the skip link, and reduced-motion support.
- Preview affected sections at desktop and mobile widths and check local asset references. There is currently no automated test suite or lint/build command.
- Keep public messaging accurate about prototype status and clinical validation. Ask the owner for missing factual claims or photographs.
- The event-photo carousel uses selected website copies in `site/assets/events/`; original `photos/` files stay Git-ignored. See `CONTEXT.md` for provenance and carousel behavior.
- Do not add private application code, models, databases, credentials, patient records, private research materials, or original repository history.
- Do not deploy or change hosting settings unless requested. Changes pushed to `main` or `master` under `site/` trigger the included Pages workflow.
