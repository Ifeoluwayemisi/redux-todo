import React from 'react';
import { useDispatch } from 'react-redux';

function TodoItem({ todo, index }) {
    const dispatch = useDispatch();

    return (
      <li className={todo.completed ? "completed" : ""}>
        <span>{todo.text}</span>
        <div>
        <button
          onClick={() => dispatch({ type: "TOGGLE_TODO", payload: index })}
        >
          Toggle
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", payload: index })}
        >
          Delete
        </button>
        </div>
      </li>
    );
}

export default TodoItem;