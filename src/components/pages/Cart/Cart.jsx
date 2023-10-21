import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const Cart = () => {
    const cartItem = useLoaderData()

    const [restCartItem, setRestCartItem] = useState(cartItem)
    const [counter, setCounter] = useState(0);
    // console.log(cartItem)

    // useEffect(() => {
    //     fetch('http://localhost:5000/cart')
    //         .then(res => res.json())
    //         .then(data => setCartItem(data))
    // }, [])

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };

    const deleteProduct = _id => {
        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('delete successfully')
                    const remainingUsers = restCartItem.filter(user => user._id !== _id)
                    setRestCartItem(remainingUsers)
                }
            })
        console.log(_id)
    }

    return (
        <div>
            <div className='container mx-auto'>
                <div className='my-20'>
                    <h2 className='flex items-center justify-center text-3xl font-semibold gap-4'><span className='cursor-pointer text-orange-500'>Shopping Cart</span> <MdArrowForwardIos></MdArrowForwardIos> <span className='cursor-pointer'>Checkout</span> <MdArrowForwardIos> </MdArrowForwardIos> <span className='cursor-pointer'>Order Complete</span></h2>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-base text-gray-800'>Product</th>
                                        <th className='text-base text-gray-800'>Price</th>
                                        <th className='text-base text-gray-800'>Quantity</th>
                                        <th className='text-base text-gray-800'>Subtotal</th>
                                        <th className='text-base text-gray-800'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        restCartItem?.map(item => <tr key={item._id}>
                                            <td className='w-2/12'>
                                                <div className="flex items-center space-x-1">
                                                    <div className="avatar">
                                                        <div className="w-32 h-24">
                                                            <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='w-5/12'>
                                                <p className='font-semibold'>{item.title}</p>

                                            </td>
                                            <td className='w-1/12'> <strong>$</strong> {item.price}</td>
                                            <td className='w-2/12'>
                                                <div className='max-w-[250px] flex items-center my-5'>
                                                    <button onClick={decrementCounter} className='btn rounded-none bg-transparent border-gray-200 text-lg'>-</button>
                                                    <input type="text" readOnly={counter} className="input rounded-none border border-gray-200 max-w-[60px]" />
                                                    <button onClick={incrementCounter} className='btn rounded-none bg-transparent border-gray-200 text-lg'>+</button>
                                                </div>
                                            </td>
                                            <td className='w-1/12'>
                                                <p><strong>$</strong> {item.price}</p>
                                            </td>
                                            <td className='w-1/12'>
                                                <button onClick={() => deleteProduct(item._id)} className="btn btn-ghost btn-xs">X</button>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;