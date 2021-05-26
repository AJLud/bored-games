import React from "react";

const FilterBar = () => {
  return (
    <div className="filterBar">
      <span>
        Latest <button>⬆️</button>
      </span>
      <span>
        Highest Rated <button>⬆️</button>
      </span>
    </div>
  );
};

export default FilterBar;
