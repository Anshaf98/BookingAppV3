import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner z-0">
      <Carousel>
        <img
          src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="bgImg"
        />
        <img
          src="https://images.pexels.com/photos/4847105/pexels-photo-4847105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="bgImg"
        />
        <img
          src="https://images.pexels.com/photos/5362093/pexels-photo-5362093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="bgImg"
        />
      </Carousel>
      <div className="home_content">
        <h2>WORLD className SERVICE</h2>
        <h2>Collection</h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          corrupti quos eius
        </h2>
        <div>
          <a href="#container">
            <button className="home_button">OUR SERVICE</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
