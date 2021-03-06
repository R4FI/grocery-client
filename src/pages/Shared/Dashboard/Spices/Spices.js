import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
const Spices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/spices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div>
             <div className="add-tourOffers">
        <h2 className="text-center pb-3">Spices</h2>
        <div className="form-container container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { maxLength: 50 })} placeholder="Spices" />

                <textarea {...register("description")} placeholder="description" />

                <input type="number" {...register("price")} placeholder="Price" />
                <input type="number" {...register("rating", { max: 5 })} placeholder="rating" />

                <input {...register("image")} placeholder="image url" />

                <input type="submit" />
            </form>
        </div>

    </div>

        </div>
    );
};

export default Spices;