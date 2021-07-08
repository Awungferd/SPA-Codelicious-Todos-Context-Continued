import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const defaultTodos = [
    { text: "Wash dishes", done: false },
    { text: "Bake a cake", done: false },
    { text: "Make a website", done: true },
  ];
  const [todos, setTodos] = useState(defaultTodos);

  function deleteTodo(index) {
    const newTodos = [...todos]; // necessary, the identity of the array needs to change!
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function createTodo(todo) {
    const newTodos = [...todos];
    newTodos.push(todo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Codelicious TODO</h1>
      <CreateTodo createTodo={createTodo} />
      <TodoList items={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
