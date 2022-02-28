import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robot Friend"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
