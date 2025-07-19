import { useState } from "react";

const API_BASE = "http://localhost:5178/api";

function EditableTodo({ todo, onClose, onSave }) {
  const [title, setTitle] = useState(todo.title);
  const [deadline, setDeadline] = useState(todo.deadline.slice(0, 10));

  const handleSave = async () => {
    await fetch(`${API_BASE}/todo/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        deadline,
        isDone: todo.isDone,
      }),
    });

    onSave();
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>✏️ Edytuj zadanie</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleSave}>💾 Save</button>
          <button onClick={onClose}>❌ Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditableTodo;
