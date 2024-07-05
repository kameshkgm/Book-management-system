import React from 'react';
import './Search.css';

const Search = ({ handleSearch }) => {
  return (
    <div className="search-container">
      
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search by Category"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
