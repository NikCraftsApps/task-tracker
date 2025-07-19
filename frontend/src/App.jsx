import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import EditableTodo from "./components/EditableTodo";
import { API_BASE } from "./api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [points, setPoints] = useState(0);
  const [filter, setFilter] = useState("all");
  const [sortAsc, setSortAsc] = useState(true);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
    fetchPoints();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(`${API_BASE}/todo`);
    const data = await res.json();
    setTodos(data);
  };

  const fetchPoints = async () => {
    const res = await fetch(`${API_BASE}/points`);
    const data = await res.json();
    setPoints(data.points);
  };

  const handleToggleDone = async (id) => {
    await fetch(`${API_BASE}/todo/${id}/complete`, { method: "PUT" });
    fetchTodos();
    fetchPoints();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/todo/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  const handleAdd = () => {
    fetchTodos();
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "done") return todo.isDone;
    if (filter === "undone") return !todo.isDone;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    return sortAsc
      ? new Date(a.deadline) - new Date(b.deadline)
      : new Date(b.deadline) - new Date(a.deadline);
  });

  return (
    <div className="app-container">
      <header>
        <h1>📝 Todo App</h1>
        <span className="points">🔥 {points} points</span>
      </header>

      <AddTodo onAdd={handleAdd} />

      <div className="controls">
        <div className="filter">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("done")}>Done</button>
          <button onClick={() => setFilter("undone")}>Undone</button>
        </div>
        <div className="sort">
          <button onClick={() => setSortAsc(!sortAsc)}>
            Sortuj: {sortAsc ? "↑ Closest" : "↓ Furthest"}
          </button>
        </div>
      </div>

      <TodoList
        todos={sortedTodos}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
        onEdit={(todo) => setEditingTodo(todo)}
      />

      {editingTodo && (
        <EditableTodo
          todo={editingTodo}
          onClose={() => setEditingTodo(null)}
          onSave={fetchTodos}
        />
      )}
    </div>
  );
}

export default App;
