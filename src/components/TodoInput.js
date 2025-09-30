import React, {useState} from "react";
import {useDispatch} from "react-redux";

function TodoInput() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    const addTodo = () => {
        if (input.trim()) {
            dispatch({type: "ADD_TODO", payload: input});
            setInput("");
        }
    };
    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}

export default TodoInput;