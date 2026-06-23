# ⛩️ Nihongo N5 | Sensei AI

An enterprise-grade, highly gamified learning ecosystem designed to accelerate **JLPT N5** mastery.

Built using **Next.js**, **Firebase**, and **Gemini AI**, this platform replaces uninspired rote memorization with an intelligent **Spaced Repetition System (SRS)** and immersive, interactive study environments.

Deployed on **Vercel** with continuous integration via **GitHub**.

---

## 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

# ✨ Core Features

## 🧠 Spaced Repetition Engine (SM-2)

A custom-engineered implementation of the **SM-2 algorithm** that tracks each learner's memory decay curve individually, ensuring Vocabulary, Kanji, and Grammar reviews appear precisely before forgetting occurs.

---

## 🤖 AI Sensei (Gemini API Integration)

An intelligent tutor powered by **Gemini AI**.

Whenever a learner answers incorrectly, the AI:

- Detects the mistake pattern
- Explains why the answer is incorrect
- Breaks down grammar and vocabulary
- Provides targeted learning guidance

---

## 🎨 High-Fidelity UI & Cinematic Experience

### 🌸 Light Theme

Inspired by traditional Japanese aesthetics.

Features:

- Washi paper inspired cream background
- Low-poly Sakura Origami Crane (Orizuru)
- Floating blossom particles
- Smooth orbital animations
- Premium editorial-inspired interface

### 🌃 Dark Theme

Cyberpunk-inspired interface featuring:

- Neon Torii Gate
- High-gloss lacquer materials
- Responsive emissive lighting
- Modern futuristic visuals

---

## 🔥 Gamification

Stay motivated through:

- XP progression
- Daily learning streaks
- Procedurally generated Daily Quests
- Achievement system
- GitHub-style study heatmap
- Persistent progress tracking

---

## ⚔️ The Proving Grounds

Interactive practice environments designed for different learning styles.

### Rapid Swipe

Fast-paced vocabulary matching challenges.

### Syntax Star

Drag-and-drop Japanese sentence construction.

### Pragmatics Chat

LINE-style conversation simulator for practical communication.

### Spatial Audio

Listening comprehension using hotspot-based audio interactions.

---

## 🏆 Global Leaderboards

Compete with learners worldwide using optimized Firestore Collection Group queries for real-time rankings.

---

# 🏗️ Project Architecture

The project follows **Feature-Sliced Design (FSD)** to ensure scalability and maintainability.

```text
.
├── app/
│   ├── dashboard/
│   ├── quiz/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── features/
│   ├── auth/
│   ├── srs-engine/
│   ├── quizzes/
│   ├── ai-sensei/
│   ├── achievements/
│   └── gamification/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── shared/
│   ├── firebase/
│   ├── ui/
│   ├── hooks/
│   ├── lib/
│   └── utils/
│
└── package.json
```

---

# ⚙️ Technical Foundations

## Smooth Scrolling

Custom momentum-based scrolling keeps WebGL and animation layers synchronized with viewport movement.

---

## Offline Support

Powered by **Dexie.js**, providing:

- IndexedDB caching
- Offline review capability
- Local progress storage
- Automatic synchronization

---

## Firebase Security

Robust Firebase Security Rules protect user data through:

- Authentication validation
- Ownership verification
- Nested document validation
- Cross-user access prevention

---

# 🚀 Getting Started

## Prerequisites

- Node.js **18.17.0** or later
- Firebase Project
  - Firestore
  - Authentication
- Google AI Studio API Key (Gemini)

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/sensei-ai.git
cd sensei-ai
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

GEMINI_API_KEY=your_gemini_api_key
```

---

### Run the Development Server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📦 Deployment

Optimized for **Vercel** deployment.

## CI/CD Workflow

1. Push changes to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Click **Deploy**.

Vercel automatically handles:

- Next.js optimization
- Serverless API routes
- Edge caching
- Incremental deployments

---

# 🌸 Theme Styling

The application uses custom CSS variables and utility classes to create its signature **Japanese Washi Paper** appearance.

For customization, edit:

```text
app/globals.css
```

This file contains:

- Typography scaling
- Theme variables
- Color palettes
- Light/Dark theme definitions
- Animation utilities

---

# 📚 Planned Features

- JLPT N4 Expansion
- Multiplayer Study Rooms
- AI Pronunciation Feedback
- Kanji Stroke Order Trainer
- Mobile PWA Support
- Advanced Analytics Dashboard
- Study Groups
- Cloud Save Synchronization

---

# 📄 License

This project is licensed under the MIT License.

---

## 🌸 "Learn Japanese, one review at a time."

**Built with ❤️ using Next.js, Firebase, Gemini AI, and modern web technologies.**