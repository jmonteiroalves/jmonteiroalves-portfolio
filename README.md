# Jeres Monteiro Alves — portfolio

A static portfolio for data engineering work. It presents two delivered systems:

- **AI DataOps** — data observability and evidence-grounded AI incident diagnosis.
  [Live dashboard](https://dataops-dashboard-wbmpiyks3q-uc.a.run.app) ·
  [Source](https://github.com/jmonteiroalves/ai-dataops)
- **PNCP Data Pipeline** — Brazil's public procurement notices as an analytics-ready,
  AI-classified dataset. [Dashboard](https://jmonteiroalves.github.io/pncp-data-pipeline/dashboard/) ·
  [Source](https://github.com/jmonteiroalves/pncp-data-pipeline)

## Run locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>. There is no build step.

## Structure

```text
index.html          Content and case studies
index.css           Design tokens, layout and responsive rules
index.js            Screenshot viewer, back-to-top, year
fonts/              Self-hosted Archivo and Azeret Mono (woff2)
images/             Project screenshots, logos, portrait, favicon
```

## Design notes

The page is built as an engineering dossier rather than a card-based landing page.

- **Palette** — bone paper `#e9e6dd`, ink `#161a1d`, oxblood signal `#8a1f32`,
  night `#14181b`. The screenshots sit on `#f4f1ea`, close to the dashboards' own paper.
- **Type** — Archivo for display and body, Azeret Mono for measurements and metadata.
  Both are self-hosted so the page has no third-party requests.
- **Layout** — full-width typographic masthead, a delivery ledger in the hero, then
  two asymmetric case spreads with real screenshots, measured results and expandable
  technical notes. The dark bands break the paper without turning the page into a
  sequence of cards.
- **Motion** — one page-load sequence in the hero. Screenshot changes only move when
  the reader asks for them. `prefers-reduced-motion` disables both.
- **Accessibility** — skip link, visible focus, semantic headings, labelled screenshot
  buttons with keyboard arrow support, WCAG AA colour contrast, no horizontal overflow
  down to 320 px. Axe reports no violations at 1440 px and 390 px.

### Refreshing the screenshots

The project screenshots are copied from each project's documentation:

```bash
cp ../ai-dataops/docs/images/dashboard-overview.png images/ai-dataops-overview.png
cp ../ai-dataops/docs/images/dashboard-incidents.png images/ai-dataops-incidents.png
cp ../ai-dataops/docs/images/dashboard-quality.png images/ai-dataops-quality.png
cp ../pncp-data-pipeline/docs/dashboard/screenshot.png images/pncp-dashboard.png
cp ../pncp-data-pipeline/docs/dashboard/ops-screenshot.png images/pncp-ops.png
```

The PNCP dashboard image is cropped to its top 1,155 px so it reads at portfolio size.
If the numbers in the projects change, update the copy in `index.html` as well.

## Credits

Original template by [Nisar Hassan Naqvi](https://nisar.dev), rebuilt for this portfolio.
Project content and screenshots belong to the projects above.
