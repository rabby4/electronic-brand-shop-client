import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Apple = () => {
    const allProducts = useLoaderData()
    const appleProduct = allProducts.filter(product => product.brand.toLowerCase() === 'apple'.toLowerCase())

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='hero md:min-h-[600px] min-h-[400px] lg:px-0 md:px-10 px-10 bg-cover bg-center' style={{ backgroundImage: `url(https://www.apple.com/v/macbook-air/q/images/overview/macbook_air_m1__dxctrdvvxm4i_large.jpg)` }}>
                        <div className='container text-left text-white space-y-3'>
                            <h2 className='md:text-3xl text-xl font-medium uppercase'>start the revolution</h2>
                            <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold uppercase'>macbook air m1</h2>
                            <h2 className='md:text-4xl text-2xl font-medium uppercase'>From <strong>$890</strong> </h2>
                            <Link to='/shop'><button className='btn border-none bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='hero md:min-h-[600px] min-h-[400px] lg:px-0 md:px-10 px-10 bg-cover bg-center' style={{ backgroundImage: `url(https://www.apple.com/v/watch/bf/images/overview/series-9/tile_s9_avail__h13v168dzseq_large.jpg)` }}>
                        <div className='container text-left text-white space-y-3'>
                            <h2 className='md:text-3xl text-xl font-medium uppercase'>amazing deals</h2>
                            <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold uppercase'>smart watch tile s9</h2>
                            <h2 className='md:text-4xl text-2xl font-medium uppercase'>From <strong>$99</strong> </h2>
                            <Link to='/shop'><button className='btn border-none bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='hero md:min-h-[600px] min-h-[400px] lg:px-0 md:px-10 px-10 bg-cover bg-top' style={{ backgroundImage: `url(https://www.screenstouch.co.uk/wp-content/uploads/2020/04/main-shop-banner.jpg)` }}>
                        <div className='container text-left text-white space-y-3'>
                            <h2 className='md:text-3xl text-xl font-medium uppercase'>best price of the year</h2>
                            <h2 className='lg:text-6xl md:text-5xl text-4xl font-bold uppercase'>top accessories</h2>
                            <h2 className='md:text-4xl text-2xl font-medium uppercase'>From <strong>$129</strong> </h2>
                            <Link to='/shop'><button className='btn border-none bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="container mx-auto">
                <div className='lg:px-0 md:px-10 px-5'>
                    <div className='my-20'>
                        <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold text-center'>Apple Products</h2>
                    </div>
                    <div className={appleProduct.length !== 0 && 'block'}>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                            {
                                appleProduct.slice(0, 8).map(product => <div key={product._id}>
                                    <div className="card bg-base-100 shadow-lg">
                                        <figure><img className="w-2/3" src={product.photo} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title lg:text-xl md:text-lg font-bold">{product.title.slice(0, 25)}</h2>
                                            <p>{product.description.slice(0, 90)}...</p>
                                            <div className="flex justify-between my-5">
                                                <div className="space-y-3">
                                                    <h2 className="text-base font-semibold flex items-center">Ratting: <div className="rating mx-2 w-4"><input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" /></div> {product.ratting}</h2>
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
                                                <Link to={`/updateproduct/${product._id}`} className="btn w-1/2 bg-orange-600 hover:bg-orange-500 text-white" ><button>Update</button></Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={appleProduct.length == 0 ? 'block' : 'hidden'}>
                        <div className="text-center ">
                            <h2 className="text-4xl font-semibold">There is no product available</h2>
                            <p className="my-5 text-lg">Let&#39;s see others products.</p>
                            <Link to='/shop' className="btn px-10 bg-orange-600 hover:bg-orange-500 text-white">
                                <button>Go to Shop</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Apple;