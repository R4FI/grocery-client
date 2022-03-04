import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import { Container } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
const PlaceOrder = () => {
    const {bookingId} = useParams();
    const [orderDetails,setOrderDetails] = useState([]);
    const {user} = useAuth(); 
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        // data.status = 'Pending';
        console.log(data);
        fetch ('http://localhost:5000/orders',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=> {
            if (result.insertedID){
                alert('Your order successfully added')
                reset();
            }
        })

    };

    //data load fruits
      useEffect(() => {
        fetch(`http://localhost:5000/fruitsveg/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, [bookingId]);
    
    
    //data bakery load
      useEffect(() => {
        fetch(`http://localhost:5000/bakery/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, []);

    //data load spices
      useEffect(() => {
        fetch(`http://localhost:5000/spices/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, []);


    //data load cosmetics
      useEffect(() => {
        fetch(`http://localhost:5000/cosmetics/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, []);

    //data load kitchen
      useEffect(() => {
        fetch(`http://localhost:5000/kitchen/${bookingId}`)
            .then(res => res.json())
            .then(data => setOrderDetails(data));
    }, []);

    return (
        <div>
            <Header></Header>
            <h2 className="text-center">Ordered Item: {orderDetails?.name}</h2>
            <Container>
            <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input  defaultValue={user.displayName} {...register("name")} />
                                    <input  defaultValue={orderDetails?.name} {...register("bookname")} required />
                                    <input  defaultValue={user.email} placeholder="Email" {...register("email", )} required/>
                                    <input  defaultValue={orderDetails?.price} placeholder="price" {...register("price" )} required/>
                                    <input  placeholder="phone number" defaultValue="" required {...register("phone", {max:11})}/>
                                    <input type="text" {...register("Address")} required placeholder="Address"/> 
                                    <input type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img">
                                    <img src={orderDetails?.image} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>You Choose : {orderDetails?.name}</h4>
                                    <p>{orderDetails?.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><strong>Price: {orderDetails?.price}$</strong> only.</p>
                                        <p>Review : <strong>{orderDetails?.rating}</strong> </p>
                                    </div>
                                  <NavLink to={"/home"}> <button className="btn btn-success px-3 py-2">Back To Products</button> </NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default PlaceOrder;