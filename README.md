![VESTA](./public/icon.svg)

# VESTA — Master English Learning

**A Victorian-inspired English grammar mastery experience.**  
Learn deliberately, practise with purpose, and turn every mastered question into progress across a 52-card achievement collection.

<p align="center">
  <a href="https://shakur4min.github.io/Vesta/"><strong>🚀 Open VESTA</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/shakur4min/Vesta">GitHub Repository</a>
</p>

---

## ✨ What is VESTA?

VESTA is an offline-first English-learning Progressive Web App (PWA) built around a structured grammar curriculum, focused practice, and collectible achievements. Its dark Victorian-inspired interface brings lessons, question practice, progress tracking, and personal settings together in one place.

Open it in a browser, or install it on a supported device and launch it like an app.

## 📚 Explore the learning experience

- **20 grammar chapters** — a structured curriculum covering core and advanced English grammar topics.
- **400 practice questions** — 20 questions in each chapter, with answer checking and explanatory feedback.
- **Answer mastery tracking** — revisit questions, track attempts, and see which questions you have mastered.
- **52-card achievement collection** — earn playing cards by mastering their associated questions; browse the deck and track collection progress.
- **JOLLY JESTER challenge** — unlock the final writing challenge by completing the card collection.
- **Study dashboard** — review learning activity, study time, accuracy, mastered questions, completed chapters, and card progress.
- **English or English + Persian** — choose an English-only experience or enable Persian translations and explanations where available.
- **Listen as you learn** — use click-to-speak text and configure available system voices, accent preferences, and speech rate.
- **Personal settings and backups** — adjust the theme and text size, export your progress to JSON, or restore it later.
- **Installable PWA** — add VESTA to your home screen or desktop. Its service worker supports offline use after the app has been loaded and cached.

## 🚀 Open the app

**Live application:**  
[https://shakur4min.github.io/Vesta/](https://shakur4min.github.io/Vesta/)

No account or installation is required to start using the web app. Open the link in a modern browser and begin learning.

## 📲 Install VESTA from your browser

VESTA is a Progressive Web App. Installation is performed by your browser; you do not need an app-store download.

### Android — Chrome

1. Open [VESTA](https://shakur4min.github.io/Vesta/) in Chrome.
2. Tap the browser menu (⋮).
3. Choose **Install app** or **Add to Home screen**. The wording can vary by browser version.
4. Confirm the installation.
5. Open VESTA from the new icon on your home screen or app list.

### iPhone / iPad — Safari

1. Open [VESTA](https://shakur4min.github.io/Vesta/) in **Safari**.
2. Tap the **Share** button.
3. Scroll down and select **Add to Home Screen**.
4. Edit the name if you wish, then tap **Add**.
5. Launch VESTA using its icon on your Home Screen.

> On iOS/iPadOS, use Safari for the Add to Home Screen flow.

### Desktop — Chrome or Edge

1. Open [VESTA](https://shakur4min.github.io/Vesta/) in Chrome or Edge.
2. Look for the install icon in the address bar, or open the browser menu.
3. Select **Install VESTA** (or **Install this site as an app**).
4. Confirm. VESTA will open in its own app window and can be launched from your apps list.

If the install option is not shown, your browser or current device may not offer PWA installation for that session. You can still use VESTA directly in the browser.

## 🧭 Getting started

1. Open the app using the live link above.
2. Start in the **Dashboard** to see your study overview and card collection.
3. Visit **Grammar** to browse and read the 20 lessons. Use the search field to find a chapter or rule.
4. Open **Questions**, choose a chapter, and answer its 20 practice questions.
5. Read the feedback, revise where needed, and build mastery.
6. Return to the Dashboard to follow your progress and earned cards.
7. Once all 52 cards have been earned, take on the **JOLLY JESTER** challenge.
8. Visit **Settings** to choose your language mode, appearance, voice preferences, and backup options.

## 💾 Progress, privacy & offline use

- Learning progress and preferences are stored locally in the browser using the app's local database.
- Use **Settings → Data Management & Backup** to export a JSON backup and restore it later.
- Clearing browser site data may remove locally stored progress. Export a backup before clearing site data or moving to another browser/device.
- The app includes a service worker for offline caching. For the most reliable offline experience, open VESTA while connected first and allow its resources to load.
- An exported backup is a file on your device; keep it somewhere safe.

## 🛠️ Run locally

### Requirements

- Node.js 20 or newer
- npm

### Setup

```bash
git clone https://github.com/shakur4min/Vesta.git
cd Vesta
npm install
npm run dev
```

Vite prints the local development URL in the terminal (the project is configured to use port **3000**).

### Production build

```bash
npm run build
npm run preview
```

The production-ready static site is generated in the `dist/` directory.

## 🧰 Built with

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide icons
- Browser storage and Progressive Web App technologies

## 📦 Deployment

The project is configured to build and deploy to **GitHub Pages** through the workflow in `.github/workflows/deploy.yml`.

Every deployment runs the configured unit tests and production build before publishing the static output.

## 👤 Creator

Created by **[shakur4min](https://github.com/shakur4min)**.

---

<p align="center">
  <strong>VESTA</strong><br />
  <em>Master English. Earn every card. Meet the Jester.</em>
</p>
