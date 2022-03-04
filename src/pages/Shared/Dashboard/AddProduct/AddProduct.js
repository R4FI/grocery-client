import React from 'react';
import FruitVeg from '../AddFoodVeg/FruitVeg';
import Bakery from '../Bakery/Bakery';
import Cosmetics from '../Cosmetics/Cosmetics';
import Kitchen from '../Kitchen/Kitchen';
import Spices from '../Spices/Spices';

const AddProduct = () => {
    return (
        <div>
            <FruitVeg></FruitVeg>
            <Bakery></Bakery>
            <Cosmetics></Cosmetics>
            <Spices></Spices>
            <Kitchen></Kitchen>
        </div>
    );
};

export default AddProduct;