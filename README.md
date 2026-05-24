# AuraCalc v2.0 — Premium Calculation Suite

> Production-grade multi-domain calculator platform with AI assistance, built on React 19.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite) ![License](https://img.shields.io/badge/License-MIT-green) ![Live](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)

**[Live Demo](https://aura-calc-20.vercel.app/) · [Report Bug](https://github.com/Jaanvichouhan34/AuraCalc/issues) · [Request Feature](https://github.com/Jaanvichouhan34/AuraCalc/issues)**

---

## Overview

AuraCalc v2.0 is a fully client-side, single-page application delivering 50+ domain-specific calculators across health, finance, engineering, and education verticals. It features a context-aware AI assistant, physics-based animations, persistent theme management, and a zero-login privacy architecture — purpose-built to demonstrate production-level React engineering and UI/UX discipline.

---

## Features

| Feature | Description |
|---|---|
| 50+ Calculator Modules | Engineering, finance, health, education, and utility domains. All solved instantly on the client. |
| AuraBot AI Assistant | Context-aware floating chatbot with domain-mapped responses. |
| Persistent Theme Engine | System / Dark / Light mode via React Context, localStorage, and live CSS injection. |
| Privacy-First Architecture | No login, no cookies, no telemetry. All inputs are in-memory only. |
| Framer Motion Animations | Page transitions, modal blur-scale entries, hover physics, pulsing indicators. |
| Mobile-First Responsive | Tailwind v4 layout with hamburger nav, bottom-sheet modals, tap-optimized targets. |

---

## Tech Stack

| Layer | Technology | Version | Role |
|---|---|---|---|
| Core framework | React + Vite | 19 / 5.x | Component rendering, HMR, optimized build |
| Routing | React Router DOM | v6 | Client-side SPA navigation |
| Styling | Tailwind CSS + clsx | v4 | Utility-first responsive design |
| Animation | Framer Motion | latest | Physics-based transitions |
| Icons | Lucide React | latest | Scalable SVG icon system |
| Notifications | React Hot Toast | latest | Non-blocking toast feedback |

---

## Repository Structure

```
AuraCalc/
├── src/
│   ├── assets/           # Optimized 3D imagery, light/dark mode variants
│   ├── calculators/      # Pure JS formula modules (health, finance, utility)
│   ├── components/       # Shared UI: Navbar, Footer, ChatBot, Modals
│   ├── contexts/         # Global state providers — ThemeContext
│   ├── pages/            # Route-level views: Home, Help, Calculators
│   ├── utils/            # Animation configs, AuraBot knowledge base
│   ├── App.jsx           # Top-level route declarations
│   └── main.jsx          # ReactDOM entry point, provider wrapping
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## Calculator Modules

### Health & Fitness
BMI / BMR / TDEE · Protein & hydration intake · Ideal body weight · Pregnancy due date · Period & ovulation tracker

### Finance & Business
Loan EMI & amortization · Compound / simple interest · Mutual fund SIP · ROI & profit margin · GST, discount, currency

### Engineering & Science
Force, velocity, power · Pressure, density · Ohm's law · Concrete, paint, tile area

### Education & Utilities
GPA & grade weighting · Attendance tracker · Scientific & fraction math · Binary converter & subnetting · Fuel cost & mileage

---

## Local Development

**Prerequisites:** Node.js ≥ 18.x, npm ≥ 9.x

```bash
# 1. Clone the repository
git clone https://github.com/Jaanvichouhan34/AuraCalc.git
cd AuraCalc/frontend

# 2. Install dependencies
npm install

# 3. Start the Vite dev server
npm run dev
# App served at http://localhost:5173

# 4. Production build (optional)
npm run build    # Outputs to /dist
npm run preview  # Preview the production build locally
```

> **No environment variables required.** All computation runs in the browser. There is no backend, no API key, and no database to configure.

---

## Privacy & Data Handling

AuraCalc operates under a zero-data-collection policy. No authentication, no cookies, no analytics tracking. All user inputs are ephemeral — they exist in component state only and are discarded on page refresh. No data ever leaves the browser.

---

## Contributing

Contributions are welcome. Please open an issue before submitting a pull request for significant changes. Ensure new calculator modules include unit tests for formula logic and follow the existing `src/calculators/` naming conventions.

```bash
# Fork → feature branch → pull request
git checkout -b feat/calculator-name
git commit -m "feat: add [calculator-name] module"
git push origin feat/calculator-name
```

---

## License

Distributed under the **MIT License**. See `LICENSE` for full terms.

---

*Designed & engineered by **Jaanvi Chouhan** · [GitHub](https://github.com/Jaanvichouhan34) · [LinkedIn](https://linkedin.com/in/jaanvi-chouhan) · [Live Demo](https://aura-calc-20.vercel.app/)*
