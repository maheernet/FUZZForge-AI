# FuzzForge AI 🛡️

FuzzForge AI is an intelligent, premium cybersecurity platform designed to automate and enhance C/C++ security testing. It bridges the gap between unfamiliar codebases and advanced vulnerability discovery by automatically analyzing API structures, generating fuzzing harnesses, and managing high-performance fuzzing campaigns.

> **“From unfamiliar code to automated security testing.”**

## 🚀 Features

* **Automated Code Analysis:** Extracts ASTs, generates dependency graphs, and ranks targets using Machine Learning.
* **AI Harness Generation:** Automatically generates high-quality C/C++ fuzzing harnesses for complex APIs.
* **Fuzzing Operations Console:** Real-time metrics tracking executions per second, edge coverage, and new paths discovered.
* **Intelligent Insights:** AI-driven recommendations for coverage plateaus and high-risk API interactions.
* **Premium UX/UI:** Designed for security engineers—featuring a dark-first aesthetic, glowing components, glassmorphism, and a highly responsive dashboard.

## 🛠️ Tech Stack

### Frontend
* **Framework:** React + TypeScript powered by Vite
* **Styling:** Tailwind CSS (v4) with custom premium color palette
* **UI Components:** Radix UI / shadcn-ui patterns
* **Data Visualization:** Recharts, React Flow
* **Code Editor:** Monaco Editor (`@monaco-editor/react`)
* **Icons:** Lucide React

## 📂 Project Structure

```
FUZZForge-AI/
└── frontend/
    ├── src/
    │   ├── assets/       # Static assets and images
    │   ├── components/   # Reusable UI components (Buttons, Cards, Layout)
    │   ├── pages/        # Main application views (Dashboard, Upload, Fuzzing)
    │   └── services/     # API integration layer placeholders
    ├── tailwind.config.js# Custom premium cybersecurity theme
    └── index.css         # Global styles and Tailwind imports
```

## 💻 Getting Started

### Prerequisites
* Node.js (v18 or higher)
* npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maheernet/FUZZForge-AI.git
   cd FUZZForge-AI/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` to explore the FuzzForge AI platform.

## 🎨 UI/UX Design Principles

FuzzForge AI was designed to emulate a professional SOC (Security Operations Center) and advanced developer tooling (similar to Linear or Vercel). 
- **Typography:** Uses `Inter` for general readability and `JetBrains Mono` for technical information (logs, code, metrics).
- **Color Palette:** Deep navy backgrounds (`#060914`) paired with electric cyan (`#22D3EE`) for primary interactions, and intelligent purple (`#8B5CF6`) for AI-driven insights.

## 🔒 Future Roadmap (Backend Integration)

The frontend is fully prepped for backend integration. The API service layer (`src/services/api.ts`) contains stubbed methods designed to seamlessly connect to a Python FastAPI backend for actual code parsing and LLM harness generation.

---
*Built for the future of automated vulnerability discovery.*
