import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className='Testimonial py-4 px-3'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint
          ratione ab atque nesciunt quod delectus nobis reprehenderit maiores
          quo, eos necessitatibus iure doloremque provident officiis cumque
          deserunt nisi. Tempore!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Akshay Raut</h6>
            <p>CEOs</p>
          </div>
        </div>
      </div>
      <div className='Testimonial py-4 px-3'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint
          ratione ab atque nesciunt quod delectus nobis reprehenderit maiores
          quo, eos necessitatibus iure doloremque provident officiis cumque
          deserunt nisi. Tempore!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Akshay Raut</h6>
            <p>CEOs</p>
          </div>
        </div>
      </div>
      <div className='Testimonial py-4 px-3'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint
          ratione ab atque nesciunt quod delectus nobis reprehenderit maiores
          quo, eos necessitatibus iure doloremque provident officiis cumque
          deserunt nisi. Tempore!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Akshay Raut</h6>
            <p>CEOs</p>
          </div>
        </div>
      </div>
      <div className='Testimonial py-4 px-3'>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sint
          ratione ab atque nesciunt quod delectus nobis reprehenderit maiores
          quo, eos necessitatibus iure doloremque provident officiis cumque
          deserunt nisi. Tempore!
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} alt='' className='w-25 h-25 rounded-2' />
          <div>
            <h6 className='mb-0 mt-3'>Akshay Raut</h6>
            <p>CEOs</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
