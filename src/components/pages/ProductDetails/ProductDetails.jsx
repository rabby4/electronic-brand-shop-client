import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const [counter, setCounter] = useState(0);
    const allProducts = useLoaderData()
    const { id } = useParams()
    const product = allProducts.find(product => product._id === id);
    const { title, brand, category, description, photo, price, ratting } = product;
    const newProduct = { title, brand, category, description, photo, price, ratting, userEmail }

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    const addToCart = () => {
        fetch('https://electronic-brand-shop-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    Swal.fire(
                        'Congratulations!',
                        'Product added successfully on cart page!',
                        'success'
                    )
                    // window.location.reload()
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <div className='my-10 lg:px-0 md:px-10 px-5'>
                <Link to='/shop'>
                    <button className='flex items-center gap-2 font-medium hover:text-orange-500'><IoArrowUndoSharp></IoArrowUndoSharp>Back to Shop</button>
                </Link>
            </div>
            <div className="card lg:card-side">
                <div className='lg:w-1/2'>
                    <figure><img className='w-1/2' src={product.photo} alt={product.title} /></figure>
                </div>
                <div className="card-body lg:w-1/2">
                    <h2 className="md:text-4xl text-3xl md:font-extrabold font-bold">{product.title}</h2>
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
                        <button onClick={addToCart} className="btn bg-orange-600 hover:bg-orange-500 text-white md:px-10 px-5">Add to cart</button>
                        <button className="btn bg-orange-600 hover:bg-orange-500 text-white md:px-10 px-5">Update product</button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductDetails;