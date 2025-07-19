import TodoItem from "./TodoItem";

function TodoList({ todos, onToggleDone, onDelete, onEdit }) {
  if (todos.length === 0) return <p className="empty">No tasks 🙌</p>;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;
