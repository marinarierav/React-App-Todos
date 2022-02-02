import React from "react";
import TodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = React.useState([
    { text: "Learn react" },
    { text: "Success at react" },
    { text: "Master react" },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className="title">My Todos</h1>
      <div className="content">
        {todos.map((todo, index) => {
          return (
            <Todo text={todo.text} index={index} onDelete={deleteTodo}></Todo>
          );
        })}
        <TodoForm addTodo={addTodo} className="card" />
      </div>
    </div>
  );
}

export default App;
