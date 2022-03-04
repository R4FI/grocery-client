import { height } from '@mui/system';
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FruitVegSingle.css';
const FruitsVegSingle = ({service}) => {
    const { _id, name,price, description, rating, image } = service;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <Container>
            <Card style={{ width: '18rem' , height:'25rem' }}>
  <Card.Img variant="top" src={image}  className="cardimg"/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
                    <h5 style={{textAlign:'left'}}>Price ${price}</h5>
                    <h5 style={{textAlign:'left'}}><small>Rating:{rating}</small></h5>
                    <h5 style={{textAlign:'left'}}>{description}</h5>
              </Card.Text>
             <Link to={`/placeorder/${_id}`}>
              <button className="btnbuy">Buy Now</button>
            </Link>
              </Card.Body>
            </Card>
        </Container>
        </div>
    );
};

export default FruitsVegSingle;