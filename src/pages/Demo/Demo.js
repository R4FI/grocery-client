import React from 'react';
import { Container } from 'react-bootstrap';
import CategoryOne from './CategoryOne';
import CategoryThree from './CategoryThree';
import CategoryTwo from './CategoryTwo';
import './Demo.css';
const Demo = () => {
    return (
        <div className="demo">
            <Container>
            <CategoryOne></CategoryOne>
            <CategoryTwo></CategoryTwo>
            <CategoryThree></CategoryThree>
            </Container>
        </div>
    );
};

export default Demo;