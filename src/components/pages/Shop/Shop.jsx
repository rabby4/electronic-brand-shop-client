import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Shop = () => {
    const allProducts = useLoaderData()
    return (
        <div>
            <div className="container mx-auto mb-24">
                <div>
                    <div className='my-20'>
                        <h2 className='text-5xl font-bold text-center'>All Products</h2>
                    </div>
                    <div className={allProducts.length !== 0 && 'block'}>
                        <div className="grid grid-cols-4 gap-8">
                            {
                                allProducts.map(product => <div key={product._id}>
                                    <div className="card bg-base-100 shadow-lg">
                                        <figure><img className="w-2/3" src={product.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title font-bold">{product.title.slice(0, 25)}</h2>
                                            <p>{product.description.slice(0, 100)}...</p>
                                            <div className="flex justify-between my-5">
                                                <div className="space-y-3">
                                                    <div className="rating">
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                                                    </div>
                                                    <h2 className="text-xl font-semibold">Price: ${product.price}</h2>
                                                </div>
                                                <div className="card-actions flex-col justify-end space-y-3">
                                                    <div className="badge badge-outline capitalize">{product.brand}</div>
                                                    <div className="badge badge-outline capitalize">{product.category}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <Link className="btn w-1/2 bg-orange-600 hover:bg-orange-500 text-white" to={`/productdetails/${product._id}`}>
                                                    <button >Details</button></Link>
                                                <Link to={`updateproduct/${product._id}`} className="btn w-1/2 bg-orange-600 hover:bg-orange-500 text-white" ><button>Update</button></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={allProducts.length == 0 ? 'block' : 'hidden'}>
                        <h2>There is no product</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Shop;