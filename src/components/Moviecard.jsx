import React from 'react'

import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Moviecard() {
    
  const filterData = list.filter((data) => data.category === "slider");

  const settings = {
    dots: true,
    infinite: true,  // Enables looping of the slides
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,  // Enables auto sliding
    autoplaySpeed: 1000,  // Sets slide transition every 3 seconds (3000 ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
 


  
    <div className=" bg-green-100 mx-11 "><br />
        <h1 className="text-center h-10 font-bold text-2xl text-green-500 ">Leatest movie</h1>
      <Slider {...settings}>
        {filterData.map((item) => (
          <div className='px-4'>
          <div
            key={item.id}
            className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border"
          >
             <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
          <img
              src={item.image}
              alt={item.name}
              style={{ height: "200px", width: "100%" }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"  >
             <a href="/Setbook">Book Now</a>
              </div>

            </div>
          </div>
        </div>

          </div></div>

        ))}
      </Slider>
     
    </div>

 
    </>
  )
}

export default Moviecard
