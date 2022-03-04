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
                    <p className= "text-white" style={{textAlign: "left"}}>+1-202-555-0136</p>
                    <p className= "text-white" style={{textAlign: "left"}}>info@email.com</p>
                </Col>
            </Row>
            <hr className="w-75 mt-5 mb-5 text-white m-auto"/>
            </Container>
                   

                    <p className="text-white fw-4 fs-4">© All Rights Are Reserved.</p>

        </div>
    );
};

export default Footer;