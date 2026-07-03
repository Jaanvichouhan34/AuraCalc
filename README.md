...


<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=220&section=header&text=AuraCalc+v2.0&fontSize=72&fontColor=fff&animation=twinkling&fontAlignY=40&desc=Premium+Calculation+Suite+%C2%B7+React+19+%C2%B7+Zero+Backend&descAlignY=65&descSize=18" />

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-a78bfa?style=for-the-badge)](LICENSE)
<!-- 

[![Live](https://img.shields.io/badge/Live-Vercel-000000?style=for-the-badge&logo=vercel)](https://aura-calc-20.vercel.app/)

**[Live Demo](https://aura-calc-20.vercel.app/) · [Report Bug](https://github.com/Jaanvichouhan34/AuraCalc/issues) · [Request Feature](https://github.com/Jaanvichouhan34/AuraCalc/issues)**
-->

</div>

---

## Overview

AuraCalc v2.0 is a fully client-side SPA delivering 50+ domain-specific calculators across health, finance, engineering, and education verticals. It features a context-aware AI assistant, physics-based animations, persistent theme management, and a zero-login privacy model — purpose-built to demonstrate production-level React engineering and UI/UX craftsmanship.

---

## Features

| Feature | Description |
|---|---|
| **50+ Calculator Modules** | Health, finance, engineering, education, utilities — solved instantly on the client. |
| **AuraBot AI Assistant** | Context-aware floating chatbot with domain-mapped responses. |
| **Persistent Theme Engine** | System / Dark / Light mode via React Context, localStorage, and live CSS injection. |
| **Privacy-First Architecture** | No login, no cookies, no telemetry. All inputs are ephemeral in-memory state. |
| **Framer Motion Animations** | Page transitions, modal blur-scale entries, hover physics, pulsing indicators. |
| **Mobile-First Responsive** | Tailwind v4 layout with collapsible nav, bottom-sheet modals, tap-optimized targets. |

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Core framework | React + Vite | 19 / 5.x | Component rendering, HMR, optimized production build |
| Routing | React Router DOM | v6 | Client-side SPA navigation, no full-page reloads |
| Styling | Tailwind CSS + clsx | v4 | Utility-first responsive design, conditional class logic |
| Animation | Framer Motion | latest | Physics-based transitions, mount/unmount lifecycle |
| Icons | Lucide React | latest | Scalable, tree-shakeable SVG icon library |
| Notifications | React Hot Toast | latest | Non-blocking, accessible toast feedback layer |

---

## Repository Structure

```
AuraCalc/
├── src/
│   ├── assets/           # Optimized 3D imagery, light/dark mode variants
│   ├── calculators/      # Pure JS formula modules — health, finance, utility
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
![AuraCalc Banner](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000&h=600)
## Calculator Modules

### Health & Fitness (9 calculators)
BMI / BMR / TDEE · Protein & hydration intake · Ideal body weight · Pregnancy due date · Period tracker

### Finance & Business (10 calculators)
Loan EMI & amortization · Compound / simple interest · Mutual fund SIP · ROI & profit margin · GST, discount, currency

### Engineering & Science (8 calculators)
Force, velocity, power · Pressure & density · Ohm's law · Concrete, paint, tile area

### Education & Utilities (10+ calculators)
GPA & grade weighting · Attendance tracker · Scientific & fraction math · Binary converter & subnetting · Fuel cost & mileage

---

## Local Development

**Prerequisites:** Node.js ≥ 18.x · npm ≥ 9.x

```bash
# 1 — Clone the repository
git clone https://github.com/Jaanvichouhan34/AuraCalc.git
cd AuraCalc/frontend

# 2 — Install dependencies
npm install

# 3 — Start the Vite dev server
npm run dev
# App served at http://localhost:5173

# 4 — Production build (optional)
npm run build    # Outputs to /dist
npm run preview  # Preview build locally before deploying
```

> **No environment variables required.** All computation runs in the browser. There is no backend, API key, or database to configure.

---

## Privacy & Data Handling

AuraCalc operates under a strict zero-data-collection policy. No authentication, no cookies, no analytics tracking. All user inputs are ephemeral — stored in component state only, discarded on page refresh. Nothing ever leaves the browser.

---

## Contributing

Contributions are welcome. Please open an issue before submitting a pull request for significant changes. New calculator modules should include unit tests for formula logic and follow the existing `src/calculators/` naming conventions.

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

<div align="center">

**Designed & engineered by Jaanvi Chouhan**
*B.Tech CSE · 3rd Year · Medi-Caps University, Indore*

[![GitHub](https://img.shields.io/badge/GitHub-Jaanvichouhan34-181717?style=flat-square&logo=github)](https://github.com/Jaanvichouhan34)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-jaanvi--chouhan-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/jaanvi-chouhan)
[![Live Demo](https://img.shields.io/badge/Live-AuraCalc-6366f1?style=flat-square)](https://aura-calc-20.vercel.app/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,20,24&height=120&section=footer" />


*If AuraCalc saves you time, give the repo a ⭐*

</div>

