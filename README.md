# Timekin

Timekin is a personal journaling web app designed to help preserve memories, moods, and moments — enriched with media, location tagging, and emotion-based context. This repository contains the full-stack monorepo for Timekin, built as a clean, resume-ready V1 showcase project.

---

## 🧱 Tech Stack

**Frontend**

- Vite + React + TypeScript
- Tailwind CSS
- React Router
- React Context API (planned)
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
- ESLint + Prettier (code formatting and linting)
- Terraform (planned)
- MongoDB Atlas, AWS S3 (planned)

---

## ✅ Current Features

- Live backend at: [`https://timekin-backend.onrender.com`](https://timekin-backend.onrender.com)
  - Handles `/`, `/api`, `/api/`, `/api/entries`
  - Returns sample journal data in `/api/entries`
- Frontend at: [`https://timekin-frontend.onrender.com`](https://timekin-frontend.onrender.com)
  - Fetches and displays journal entries from the backend
  - Clean UI styled with Tailwind CSS
- Unified local dev with `concurrently`
- Local `/api` proxying via Vite
- Hot reload (frontend: Vite, backend: Nodemon)
- ESLint + Prettier setup for formatting and consistency
- View full journal entry via `/entry/:id` route
- Delete entry from detail view


---

## 🧪 Local Development

```bash
# From project root
npm install               # installs root and backend deps
cd frontend && pnpm install   # installs frontend deps

# Start both frontend and backend together
npm run dev
```

| Layer    | Description     | URL                                                                |
| -------- | --------------- | ------------------------------------------------------------------ |
| Backend  | Express API     | [http://localhost:3000](http://localhost:3000)                     |
| Frontend | Vite dev server | [http://localhost:5173](http://localhost:5173) (or next available) |


🚧 Coming Soon
- Create / Read / Delete journal entries
- Media uploads (photos, videos)
- Timestamp + geolocation tagging
- Mood tagging (emoji or color)
- MongoDB Atlas for journal data
- AWS S3 for media storage
- CI/CD deploy automation
- Infrastructure-as-code (Terraform)
