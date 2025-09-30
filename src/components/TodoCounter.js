import React from "react";
import { useSelector } from "react-redux";

function TodoCounter() {
    const activeCount = useSelector((state) => state.todos.filter((t) => !t.completed).length);

    return <p>{activeCount} active todos</p> 
}

export default TodoCounter;