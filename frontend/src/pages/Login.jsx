import React, { useState } from 'react';
import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='m-auto'>
            <div className='login_container d-flex justify-content-between'>
              <div className='login_img'>
                <img src={loginImg} alt='' srcset='' />
              </div>

              <div className='login_form'>
                <div className='user'>
                  <img src={userIcon} alt='' srcset='' />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type='email'
                      placeholder='EMAIL'
                      required
                      id='email'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type='password'
                      placeholder='PASSWORD'
                      required
                      id='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button
                    className='btn primary__btn w-100 mt-4 auth_btn'
                    type='submit'
                  >
                    LOGIN
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to='/register'>Register</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
