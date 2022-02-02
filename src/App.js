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

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className="title">My Todos</h1>
      <div className="content">
        {todos.map((todo, index) => {
          return (
            <Todo
              text={todo.text}
              index={index}
              onDelete={deleteTodo}
              onComplete={completeTodo}
              isComplete={todo.isComplete}
            ></Todo>
          );
        })}
        <TodoForm addTodo={addTodo} className="card" />
      </div>
    </div>
  );
}

export default App;
