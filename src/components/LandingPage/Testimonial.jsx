import React from "react";
import { Reviews } from "../DummyData/Reviews";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", color: 'white' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}
function Testimonial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="mb-40">
      <h1 className=" text-3xl text-center font-bold md:text-center md:text-4xl ">
        Join over <span className="text-blue">4m+</span> people to enjoy best
        Online Services
      </h1>
      <div className='container w-full mt-20 px-10 mx-auto'>
      <Slider {...settings}>
      {Reviews.map((reviews) =>(
        <div className="w-[400px] h-[400px] p-20 space-y-5 shadow-2xl">
            <div className="flex flex-row space-x-2">
            <div>
                <img src={reviews.photo} className="w-[50px] h-[50px] rounded-full" alt={`${reviews.uid} + Review`} />
            </div>
            <div>
                <h3 className="font-semibold">{reviews.username}</h3>
            </div>
            </div>
            <p>{reviews.review}</p>
        </div>
         ))}
         </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
