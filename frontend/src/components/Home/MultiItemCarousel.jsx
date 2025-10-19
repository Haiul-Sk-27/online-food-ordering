import React from 'react';
import Slider from 'react-slick';
import { topMeels } from './topMeels';
import CarouselItem from './CarouselItem';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    arrows:false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full mx-auto py-0">
      <Slider {...settings}>
        {topMeels.map((item) => (
          <CarouselItem key={item.id} image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
