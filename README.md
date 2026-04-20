# 🚀 AuraCalc v2.0 - Premium Calculation Suite

![AuraCalc Banner](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000&h=600)

> "The smarter way to calculate over 50+ metrics instantly, beautifully, and securely."

AuraCalc transitions the traditional, boring utility toolkit into a stunning, highly optimized **Full-Stack Single Page Application** with 3D elements, glassmorphic design, and a fully functional AI assistant.

---

## ✨ Features at a Glance

AuraCalc v2.0 is built to highlight high-end modern frontend capabilities:

- 🧮 **50+ Powerful Calculators:** Ranging from complex engineering and academic equations (Force, GPA, Standard Deviation) to complex financial modeling (Compound Interest, SIP, Margin) and vital health tracking (BMI, Ovulation).
- 🤖 **AuraBot AI Assistant:** An intelligently mapped, floating context-aware ChatBot. Ask it about any calculator or UI feature, and it will guide you!
- 🌙 **Persistent Theme Toggling:** Fully controlled System, Dark, and Light mode rendering using React Context APIs mapped to `localStorage` and CSS DOM injections.
- 🎨 **Framer Motion Animations:** Fluid page transitions, modal blur-scale entries, hover physics on layout cards, and pulsing notification indicators.
- ⚡ **Zero-Latency Processing:** All complex formulas are solved instantly on the client side using pure JavaScript logic, guaranteeing absolute privacy for your data.
- 📱 **100% Mobile Responsive:** Implemented a mobile-first Tailwind CSS approach featuring collapsible hamburger menus, bottom-sheet style layouts for smaller screens, and tap-friendly touch targets.

---

## 🛠️ The Tech Stack

AuraCalc leverages cutting-edge React ecosystem tools to deliver production-level performance:

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + Vite | High-speed component rendering and HMR. |
| **Routing Architecture** | React Router DOM v6 | Seamless multi-page navigation without refreshing. |
| **Styling Engine** | Tailwind CSS v4 + `clsx` | Utility-first, robust responsive design and conditional styling. |
| **Animation Framework**| Framer Motion | Physics-based animation handling and unmount transitions. |
| **Iconography** | Lucide React | Clean, scalable, lightweight SVG icons. |
| **Notifications** | React Hot Toast | Beautiful, non-blocking toast popups for form submissions. |

---

## 📚 Structure & Layout

The project structure is meticulously organized following enterprise frontend standards:

```text
AuraCalc/
├── src/
│   ├── assets/           # 3D optimized imagery for light/dark modes
│   ├── calculators/      # Mathematical logic modules (health, finance, utility)
│   ├── components/       # Reusable UI like Navbar, Footer, ChatBot, Modals
│   ├── contexts/         # Global state providers (ThemeContext)
│   ├── pages/            # View-level route components (Home, Help, Calculators)
│   ├── utils/            # Shared logic (Animations definitions, ChatBot DB)
│   ├── App.jsx           # Master route definitions
│   └── main.jsx          # Setup and DOM entry
```

---

## 🚀 Getting Started Locally

Getting the development environment running requires zero massive backend dependencies:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jaanvichouhan34/AuraCalc.git
   cd AuraCalc/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite server:**
   ```bash
   npm run dev
   ```
   *Your app will instantly be live at `http://localhost:5173`.*

---

## 💻 Included Applications

### 🏥 Health & Fitness Module
- BMI, BMR, TDEE, Protein Intake, Water Hydration, Pregnancy Due Date, Period Tracker, Ideal Weight

### 💰 Finance & Business Module
- Loan EMI, Investment ROI, Compound Interest, Simple Interest, Mutual Fund SIP, Net Salary Estimator, GST, Fast Discount, Currency Converter, Profit Margin

### 🔧 Utilities & Mathematics
- **Mathematics:** Scientific, Fractions, Ratio, Average, Standard Deviation
- **Engineering:** Force, Velocity, Power, Pressure, Density, Ohms Law
- **Construction:** Concrete Slab, Paint Area, Tile Flooring
- **Education:** GPA, Grades Weighting, Attendance tracking
- **Tech & Travel:** Binary Converters, Subnetting, Fuel Cost, Mileage, Random Gen

---

## 🛡️ Privacy First
AuraCalc never forces you to log in. We do not use cookies to track your interactions, we do not log your health measurements, and your financial entries are wiped the second you refresh the page.

---

> Designed & Engineered by **Jaanvi Chouhan**. Built to showcase high-level React competencies, aesthetic UI/UX sensibilities, and clean codebase architecture for placement considerations.
