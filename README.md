![VESTA app icon](./public/icon.svg)

# VESTA — English Grammar Learning PWA

VESTA is an English grammar learning Progressive Web App (PWA) developed by **shakur4min**. It provides a digital learning interface, chapter navigation, practice questions, progress tracking, and installable/offline-capable app features.

<p align="center">
  <a href="https://shakur4min.github.io/Vesta/"><strong>Open VESTA</strong></a>
  ·
  <a href="https://github.com/shakur4min/Vesta">Source repository</a>
</p>

---

## App preview

<p align="center">
  <img src="./public/pwa-512x512.png" alt="VESTA app icon" width="160" />
</p>

Open the app in a modern browser. On supported devices, it can also be installed from the browser as a PWA.

## Features

- Structured grammar lessons and chapter navigation
- Practice questions with answer feedback
- Learning progress and achievement tracking
- English-only or English–Persian learning modes (where available)
- Text-to-speech controls
- Local progress backup and restore
- Installable PWA with offline caching after resources are loaded

## Educational content & attribution

The grammar material used as the educational basis for VESTA is from:

**Understanding and Using English Grammar — Fifth Edition, with Answer Key**  
**Authors:** Betty S. Azar and Stacy A. Hagen  
**Publisher:** Pearson

The book and its educational content are credited to the authors and publisher. VESTA is an independently developed digital application and is not an official Pearson product, nor is it affiliated with or endorsed by Pearson, Betty S. Azar, or Stacy A. Hagen.

## Development

**Application and PWA development:** shakur4min

The app interface, PWA implementation, software structure, and development work are by shakur4min. This attribution does not claim authorship of the underlying textbook material.

## Open the app

**Live application:** https://shakur4min.github.io/Vesta/

No account is required. Open the link in a modern browser to begin.

### Install on Android

1. Open VESTA in Chrome.
2. Open the browser menu.
3. Choose **Install app** or **Add to Home screen**, if offered.
4. Confirm and launch it from your home screen.

### Install on iPhone / iPad

1. Open VESTA in Safari.
2. Tap Share.
3. Select **Add to Home Screen** and confirm.

### Install on desktop

In a supported browser such as Chrome or Edge, use the install option in the address bar or browser menu if it is available.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/shakur4min/Vesta.git
cd Vesta
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Technology

React · TypeScript · Vite · Tailwind CSS · Motion · Lucide · PWA APIs

---

VESTA is an independent software project created to make grammar study more accessible through a browser-based learning experience.
