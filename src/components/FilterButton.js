import React from "react";
import { useDispatch ,useSelector } from "react-redux";

function FilterButton({ filterType, children }) {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    return  (
        <div> 
            {["ALL", "ACTIVE", "COMPLETED" ].map((f) => (
                <button key={f} onClick={() => dispatch({type: "SET_FILTER", payload: f})}
                style={{ fontWeight: filter === f? "bold": "normal"}} >{f}</button>
             ))}
        </div>
    );
}

export default FilterButton;