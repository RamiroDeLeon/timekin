# Timekin

Timekin is a personal journaling web app designed to help preserve memories and legacy through rich text, media, location tagging, and mood metadata. This is the V1 scaffolding phase, showcasing a clean full-stack setup and deployment pipeline.

---

## 🧱 Tech Stack

**Frontend**
- Vite + React + TypeScript
- Tailwind CSS
- Context API (state management)

**Backend**
- Node.js + Express
- TypeScript (future)
- REST API

**Storage & Infra**
- MongoDB Atlas (planned)
- AWS S3 (planned)
- Render (backend deployment)
- GitHub Actions (CI/CD pipeline)
- Terraform (planned for IaC)

---

## 📦 Current Features (as of scaffold milestone)

- ✅ Backend Express API deployed to Render (`/` → Hello World)
- ✅ Frontend Vite app scaffolded with Tailwind styles + hot reload
- ✅ Unified local dev workflow via `concurrently`
- ✅ CI pipeline stubbed via GitHub Actions
- 🚧 Full CRUD, DB, media, and location features coming soon

---

## 🖥️ Local Development

```bash
# From project root
npm install
npm run dev
```

---
## Ports
- Backend → http://localhost:3000
- Frontend → http://localhost:5173 (or nearest open port)
