export default function TodoListItem({ todo, deleteTodo, index }) {
    return(
        <li>
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            <button onClick={() => deleteTodo(index)}>
                delete
            </button>
        </li>
    );
}