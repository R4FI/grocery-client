import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BakerySingle from '../SingleService/BakerySingle';

const CategoryThree = () => {
  const [bakery,setBakery] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/bakery')
      .then(res=>res.json())
      .then(data=>setBakery(data))
  },[])
    return (
        <div>
             <div className="demo">
             <h2 style={{textAlign:'left'}}>Bakery</h2>
           <hr className="w-75"/>
            <Container>
            <div className="row g-4">
                {
                    bakery.map(service=>
                        <BakerySingle
                        key={service.id}
                        service = {service}
                        >

                        </BakerySingle>
                        )
                }
               
            </div>
            <Link to="/bakery">
                    <button className="btttnexplore mt-4">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
                </Link>
                </Container>
            
        </div>
            
        </div>
    );
};

export default CategoryThree;