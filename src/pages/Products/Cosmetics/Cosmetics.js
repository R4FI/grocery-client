import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import CosmeticsSingle from '../../SingleService/CosmeticsSingle';

const Cosmetics = () => {
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/cosmetics')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    return (
        <div>
            <Header></Header>
             <div id="services">
            <h2 className="text-primary mt-5">Cosmetics</h2>
            <Container>
            <div className="row g-3">
            
                {
                    cosmetics.map(service=>
                        <CosmeticsSingle
                        key={service.id}
                        service = {service}
                        >

                        </CosmeticsSingle>
                        )
                }
               
            </div>
            </Container>
        </div>
            
        </div>
    );
};

export default Cosmetics;