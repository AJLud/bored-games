import React from "react";

const FilterBar = ({ setOrderBy, setSortedBy }) => {
  return (
    <div className="filter-bar">
      <span>
        Highest Rated
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("asc");
            setSortedBy("votes");
          }}
        >
          🔼️
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("desc");
            setSortedBy("votes");
          }}
        >
          🔽️
        </button>
      </span>
      <span>
        Title
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("asc");
            setSortedBy("title");
          }}
        >
          🔼️
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("desc");
            setSortedBy("title");
          }}
        >
          🔽️
        </button>
      </span>
      <span>
        Author
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("asc");
            setSortedBy("owner");
          }}
        >
          🔼️
        </button>
        <button
          className="filter-button"
          onClick={() => {
            setOrderBy("desc");
            setSortedBy("owner");
          }}
        >
          🔽️
        </button>
      </span>
    </div>
  );
};

export default FilterBar;
