import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/img1.jpg";
import image2 from "../../assets/img2.jpg";
import image3 from "../../assets/img3.jpg";

const ImageCarousel = () => {
  const slides = [
    {
      image: image1,
      quote: "“Plant a seed today for a greener tomorrow.”",
    },
    {
      image: image2,
      quote: "“Nature is not a place to visit. It is home.”",
    },
    {
      image: image3,
      quote: "“Grow plants, grow peace.”",
    },
  ];

  return (
    <div className='w-full h-[75vh]'>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={5000}
        transitionTime={900}
        stopOnHover={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className='relative w-full h-[75vh]'>
            <img
              src={slide.image}
              alt='Slide 1'
              className='object-cover w-full h-[75vh]'
            />
            <div className='absolute inset-0 bg-opacity-50 flex items-center text-black px-10 text-left'>
              <div>
                <h2 className='text-2xl md:text-4xl font-semibold mb-4 max-w-md'>
                  {slide.quote}
                </h2>
                <Link to='/login'>
                  <button className='btn btn-primary text-white text-lg'>
                    Login Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
