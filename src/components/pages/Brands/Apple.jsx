import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Apple = () => {
    const allProducts = useLoaderData()
    const appleProduct = allProducts.filter(product => product.brand.toLowerCase() === 'apple'.toLowerCase())
    console.log(appleProduct)
    return (
        <div>
            <h3>apple product {appleProduct.length}</h3>
        </div>
    );
};

export default Apple;