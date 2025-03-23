import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaSearch, FaUser } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = ({ toggleMenu }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch); 
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="WEBTOON_Logo.png" className="Logo" alt="Webtoon Logo" />
        <div className="nav-links">
          <a href="original">ORIGINALS</a>
          <a href="genre">GENRES</a>
          <a href="popular">POPULAR</a>
          <a href="canvas">CANVAS</a>
        </div>
      </div>
      <div className="nav-right">
        {showSearch ? (
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onBlur={() => setShowSearch(false)}
          />
        ) : (
          <FaSearch
            className="search-icon"
            onClick={handleSearchClick} 
          />
        )}
        <FaUser className="user-icon" />
        <button className="login-btn">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
