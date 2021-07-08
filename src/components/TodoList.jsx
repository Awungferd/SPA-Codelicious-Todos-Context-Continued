import './TodoList.css'
import TodoListItem from './TodoListItem';

function TodoList(props) {
    console.log("TodoList function is running!");

    return (
        <div className="todos">
            <ul>
                {props.items.map((todo, i) =>
                    <TodoListItem
                        key={i}
                        todo={todo}
                        deleteTodo={props.deleteTodo}
                        index={i}
                    />
                )}
            </ul>
        </div>
    );
}

export default TodoList;