import { useState } from "react";
import { API_BASE } from "../api";


function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !deadline) return;

    await fetch(`${API_BASE}/todo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, deadline, isDone: false }),
    });

    setTitle("");
    setDeadline("");
    onAdd();
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="grow"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">➕ Add</button>
    </form>
  );
}

export default AddTodo;
