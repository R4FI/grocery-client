import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FruitVegSingle.css';
const FruitsVegSingle = ({service}) => {
    const { _id, name,price, description, rating, image } = service;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <Container>
             <div >
            <div className="offer-card">
                <div className="offer-img">
                    <img src={image} alt="" />
                </div>
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p>Price ${price}</p>
                    <p><small>Rating:{rating}</small></p>
                    <p>{description}</p>
                </div>
                <div className="booking-btn">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>

                </div>

            </div>
        </div>
        </Container>
        </div>
    );
};

export default FruitsVegSingle;