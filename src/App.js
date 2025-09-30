import React from "react";
import TodoInput from "./components/TodoInput";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoCounter from "./components/TodoCounter";
import FilterButton from "./components/FilterButton";

function App() {
  return (
    <div className="container">
      <h1>My Todo App</h1>
      <TodoInput />
      <TodoList />
      <FilterButton />
      <TodoCounter />
    </div>
  );
}

export default App;
