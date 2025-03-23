import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import FeaturedWebtoons from "./components/FeaturedWebtoons";
import Footer from "./components/Footer"; // Import Footer
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar toggleMenu={() => setMenuOpen(!menuOpen)} />
      <Banner />
      <Categories />
      <FeaturedWebtoons />
      <Footer /> {/* Render Footer */}
    </div>
  );
};

export default App;
