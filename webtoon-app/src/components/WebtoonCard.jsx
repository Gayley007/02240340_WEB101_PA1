import React from "react";
import "../styles/WebtoonCard.css";

const WebtoonCard = ({ title, imageUrl, hoverImageUrl }) => (
  <div className="webtoon-card">
    <img src={imageUrl} alt={title} />
    <img src={hoverImageUrl} alt={`${title} Hover`} className="hover-image" />
    <p className="webtoon-title">{title}</p>
  </div>
);

export default WebtoonCard;
