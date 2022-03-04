import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CosmeticsSingle from '../SingleService/CosmeticsSingle';
import './Demo.css'
const CategoryTwo = () => {
  const [cosmetics,setCosmetics] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:5000/cosmetics')
      .then(res=>res.json())
      .then(data=>setCosmetics(data))
  },[])
    return (
        <div className="demo">
             <h2 style={{textAlign:'left'}}>Cosmetics</h2>
           <hr className="w-75"/>
           <Container>
            <div className="row g-3">
                
             {
                    cosmetics.slice(0,4).map(service => 
                           <CosmeticsSingle
                           key={service.id}
                           service = {service}
                           >
                           </CosmeticsSingle>
                    )
                }
               
            </div>
                <Link to="/cosmetics">
                    <button className="btttnexplore mt-4">Explore <FontAwesomeIcon icon={faArrowRight}/></button>
                </Link>
            </Container>
            
        </div>
    );
};

export default CategoryTwo;