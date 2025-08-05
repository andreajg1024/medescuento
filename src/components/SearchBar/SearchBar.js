import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Buscar servicios, artículos..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
