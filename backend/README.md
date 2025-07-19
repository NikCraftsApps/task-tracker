# ⚙️ Backend – Task Tracker API

This is the **backend** of the Task Tracker app – a REST API built using **ASP.NET Core 8.0** and **SQLite**.

## 📂 Structure

- `Controllers/` – API endpoints (`TodoController.cs`)
- `Data/` – Entity Framework Core DbContext (`TodoDbContext`)
- `Models/` – Data models: `TodoItem`, `PointTotal`
- `Migrations/` – EF Core migrations
- `todo.db` – SQLite database (included)

## 🚀 How to Run

Make sure you have the **.NET 8 SDK** installed.

```bash
cd backend
dotnet restore
dotnet build
dotnet run
```

> The backend will start at: `https://localhost:5178`

📌 The SQLite database file (`todo.db`) is already included and will be used automatically.  
You **don’t need to run migrations manually** unless you’re making schema changes.

## 🔗 API Endpoints (examples)

- `GET /api/todo` – List all tasks
- `POST /api/todo` – Create a new task
- `PUT /api/todo/{id}` – Update task
- `PUT /api/todo/{id}/complete` – Mark task as completed
- `DELETE /api/todo/{id}` – Delete task
- `GET /api/points` – Get total points
