# nikhilrajnair.github.io

Modern personal portfolio built with Angular, optimized for GitHub Pages, with a light/dark theme switch and dev.to article sync.

## Stack

- Angular 20 (standalone component architecture)
- SCSS + CSS variables for theme tokens
- Build-time dev.to sync using Node script

## Local Development

Install dependencies:

```bash
npm install
```

Start locally:

```bash
npm start
```

## Article Sync

Fetch latest dev.to posts into `public/data/devto-articles.json`:

```bash
npm run fetch:articles
```

By default this uses username `nikhilrajnair`.

To override:

```bash
DEVTO_USERNAME=your-devto-username npm run fetch:articles
```

## Build

Standard production build:

```bash
npm run build
```

Build for GitHub Pages (outputs to `docs/`):

```bash
npm run build:pages
```

## Content Source

Primary profile and resume content is maintained in:

- `src/app/portfolio.data.ts`

Legacy source files are preserved for reference:

- `README.resume.md`
- `index.legacy.MD`
- `_config.legacy.yml`
- `.gitignore.legacy`
