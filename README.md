# KodeToCareer Live Bootcamps Platform 🚀

A premium, interactive web platform designed for India's top-rated live online coding bootcamps. Built using **React (Vite)** and **Tailwind CSS**, featuring dark-accented glassmorphic widgets, live playgrounds, and responsive layouts optimized for all screen sizes.

---

## 💎 Core Interactive Features

*   **Runnable Hero Code Editor**: An interactive mock editor widget inside the Hero column. Students can switch between `App.jsx`, `server.js`, and `model.py` and click the **Run** button to simulate compiler output terminal logs (Vite startup, Express server endpoints, or TensorFlow model epochs metrics) live.
*   **Career Pathfinder Quiz**: A dynamic questionnaire widget helping confused students choose between the MERN Stack and Python ML course streams based on their immediate goals.
*   **Virtual Classroom Student Portal**: A detailed mockup panel of the student portal, showcasing links to join active Google Meet calls, private Discord channels, daily class slides, and repository homework assignments.
*   **Verifiable SVG Completion Certificates**: Digital credentials mockups matching verifiable IDs to build student confidence for both MERN Stack and Python cohorts.
*   **Interactive API Sandbox**: A simulated rest client console on course detail pages that lets users submit HTTP request calls (`POST /api/auth/register`, `GET /api/products`, `POST /api/ai-chat`) and view formatted logs.
*   **Incremental Syllabus Stepper**: Active accordion syllabus cards highlighting active modules in turquoise accent states for easy scanning.

---

## 🎨 Design System & Theme

*   **Colors**: Custom turquoise/cyan gradients (`#0dbbb5` brand teal scale) overriding default Tailwind scales for a unified, modern visual scheme.
*   **Typography**: Clean, modern sans-serif layouts with specialized monospaced text segments in simulator panels.
*   **Aesthetics**: Glassmorphic headers, subtle dot grid overlay backgrounds, and hover-triggered micro-animations for premium user experience.

---

## 🛠️ Development Setup & Installation

### Prerequisites
*   Node.js (v18 or higher)
*   NPM (v9 or higher)

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/kodetocareer-website.git
cd kodetocareer-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
The application will run locally at [http://localhost:5173/](http://localhost:5173/).

### 4. Build for production
```bash
npm run build
```
Vite will compile the production-ready assets into the `dist/` directory.
