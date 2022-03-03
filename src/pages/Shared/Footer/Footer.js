import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="bgfooter mt-5" fixed="bottom">
            <Container>
            <Row className="d-flex"> 

                <Col md={4}>
                    <h1  className= "text-white" style={{textAlign: "left"}}>Services</h1>
                    <p className= "text-white" style={{textAlign: "left"}}>Fruits & Vegetable</p>
                    <p className= "text-white" style={{textAlign: "left"}}>Bakery</p>
                    <p className= "text-white" style={{textAlign: "left"}}>Spices</p>
                    <p className= "text-white" style={{textAlign: "left"}}>Cosmetics</p>
                    <p className= "text-white" style={{textAlign: "left"}}>Kitchen Materials</p>
                </Col>


            


                <Col md={4}>
                    <h1 style={{textAlign: "left"}} className="text-white">About</h1>
                <p className= "text-white" style={{textAlign: "left"}}>Products</p>
                <p className= "text-white" style={{textAlign: "left"}}>Catagories</p>
                <p className= "text-white" style={{textAlign: "left"}}>Best sales</p>
                <p className= "text-white" style={{textAlign: "left"}}>Contacts</p>
                </Col>


                <Col md={4}>
                    <h1 style={{textAlign: "left"}} className="text-white" >Address</h1>
                    <p className= "text-white" style={{textAlign: "left"}}><FontAwesomeIcon  icon={faMapMarkedAlt}/> Broaddus Maple Court,Madsinvile KY 4783,USA</p>
                    <p className= "text-white" style={{textAlign: "left"}}>+8801734181970</p>
                    <p className= "text-white" style={{textAlign: "left"}}>info@email.com</p>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Footer;