import './TodoList.css'

function TodoList() {
    console.log("TodoList function is running!");

    const todos = [
        { text: "Wash dishes", done: false },
        { text: "Make a website", done: true },
    ];

    function handleClick() {
        console.log("TodoList handleClick function is running!");
    }

    return (
        <div className="todos">
            <ul>
                {todos.map((x, i) => {

                    return (
                        <li key={i}>
                            {x.done ? "✓ " : "○ "}
                            {x.text}
                            <button onClick={handleClick}>delete</button>
                        </li>
                    );

                })}
            </ul>
        </div>
    );
}

export default TodoList;