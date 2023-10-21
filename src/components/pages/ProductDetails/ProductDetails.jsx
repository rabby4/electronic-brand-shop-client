import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';

const ProductDetails = () => {
    const [counter, setCounter] = useState(0);
    const allProducts = useLoaderData()
    const { id } = useParams()
    const product = allProducts.find(product => product._id === id)

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    const addToCart = (e) => {
        e.preventDefault()
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className='container mx-auto'>
            <div className='my-10'>
                <button className='flex items-center gap-2 font-medium hover:text-orange-500'><IoArrowUndoSharp></IoArrowUndoSharp>Back to Shop</button>
            </div>
            <div className="card lg:card-side">
                <div className='w-1/2'>
                    <figure><img className='w-1/2' src={product.photo} alt={product.title} /></figure>
                </div>
                <div className="card-body w-1/2">
                    <h2 className="text-4xl font-extrabold">{product.title}</h2>
                    <h3 className='text-xl font-bold mt-5'>Price: <span className='text-gray-500'>${product.price}</span></h3>
                    <p className='my-5'>{product.description}</p>
                    <p><strong>SKU: </strong>{product._id}</p>
                    <p><strong>Category: </strong>{product.category}</p>
                    <p><strong>Brand: </strong>{product.brand}</p>
                    <div className='max-w-[250px] flex items-center my-5'>
                        <button onClick={decrementCounter} className='btn rounded-none bg-transparent border-gray-200 text-lg'>-</button>
                        <input type="text" defaultValue={counter} className="input rounded-none border border-gray-200 max-w-[70px]" />
                        <button onClick={incrementCounter} className='btn rounded-none bg-transparent border-gray-200 text-lg'>+</button>
                    </div>
                    <div className="card-actions">
                        <button onClick={addToCart} className="btn bg-orange-600 hover:bg-orange-500 text-white px-10">Add to cart</button>
                        <button className="btn bg-orange-600 hover:bg-orange-500 text-white px-10">Update product</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;