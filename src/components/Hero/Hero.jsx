import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import { images } from "../../constants";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app-container">
      <Slider {...settings}>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
        <div>
          <img src={images.heroImage} alt="Person" />
        </div>
      </Slider>
      <div className="search-bar">
        <select name="cities" id="cities">
          <option value="delhi">Delhi</option>
          {/* Add more options here */}
        </select>
        <input type="text" placeholder="search service..." />
        <button className="button-search">Go For It</button>
      </div>
    </div>
  );
};

export default Hero;
