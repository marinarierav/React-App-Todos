import React from "react";

function TodoForm({ addTodo, className }) {
  const [text, setText] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={className}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
