import React from 'react';
import { useDispatch } from 'react-redux';

function TodoItem({ todo, index }) {
    const dispatch = useDispatch();

    return (
        <li style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
            <button onClick={() => dispatch({type: "TOGGLE_TODO", payload: index})}>Toggle</button>
            <button onClick={() => dispatch({type: "DELETE_TODO", payload: index})}>Toggle</button>
        </li>
    );
}

export default TodoItem;