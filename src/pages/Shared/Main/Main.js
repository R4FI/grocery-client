import React from 'react';
import './Main.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button, Card} from 'react-bootstrap';
import img1 from "../../../fish and meat/beef-bones-png.png";
import img2 from "../../../fish and meat/broiler-chicken-skin-off-net-weight-1-kg_510.png";
import img3 from "../../../fish and meat/chingri-prawn-fish.png";
import img4 from "../../../fish and meat/elsha-fish.png";
const Main = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
        <div>
             <div>
        <h2>Products</h2>
        <Slider {...settings}>
          <div>
          <Card className="sizecard">
          <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/13/11/29/orange-158258_960_720.png" className="w-50 p-3 m-auto"/>
          <Card.Body>
          <Card.Text>
            <h3>This is orange</h3> 
            </Card.Text>
            <Button variant="primary">Price</Button>
          </Card.Body>
    </Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2014/03/25/15/23/red-peppers-296655_960_720.png"  className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2013/07/12/19/18/watermelon-154510_960_720.png" className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2012/04/03/14/44/juice-25189_960_720.png" className="w-25 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src={img1} className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src={img2} className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src={img3} className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
          <div>
          <Card className="sizecard">
  <Card.Img variant="top" src={img4} className="w-50 m-auto p-2"/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          </div>
        </Slider>
      </div>
            
        </div>
    );
};

export default Main;