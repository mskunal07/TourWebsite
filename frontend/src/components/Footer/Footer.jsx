import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick_links = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/tours',
    display: 'Tours',
  },
];

const quick_links2 = [
  {
    path: '/gallery',
    display: 'Gallery',
  },
  {
    path: '/login',
    display: 'Login',
  },
  {
    path: '/register',
    display: 'Register',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
              <img src={logo} alt='' srcset='' />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <div className='social_links d-flex align-items-center gap-4'>
                <span>
                  <Link to='#'>
                    <i className='ri-youtube-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className='ri-github-fill'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className='ri-facebook-circle-line'></i>
                  </Link>
                </span>
                <span>
                  <Link to='#'>
                    <i className='ri-instagram-line'></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Discover</h5>
            <ListGroup className='footer_quick-links'>
              {quick_links.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Quick Links</h5>
            <ListGroup className='footer_quick-links'>
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg='3'>
            <ListGroup className='footer_quick-links'>
              <h5 className='footer_link-title'>Contact uys</h5>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  ADDRESS :-
                </h6>
                <p className='mb-0'>PICT ,PUNE</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  EMAIL
                </h6>
                <p className='mb-0'>I2K21103691@ms.pict.edu</p>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                <h6 className='mb-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  PHONE NO :-
                </h6>
                <p className='mb-0'>+91 7385 3890 14</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className='copyright'>
              Copyright &copy; {year}. All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
