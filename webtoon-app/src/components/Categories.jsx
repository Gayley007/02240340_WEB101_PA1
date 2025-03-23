import React, { useState } from "react";
import "../styles/Categories.css";

const Categories = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [activeDay, setActiveDay] = useState("Sat"); 

  return (
    <div className="categories">
      {days.map((day) => (
        <button
          key={day}
          className={`category-btn ${activeDay === day ? "active" : ""}`}
          onClick={() => setActiveDay(day)}>
          {day.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Categories;
