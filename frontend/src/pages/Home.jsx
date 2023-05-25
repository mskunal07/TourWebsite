import React from 'react';
import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import '../styles/home.css';
import Subtitle from '../Shared/Subtitle';
import SearchBar from '../Shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../Shared/Newsletter';

const Home = () => {
  return (
    <>
      {/*============================hero section starts================================= */}
      <section className='hero-section'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero-content'>
                <div className='hero_subtitle d-flex align-items-center '>
                  <Subtitle subtitle={'know before you go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className='highlight'> memories</span>
                </h1>
                <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-4'>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero_img-box mt-5'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*============================hero section starts================================= */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services_subtitle'>what we serve</h5>
              <h2 className='services_title'>we offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*============================featured tour seaction starts starts================================= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured_tours-title'> Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*============================featured tour seaction ends starts================================= */}

      {/*experience section starts */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience_content'>
                <Subtitle subtitle={'Experience'} />
                <h2>
                  With All of Our Experiences <br />
                  we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit tenetur molestiae doloremque consequuntur. Illo
                  consectetur nesciunt modi! Dolorum explicabo facere culpa,
                  inventore eius, <br />
                  similique totam dicta odit, distinctio dolore quam.
                </p>
                <div className='counter_wrapper d-flex align-items-center gap-5'>
                  <div className='counter_box'>
                    <span>12K+</span>
                    <h6>Succesfull Trip</h6>
                  </div>
                  <div className='counter_box'>
                    <span>32K+</span>
                    <h6>Regular clients</h6>
                  </div>
                  <div className='counter_box'>
                    <span>4</span>
                    <h6>Years of experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience_img'>
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*experience sections end*/}

      {/*============================gallery seaction starts================================= */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery_title'>Visit our customer tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*============================gallery seaction ends================================= */}

      {/*============================Testomonials seaction starts================================= */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fan love'} />
              <h2 className='testimonials_title'>What our clients say</h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>
      {/*============================Testomonials seaction ends================================= */}
      <Newsletter />
    </>
  );
};

export default Home;
