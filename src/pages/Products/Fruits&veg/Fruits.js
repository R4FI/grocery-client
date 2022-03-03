import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import FruitsVegSingle from '../../SingleService/FruitsVegSingle';
const Fruits = () => {
    const [fruits,setFruits] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/fruitsveg')
        .then(res=>res.json())
        .then(data=>setFruits(data))
    },[])
    return (
        <div>
            <Header></Header>
             <div id="service">
            <h2 className="text-primary mt-5">Fruits</h2>
            <Container>
            <div className="row g-3">
                
                {
                    fruits.map(service => 
                           <FruitsVegSingle
                           key={service.id}
                           service = {service}
                           >

                           </FruitsVegSingle>
                    )
                }
               
            </div>
            </Container>
        </div>
        </div>
    );
};

export default Fruits;