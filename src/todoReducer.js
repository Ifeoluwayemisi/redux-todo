const initialState = {
    todos: [],
    filter: "ALL" // ALL, COMPLETED, PENDING
};

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
            };
                    case "TOOGLE_TODO":
                        return {
                            ...state,
                            todos: state.todos.map((todo, i) => i === action.payload ? { ...todo, completed: !todo.completed } : todo)
                        };

                        case "DELETE_TODO":
                            return {
                                ...state,
                                todos: state.todos.filter((_, i) => i !== action.payload)
                            };

                            case "SET_FILTER":
                                return {
                                    ...state,
                                    filter: action.payload
                                };
                                default: 
                                return state;
                }
    }

    export default todoReducer;