import { createStore } from "redux";
import todoReducer from "./todoReducer";

// Create the Redux store using our reducer
const store = createStore(todoReducer);

export default store;
