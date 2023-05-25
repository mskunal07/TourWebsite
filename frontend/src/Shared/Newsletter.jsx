import React from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';
const Newsletter = () => {
  return (
    <section className='Newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='Newsletter_content'>
              <h2>Subscribe</h2>
              <div className='newsletter_input'>
                <input type='email' placeholder='Enter your email' />
                <button className='newsletter_btn'> Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                labore eum doloribus ducimus libero obcaecati. Amet recusandae
                dolorem dolorum velit repudiandae vel quis dolores? Accusamus
                illum facere voluptates vitae asperiores!
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className='newsletter_img'>
              <img src={maleTourist} alt='' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
