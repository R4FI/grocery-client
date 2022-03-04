import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FruitsVegSingle from '../SingleService/FruitsVegSingle';
import './Category.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const CategoryOne = () => {
  const [fruits,setFruits] = useState([]);
   
  useEffect(()=>{
        fetch('http://localhost:5000/fruitsveg')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return (
        <div>
           <h2 style={{textAlign:'left'}}>Fruits & Vegetable</h2>
           <hr className="w-75"/>
             <div id="service">
            <Container>
            <div className="row g-3">
                
             {
                    fruits.slice(0,4).map(service => 
                           <FruitsVegSingle
                           key={service.id}
                           service = {service}
                           >
                           </FruitsVegSingle>
                    )
                }
               
            </div>
                <Link to="/fruits&veg">
                    <button className="btttnexplore mt-4">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
                </Link>
            </Container>
        </div>
        </div>
    );
};

export default CategoryOne;