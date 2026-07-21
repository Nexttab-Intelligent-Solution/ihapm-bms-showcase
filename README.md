# IHAPM HOLO-BMS — Public Showcase

Live static showcase for the IHAPM holographic building-management interface:

<https://nexttab-intelligent-solution.github.io/ihapm-bms-showcase/>

This repository contains only the compiled, seeded-data demo used for public
review. It does not contain the private source repository, operator credentials,
provider API keys, or a live BMS connection. The production-oriented operator
build remains private in
[`Nexttab-Intelligent-Solution/ihapm-bms-ui`](https://github.com/Nexttab-Intelligent-Solution/ihapm-bms-ui).

The showcase includes the dashboard, floor navigation, floor and unit status,
simulated controls, automation explanations, incident context, privacy-aware
camera affordances, trends, tour mode, and the responsive manager view. Data is
seeded locally so the page works as a standalone GitHub Pages deployment.

## Deployment

The Pages workflow deploys the contents of `site/` on every push to `main` and
can also be started manually from the Actions tab.

To publish a new build, generate the public artifact in the private source
repository and replace `site/` with the resulting `dist/` contents:

```sh
VITE_SHOWCASE=1 VITE_BASE_PATH=/ihapm-bms-showcase/ npm run build
```

Run the private repository's bundle check before committing a replacement.
