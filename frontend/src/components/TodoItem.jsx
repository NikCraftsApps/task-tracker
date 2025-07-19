function TodoItem({ todo, onToggleDone, onDelete, onEdit }) {
  return (
    <div className={`todo-item ${todo.isDone ? "done" : ""}`}>
      <div className="info">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => onToggleDone(todo.id)}
        />
        <div>
          <div className="title">{todo.title}</div>
          <div className="date">🗓️ {todo.deadline.slice(0, 10)}</div>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => onEdit(todo)}>✏️</button>
        <button className="delete" onClick={() => onDelete(todo.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TodoItem;
