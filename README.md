# Amplify Hosting Project

A static HTML/CSS site deployed with AWS Amplify Hosting from GitHub.

- `amplify.yml` – build settings. The build writes branch, commit, job ID and time into the pages.
- `customHttp.yml` – security and cache headers.
- `404.html` – custom error page (connected via Rewrites and redirects).
- `fill.js` – shows "local" for build values when opened without Amplify.
