import React from "react";
import "./Slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "semantic-ui-react";
import LeftArrow from "../assets/leftArrow.svg";
import RightArrow from "../assets/rightArrow.svg";

export default function Silder({ data }) {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const CustomLeftArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const CustomRightArrow = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );

  
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    draggable: true,
    prevArrow: <CustomLeftArrow />,
    nextArrow: <CustomRightArrow />,
    responsive: responsive,
  };

  return (
    <div>
      <p className="centerCategories">CATEGORIES</p>
      <div className="cardContainer">
        <Slider {...settings} className="cardContainerInner">
          {data.map((item, index) => {
            return (
              <div key={index} className="cardContainerInnerCard">
                <img
                  src={item.image}
                  title={item.title}
                  key={index}
                  alt="Image1"
                  className="cardImage"
                  style={item.style}
                />
                <p className="cardName">{item.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
