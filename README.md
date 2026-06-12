# Rami Almohamad — Online Resume Portfolio

A modern animated CV and portfolio website built with React, TypeScript, Vite, Tailwind CSS, and Motion.

## Features

- Responsive online CV / portfolio
- Animated hero, skills, projects, certificates, and contact sections
- Printable resume view
- GitHub Pages deployment workflow included

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

This project includes `.github/workflows/deploy.yml`. Push the project to GitHub, then set **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Recommended repository name for the cleanest link:

```text
ramialmoh12.github.io
```

Your site will then be published at:

```text
https://ramialmoh12.github.io/
```

If you use another repository name, it will still work because `vite.config.ts` uses `base: './'`.
