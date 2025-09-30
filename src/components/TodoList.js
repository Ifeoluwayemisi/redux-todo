import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const {todos, filter} = useSelector(state => state);

    const filteredTodos = todos.filter((todo) => {
        if (filter === "ALL") return true;
        if (filter === "COMPLETED") return todo.completed;
        if (filter === "ACTIVE") return !todo.completed;
        return true;
    });

    return (
        <ul>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
        </ul>
    );
}

export default TodoList;