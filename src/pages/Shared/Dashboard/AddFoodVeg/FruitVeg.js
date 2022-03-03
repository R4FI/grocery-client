import React from 'react';
import axios from 'axios';
import './AddFoodVeg.css'
import { useForm } from "react-hook-form";
const FruitVeg = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/fruitsveg', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="add-tourOffers">
        <h2 className="text-center pb-3">Fruits and Vegitable</h2>
        <div className="form-container container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { maxLength: 70 })} placeholder="Fruit & Vegetable" />

                <textarea {...register("description")} placeholder="description" />

                <input type="number" {...register("price")} placeholder="Price" />
                <input type="number" {...register("rating", { max: 5 })} placeholder="rating" />

                <input {...register("image")} placeholder="image url" />

                <input type="submit" />
            </form>
        </div>

    </div>
    );
};

export default FruitVeg;