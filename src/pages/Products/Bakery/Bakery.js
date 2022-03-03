import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import BakerySingle from '../../SingleService/BakerySingle';
const Bakery = () => {
    const [bakery,setBakery] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/bakery')
        .then(res=>res.json())
        .then(data=>setBakery(data))
    },[])
    return (
        <div>
            <Header></Header>
                 <div id="services">
            <h2 className="text-primary mt-5">Bakery</h2>
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
                </Container>
        </div>
        </div>
    );
};

export default Bakery;