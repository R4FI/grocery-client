import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../Image/New folder/Web2.jpg';
import './Offer.css';
const Offer = () => {
    return (
        <div>
            <Container className="mt-5 p-5">
                    <img src={img} alt="" className="img-fluid imgshadow"/>
            </Container>
        </div>
    );
};

export default Offer;