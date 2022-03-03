import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import bread from "../../Image/download-bread-png-clipart-png-500x500.png";
const CategoryThree = () => {
    return (
        <div>
             <div className="demo">
             <h2 style={{textAlign:'left'}}>Bakery</h2>
           <hr className="w-75"/>
           <Row className="d-flex">
               <Col md={3}>
               <Card  style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={bread}/>
  <Card.Body>
    <Card.Title style={{textAlign:'left'}}>bread</Card.Title>
    <Card.Text style={{textAlign:'left'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
               </Col>


               <Col md={3}>
               <Card  style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={bread}/>
  <Card.Body>
    <Card.Title style={{textAlign:'left'}}>bread</Card.Title>
    <Card.Text style={{textAlign:'left'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
               </Col>


               <Col md={3}>
               <Card  style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={bread}/>
  <Card.Body>
    <Card.Title style={{textAlign:'left'}}>bread</Card.Title>
    <Card.Text style={{textAlign:'left'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>

               </Col>



               <Col md={3}>
               <Card  style={{ width: '18rem' }} className="mt-2 shadowcard">
  <Card.Img variant="top" src={bread}/>
  <Card.Body>
    <Card.Title style={{textAlign:'left'}}>bread</Card.Title>
    <Card.Text style={{textAlign:'left'}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
   <button className="btttn">Buy Now</button>
  </Card.Body>
</Card>
               </Col>
           </Row>
            
        </div>
            
        </div>
    );
};

export default CategoryThree;