import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CustomSlider() {
  const filterData = list.filter((data) => data.category === "slider");

  const settings = {
    dots: true,
    infinite: true,  // Enables looping of the slides
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enables auto sliding
    autoplaySpeed: 1000,  // Sets slide transition every 3 seconds (3000 ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-11 ">
      <Slider {...settings}>
        {filterData.map((item) => (
          <div
            key={item.id}
            className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ height: "700px", width: "100%" }}
            />
          </div>

        ))}
      </Slider>
     
    </div>
  );
}

export default CustomSlider;
