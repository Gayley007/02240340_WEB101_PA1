import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/SearchBar.css"; 

const SearchBar = ({ onClose }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <FaSearch className="search-icon" />
      <span className="close-btn" onClick={onClose}>Close</span>
    </div>
  );
};

export default SearchBar;
