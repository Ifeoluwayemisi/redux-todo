import React from "react";
import { useDispatch ,useSelector } from "react-redux";

function FilterButton() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    return (
      <div className="filters">
        {["ALL", "ACTIVE", "COMPLETED"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => dispatch({ type: "SET_FILTER", payload: f })}
          >
            {f}
          </button>
        ))}
      </div>
    );
}

export default FilterButton;