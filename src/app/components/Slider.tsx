import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/images/banner-1.png"/>
      </div>
      <div>
        <img src="/images/banner-2.jpg"/>
      </div>
    </Slider>
  );
}

export default SimpleSlider;