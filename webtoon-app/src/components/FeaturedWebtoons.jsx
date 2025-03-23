import React from "react";
import WebtoonCard from "./WebtoonCard";
import "../styles/FeaturedWebtoons.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";

import hoverImage1 from "../assets/Pic1.jpg";
import hoverImage2 from "../assets/Pic2.jpg";
import hoverImage3 from "../assets/Pic3.jpg";
import hoverImage4 from "../assets/Pic4.jpg";
import hoverImage5 from "../assets/Pic5.jpg";
import hoverImage6 from "../assets/Pic6.jpg";
import hoverImage7 from "../assets/Pic7.jpg";
import hoverImage8 from "../assets/Pic8.jpg";
import hoverImage9 from "../assets/Pic9.jpg";
import hoverImage10 from "../assets/Pic10.jpg";
import hoverImage11 from "../assets/Pic11.jpg";
import hoverImage12 from "../assets/Pic12.jpg";
import hoverImage13 from "../assets/Pic13.jpg";
import hoverImage14 from "../assets/Pic14.jpg";
import hoverImage15 from "../assets/Pic15.jpg";

const FeaturedWebtoons = () => {
  const webtoons = [
    { title: "Webtoon 1", imageUrl: image1, hoverImageUrl: hoverImage1 },
    { title: "Webtoon 2", imageUrl: image2, hoverImageUrl: hoverImage2 },
    { title: "Webtoon 3", imageUrl: image3, hoverImageUrl: hoverImage3 },
    { title: "Webtoon 4", imageUrl: image4, hoverImageUrl: hoverImage4 },
    { title: "Webtoon 5", imageUrl: image5, hoverImageUrl: hoverImage5 },
    { title: "Webtoon 6", imageUrl: image6, hoverImageUrl: hoverImage6 },
    { title: "Webtoon 7", imageUrl: image7, hoverImageUrl: hoverImage7 },
    { title: "Webtoon 8", imageUrl: image8, hoverImageUrl: hoverImage8 },
    { title: "Webtoon 9", imageUrl: image9, hoverImageUrl: hoverImage9 },
    { title: "Webtoon 10", imageUrl: image10, hoverImageUrl: hoverImage10 },
    { title: "Webtoon 11", imageUrl: image11, hoverImageUrl: hoverImage11 },
    { title: "Webtoon 12", imageUrl: image12, hoverImageUrl: hoverImage12 },
    { title: "Webtoon 13", imageUrl: image13, hoverImageUrl: hoverImage13 },
    { title: "Webtoon 14", imageUrl: image14, hoverImageUrl: hoverImage14 },
    { title: "Webtoon 15", imageUrl: image15, hoverImageUrl: hoverImage15 }
  ];

  return (
    <div className="featured-webtoons">
      <div className="webtoon-grid">
        {webtoons.map((webtoon) => (
          <WebtoonCard
            imageUrl={webtoon.imageUrl}
            hoverImageUrl={webtoon.hoverImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWebtoons;
