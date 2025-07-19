# Task Tracker

A sleek and minimal full-stack **ToDo app** built with:

- ⚛ **React + Vite** (Frontend)
-  **ASP.NET Core 8.0 + SQLite** (Backend)

This project allows you to create, edit, complete and delete tasks – and earn **🔥 points** for completing them!

---

## Technologies

| Layer     | Stack                     |
|-----------|---------------------------|
| Frontend  | React, Vite               |
| Backend   | ASP.NET Core Web API 8.0  |
| Database  | SQLite (Entity Framework) |

---

## 🚀 Getting Started

To run this project locally, you need **Node.js** and **.NET 8 SDK** installed.

### 1️ Backend (API)

```bash
cd backend
dotnet restore
dotnet build
dotnet run
```

> API runs at: **https://localhost:5178**

### 2️ Frontend (UI)

```bash
cd frontend
npm install
npm run dev
```

> UI available at: **http://localhost:5173**

---

## 🗂️ Project Structure

```
task-tracker/
├── frontend/   # React + Vite UI
├── backend/    # ASP.NET Core API with SQLite
└── README.md   # This file
```

Each part includes its own `README.md` with more details:

- 📁 [`frontend/README.md`](./frontend/README.md)
- 📁 [`backend/README.md`](./backend/README.md)

---

## 📝 License

MIT – feel free to use, modify and share.  
See [LICENSE](./LICENSE) for full text.
