import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import SpicesSingle from '../../SingleService/SpicesSingle';

const Spices = () => {
    const [spices,setSpices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/spices')
        .then(res=>res.json())
        .then(data=>setSpices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div id="services">
            <h2 className="text-primary mt-5">Spices</h2>
            <Container>
            <div className="row g-3">
               
                {
                    spices.map(service=>
                        <SpicesSingle
                        key={service.id}
                        service = {service}
                        >

                        </SpicesSingle>
                        )
                }
               
            </div>
            </Container>
        </div>
        </div>
    );
};

export default Spices;