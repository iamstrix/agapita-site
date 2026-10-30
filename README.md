# Agapita public website

Standalone public information website for Agapita, a research prototype that helps stroke survivors with Broca's aphasia communicate by drawing.

This folder is ready to become a separate repository. It contains only the website, its deployment workflow, and website maintenance context. No backend, desktop or mobile application source, models, databases, credentials, or private research documents are required.

## Copy into the new repository

Copy the **contents of this folder** into the root of a fresh repository, including the hidden `.github` directory and `site/.nojekyll`. Do not copy the parent repository or its Git history. Keep the layout below; the deployment workflow publishes `site/` only.

```text
.github/workflows/pages.yml
.gitignore
AGENTS.md
CONTEXT.md
README.md
site/
  .nojekyll
  index.html
  style.css
  assets/
    favicon.svg
```

## Preview locally

No build step, package installation, or environment variables are needed. Open `site/index.html` directly, or run this from the new repository root if Python is installed:

```sh
python -m http.server 8000 --directory site
```

Then visit `http://localhost:8000`. Stop the server with Ctrl+C.

The wordmark loads Rubik One from Google Fonts. Without network access, the CSS uses local fallback fonts. Everything else currently ships in `site/`; there are no application API dependencies or analytics scripts. A small vanilla JavaScript file adds sliding hero photographs and carousel controls; without JavaScript, the first photograph and its caption remain visible. On mobile, hero text sits above the photographs. Reduced-motion users start with a static photograph.

## Publish with GitHub Pages

1. Push these files to the new repository's `main` or `master` branch.
2. In the new repository, open **Settings > Pages** and select **GitHub Actions** as the build and deployment source.
3. Run **Deploy site to GitHub Pages** from the Actions tab, or push a change under `site/` to trigger deployment.
4. Open the URL reported by the deployment. Verify styling, favicon, navigation, and the mobile layout.

The workflow is copied from the original website setup and accepts both `main` and `master`. Keep only the active branch if both branches exist and could trigger competing deployments. Documentation-only changes do not trigger deployment; a manual run is available.

No custom domain is configured in this package. If moving an existing custom domain, configure it for the new repository and update its DNS as required by your host. Confirm the new site works before disabling the old deployment.

For another static host, use `site/` as the publish directory and leave the build command empty. Relative asset paths support hosting under a repository subpath.

## Editing

- Page content and inline sketch illustration: `site/index.html`.
- Styling, responsive layout, and sketch animation: `site/style.css`.
- Event-photo controls and automatic rotation: `site/carousel.js`.
- Sticky-header scroll offset, adjusted to the rendered header height: `site/navigation.js`.
- Selected, optimized event photographs: `site/assets/events/`.
- LinkedIn contact QR code: `site/assets/linkedin-qr.svg` (encodes the same profile URL as the visible contact link).
- Browser icon: `site/assets/favicon.svg`.
- Social-sharing image: `site/assets/social-preview.jpg`. Open Graph and Twitter metadata in `site/index.html` use the repository's default Pages URL; update those absolute URLs when changing domains.
- Product background, current claims, and photograph provenance: `CONTEXT.md`.

Original photographs in the root `photos/` folder are ignored by Git. Only selected website copies in `site/assets/events/` are publishable. Keep originals local, and remove camera metadata when preparing additional website copies.

Before publishing edits, preview desktop and mobile widths, check local links and assets, keyboard navigation, text contrast, and reduced-motion behavior. Preserve the prototype notices and review any changes to clinical, privacy, or recognition claims with the owner.

No license is included in this handoff. Repository visibility alone does not grant permission to reuse the brand, text, or future photographs.
