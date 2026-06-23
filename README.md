<<<<<<< HEAD
# ⛩️ Sensei AI | JLPT N5 Master

An enterprise-grade, gamified learning platform designed to help students master the JLPT N5. Built with Next.js, Firebase, and Gemini AI, this platform replaces rote memorization with an intelligent Spaced Repetition System (SRS) and interactive, immersive study modules.

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Core Features (v2)

* **🧠 Spaced Repetition Engine (SM-2):** A completely custom SRS algorithm that tracks memory decay, ensuring you review Vocabulary, Kanji, and Grammar at the exact moment you are about to forget them.
* **🤖 AI Sensei (Gemini Integration):** Got a question wrong? The AI tutor analyzes your specific mistake and explains the linguistic nuances dynamically.
* **🔥 Gamification & Telemetry:** Earn XP, maintain daily study streaks, complete Daily Quests, and track your Consistency Matrix (Heatmap) in real-time.
* **🏆 Global Leaderboards:** Compete with other scholars via optimized Firestore Collection Group queries.
* **⚔️ The Proving Grounds:** Highly interactive, specialized training modules:
   * **Rapid Swipe:** Tinder-style vocabulary matching.
   * **Syntax Star:** Drag-and-drop sentence building.
   * **Pragmatics Chat:** Simulated LINE messenger conversations to test contextual Japanese.
   * **Spatial Audio:** Interactive listening comprehension hotspots.
* **🌐 WebGL & Cinematic UI:** Premium user experience utilizing `react-three-fiber` for 3D backgrounds, Framer Motion for buttery transitions, and the new Next.js View Transitions API.

## 🏗️ Architecture

This project strictly adheres to **Feature-Sliced Design (FSD)** for massive scalability:
* `app/`: Next.js routing, global layouts, and providers.
* `features/`: Isolated, self-contained domain logic (Auth, SRS, Gamification, Quizzes).
* `shared/`: Global UI components, offline database config (`Dexie.js`), and pure domain data.

### Security
The backend relies on deeply nested Firestore architecture protected by strict, hierarchical **Firebase Security Rules**, preventing privilege escalation while maintaining lightning-fast read/write speeds for user sub-collections.

## 🚀 Getting Started

### Prerequisites
* Node.js 18+
* A Firebase Project (Auth & Firestore enabled)
* A Google Gemini API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/sensei-ai.git](https://github.com/your-username/sensei-ai.git)
   cd sensei-ai
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> bfd7655dc43baf712ce2e065808ac678bee09c3b
