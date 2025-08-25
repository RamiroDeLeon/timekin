# Timekin

Timekin is a personal journaling web app designed to help preserve memories, moods, and moments — enriched with media, location tagging, and emotion-based context. This repository contains the full-stack monorepo for Timekin, built as a clean, resume-ready V1 showcase project.

---

## 🧱 Tech Stack

**Frontend**
- Vite + React + TypeScript
- Tailwind CSS
- React Context API (state management)
- Deployed as static site via Render

**Backend**
- Node.js + Express
- REST API (JSON)
- CORS-enabled for cross-origin frontend communication
- Deployed via Render (Node Web Service)

**Infra & Tooling**
- Render (frontend and backend hosting)
- GitHub Actions (CI/CD pipeline)
- Concurrently (unified dev workflow)
- Dotenv (.env support for ports and secrets)
- Terraform (planned for future infra as code)
- MongoDB Atlas, AWS S3 (planned)

---

## 📦 Current Features

- ✅ Live backend at: [`https://timekin-backend.onrender.com`](https://timekin-backend.onrender.com)
  - Handles `/`, `/api`, `/api/` routes with CORS enabled
- ✅ Frontend static site at: [`https://timekin-frontend.onrender.com`](https://timekin-frontend.onrender.com)
  - Displays live data fetched from backend API
- ✅ Unified local dev with `concurrently`
- ✅ Vite proxy for local `/api` requests
- ✅ Hot reload in both frontend and backend
- 🚧 Future: Journal CRUD, media uploads, location + mood tagging, MongoDB integration

---

## 🖥️ Local Development

```bash
# From project root
npm install         # installs root and backend deps
cd frontend && pnpm install   # installs frontend deps

# Start both servers
npm run dev

| Layer    | Description     | URL                                              |
| -------- | --------------- | ------------------------------------------------ |
| Backend  | Express API     | [http://localhost:3000](http://localhost:3000)   |
| Frontend | Vite dev server | [http://localhost:5173](http://localhost:5173)\* |
