import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import KitchenSingle from '../../SingleService/KitchenSingle';

const KitchenMaterial = () => {
    const [kitchen,setKitchen] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/kitchen')
        .then(res=>res.json())
        .then(data=>setKitchen(data))
    },[])
    return (
        <div>
            <Header></Header>
             <div id="services">
            <h2 className="text-primary mt-5">Kitchen Product</h2>
            <Container>
            <div className="row g-3">
               {
                   kitchen.map(service=>
                    <KitchenSingle
                    key={service.id}
                    service = {service}
                    >

                    </KitchenSingle>
                    )
               }
            </div>
            </Container>
        </div>
        </div>
    );
};

export default KitchenMaterial;