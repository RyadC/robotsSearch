import React from "react";
import './SearchBox.css';


const SearchBox = ({ searchChange }) => {
  return (
    <input 
      className="searchInput"
      type='search'
      placeholder='search your robots'
      onChange={searchChange}
    />
  );
};

export default SearchBox;


