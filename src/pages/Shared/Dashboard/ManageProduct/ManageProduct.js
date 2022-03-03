import React from 'react';
import ManageBakery from './ManageBakery/ManageBakery';
import ManageCosmetics from './ManageCosmetics/ManageCosmetics';
import ManageFruits from './ManageFruits/ManageFruits';
import ManageKitchen from './ManageKitchen/ManageKitchen';
import ManageSpices from './ManageSpices/ManageSpices';

const ManageProduct = () => {
    return (
        <div>
            <ManageFruits></ManageFruits>
            <ManageBakery></ManageBakery>
            <ManageSpices></ManageSpices>
            <ManageCosmetics></ManageCosmetics>
            <ManageKitchen></ManageKitchen>
        </div>
    );
};

export default ManageProduct;