# IHAPM HOLO-BMS — Public Showcase

Live static showcase for the IHAPM holographic building-management interface:

<https://nexttab-intelligent-solution.github.io/ihapm-bms-showcase/>

Current build: **v0.2.0 + reservations** (28 October 2026, source commit
`2a9518c`). Open the
[Building Manager](https://nexttab-intelligent-solution.github.io/ihapm-bms-showcase/examples/manager/)
and use **Search** to find rooms, floors, and floor plans, or the new
[Booking site](https://nexttab-intelligent-solution.github.io/ihapm-bms-showcase/examples/booking/)
(Thai, phone-first): search the demo project, compare two buildings and room
types, hold a room for 15 minutes, confirm and get a confirmation code. The
site and the manager share one simulated inventory in your browser, so a hold
placed on the site appears on the manager's **Availability** chart and a
confirmed stay in its arrivals list. This build also adds the front desk's
availability calendar, a light theme (☀/☾ in the manager topbar) and new
chime cues.

This repository contains only the compiled, seeded-data demo used for public
review. It does not contain the private source repository, operator credentials,
provider API keys, or a live BMS connection. The production-oriented operator
build remains private in
[`Nexttab-Intelligent-Solution/ihapm-bms-ui`](https://github.com/Nexttab-Intelligent-Solution/ihapm-bms-ui).

The showcase includes the dashboard, floor navigation, floor and unit status,
simulated controls, automation explanations, retained incident coordination,
privacy-safe shared-area camera evidence, trends, tour mode, and the responsive
manager view. The manager starts canvas-first with one movable task workbench
and adds a synthetic hotel front-desk journey for date-range availability,
reservation, room assignment, check-in/out, 3D room location, and housekeeping
readiness. Data is seeded locally so the page works as a standalone GitHub Pages
deployment.

The public build starts at the low FX tier: DPR 1, roughly 30 fps, no fog, and
direct rendering without bloom or scanline post-processing. Its structural
shaders compensate luminance on that direct path, keeping the building readable
without restoring an offscreen FX target. The Building Manager's FX selector
can still enable medium or high on capable hardware.

## Deployment

The Pages workflow deploys the contents of `site/` on every push to `main` and
can also be started manually from the Actions tab.

To publish a new build, generate the public artifact in the private source
repository and replace `site/` with the resulting `dist/` contents:

```sh
VITE_SHOWCASE=1 VITE_BASE_PATH=/ihapm-bms-showcase/ npm run build
```

Run the private repository's bundle check before committing a replacement.
Each published `site/release.json` records the release version, merged private-source commit and
SHA-256 hashes for the demo, manager, and front-desk entry assets.
