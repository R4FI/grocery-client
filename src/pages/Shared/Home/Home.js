import React from 'react';
import './Home.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import Main from '../Main/Main';
import Offer from '../OfferBanner/Offer';
import Footer from '../Footer/Footer';
import Demo from '../../Demo/Demo';
import fruit from "../../../Image/New folder/fruit-free-g85b251fa0_1920.png";
import bakery from "../../../Image/New folder/Bakery'.png";
import cosmetics from "../../../Image/New folder/cosmetics.png";
import Header from '../Header/Header';
const Home = () => {
    
    return (
        <div>
          <Header></Header>
          <div>
          <Carousel>
  <Carousel.Item interval={3000} className="imgcarosel1">
    <Container>
    <Row className="d-flex jusify-content-center align-items-center">
      <Col md={6}>
      <img
      className="w-100"
      src={fruit}
      alt="First slide"
    />
      </Col>

      <Col md={6}>
          <h4 style={{textAlign:'left'}} className="ms-5">Organic & Fresh Food</h4>
          <h1 style={{textAlign:'left'}} className="ms-5">Fresh Food</h1>
          <p  style={{textAlign:'left'}} className="ms-5">starting @$20</p>
          <button style={{float:'left'}} className="bttn ms-5">Buy Now</button>
      </Col>

    </Row>
    </Container>
    <Carousel.Caption>







     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} className="imgcarosel2">
    <Container>
  <Row className="d-flex justify-content-center align-items-center ">
    <Col md={6}>
    <img
      className="w-100"
      src={bakery}
      alt="Second slide"
    />
    </Col>
    <Col md={6}>
          <h4 style={{textAlign:'left'}} className="ms-5">Organic & Fresh Food</h4>
          <h1 style={{textAlign:'left'}} className="ms-5">Fresh Food</h1>
          <p  style={{textAlign:'left'}} className="ms-5">starting @$20</p>
          <button style={{float:'left'}} className="bttn ms-5">Buy Now</button>
    </Col>
  </Row>
  </Container>
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000} className="imgcarosel3">
  <Container>
  <Row className="d-flex justify-content-center align-items-center">
    <Col md={6}>
    <img
      className="w-75"
      src={cosmetics}
      alt="Third slide"
    />
    </Col>
    <Col md={6}>
          <h4 style={{textAlign:'left'}} className="ms-5">Organic & Fresh Food</h4>
          <h1 style={{textAlign:'left'}} className="ms-5">Fresh Food</h1>
          <p style={{textAlign:'left'}}  className="ms-5"> starting @$20</p>
          <button style={{float:'left'}} className="bttn ms-5">Buy Now</button>
    </Col>
  </Row>
  </Container>

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

          </div>

          <Main></Main>
          <Offer></Offer>
          <Demo></Demo>
          <Footer></Footer>
          
        </div>
    );
};

export default Home;