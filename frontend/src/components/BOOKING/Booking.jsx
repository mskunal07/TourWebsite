import React, { useState, useEffect } from 'react';
import './Booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: '01', //later it will be dynamic
    userEmail: 'example@gmail.com',
    fullName: ' ',
    phone: '',
    guestSize: 1,
    bookAt: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalPrice =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  //send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    // console.log(credentials);
    navigate('/thank-you');
  };

  return (
    <div className='booking'>
      <div className='booking_top d-flex align-items-center justify-content-between'>
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className='tour_rating d-flex align-item-center'>
          <i class='ri-star-fill'></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/*============================ booking form starts ===============================*/}
      <div className='booking_form'>
        <h5>Information</h5>
        <Form className='booking_info-form' onSubmit={handleClick}>
          <FormGroup>
            <input
              type='text'
              placeholder='full name'
              id='fullName'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type='number'
              placeholder='phone no'
              id='phone'
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input
              type='date'
              placeholder=''
              id='bookAt'
              required
              onChange={handleChange}
            />
            <input
              type='number'
              placeholder='Guest'
              id='guestSize'
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/*============================ booking form ends ===============================*/}

      {/**============================ booking bottom starts ===============================  */}
      <div className='booking_bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>
              ${price} <i class='ri-close-line'></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>

          <ListGroupItem className='border-0 px-0'>
            <h5>service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>

          <ListGroupItem className='border-0 px-0'>
            <h5>Total</h5>
            <span>${totalPrice}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>
          Book Now
        </Button>
      </div>
      {/**============================ booking bottom ends ===============================  */}
    </div>
  );
};

export default Booking;
