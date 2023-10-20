import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData } from 'react-router-dom';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';

const Home = () => {
    const allProducts = useLoaderData()
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='hero lg:min-h-[600px] min-h-[600px]' style={{ backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo21/slider/slide1.jpg)` }}>
                        <div className='container text-left space-y-3'>
                            <h2 className='text-3xl font-medium uppercase'>start the revolution</h2>
                            <h2 className='text-6xl font-bold uppercase'>drone pro 4</h2>
                            <h2 className='text-4xl font-medium uppercase'>From <strong>$499</strong> </h2>
                            <Link to='/shop'><button className='btn bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='hero lg:min-h-[600px] min-h-[600px]' style={{ backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo21/slider/slide2.jpg)` }}>
                        <div className='container text-left space-y-3'>
                            <h2 className='text-3xl font-medium uppercase'>amazing deals</h2>
                            <h2 className='text-6xl font-bold uppercase'>smartphone</h2>
                            <h2 className='text-4xl font-medium uppercase'>From <strong>$199</strong> </h2>
                            <Link to='/shop'><button className='btn bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='hero lg:min-h-[600px] min-h-[600px]' style={{ backgroundImage: `url(https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo21/slider/slide3.jpg)` }}>
                        <div className='container text-left space-y-3'>
                            <h2 className='text-3xl font-medium uppercase'>best price of the year</h2>
                            <h2 className='text-6xl font-bold uppercase'>top accessories</h2>
                            <h2 className='text-4xl font-medium uppercase'>From <strong>$19</strong> </h2>
                            <Link to='/shop'><button className='btn bg-orange-600 hover:bg-orange-500 text-white px-8 mt-3'>Buy Now</button></Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='container mx-auto'>
                <div className='py-24'>
                    <div className='mb-10'>
                        <h2 className='text-5xl font-bold text-center'>Our Top Brand</h2>
                    </div>
                    <div className='grid grid-cols-3 gap-10'>
                        <Link to='/samsung'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://www.freepnglogos.com/uploads/original-samsung-logo-10.png" alt="Samsung" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">Samsung</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/hp'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://1000logos.net/wp-content/uploads/2017/02/HP-Logo-2012.png" alt="HP" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">HP</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/acer'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://logos-world.net/wp-content/uploads/2022/11/Acer-Logo-2001.png" alt="acer" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">Acer</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/apple'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://cdn.freebiesupply.com/logos/large/2x/apple-4-logo-png-transparent.png" alt="apple" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">Apple</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='/xiaomi'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png" alt="Xiaomi" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">Xiaomi</h2>
                                </div>
                            </div>
                        </Link>
                        <Link to='dell'>
                            <div className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src="https://static.vecteezy.com/system/resources/previews/022/100/931/original/dell-logo-transparent-free-png.png" alt="dell" className="rounded-xl w-40" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="text-xl font-bold">Dell</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>


            <div>
                <div className="container mx-auto mb-24">
                    <div>
                        <div className='my-20'>
                            <h2 className='text-5xl font-bold text-center'>All Products</h2>
                        </div>
                        <div className={allProducts.length !== 0 && 'block'}>
                            <div className="grid grid-cols-3 gap-10">
                                {
                                    allProducts.slice(0, 6).map(product => <div key={product._id}>
                                        <div className="card bg-base-100 shadow-xl">
                                            <figure><img className="w-2/3" src={product.photo} alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">{product.title}</h2>
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

            <div className='bg-cover' style={{ backgroundImage: 'url(https://portotheme.com/html/porto_ecommerce/assets/images/banners/banner-top.jpg)' }}>
                <div className='py-20'>
                    <div className='container mx-auto text-left space-y-5'>
                        <h2 className='text-6xl font-bold'>Big Sale Up To 70% Off</h2>
                        <h2 className='text-xl'>Exclusive Offers For Limited Time</h2>
                        <button className='btn bg-white hover:bg-gray-700 hover:text-white border-0'>Explore Your Order</button>
                    </div>
                </div>
            </div>
            <div className='bg-base-200 py-20'>
                <div className='container mx-auto flex justify-around'>
                    <div className='text-left space-y-2'>
                        <div className='text-5xl'>
                            <LiaShippingFastSolid className='text-orange-500'></LiaShippingFastSolid>
                        </div>
                        <h2 className='text-xl font-bold'>FREE SHIPPING & RETURNS</h2>
                        <h2 className='font-semibold'>All Orders Over $99</h2>
                    </div>
                    <div className='text-left space-y-2'>
                        <div className='text-5xl'>
                            <AiOutlineDollarCircle className='text-orange-500'></AiOutlineDollarCircle>
                        </div>
                        <h2 className='text-xl font-bold'>MONEY BACK GUARANTEE</h2>
                        <h2 className='font-semibold'>Safe & Fast</h2>
                    </div>
                    <div className='text-left space-y-2'>
                        <div className='text-5xl'>
                            <BiSupport className='text-orange-500'></BiSupport>
                        </div>
                        <h2 className='text-xl font-bold'>ONLINE SUPPORT</h2>
                        <h2 className='font-semibold'>Need Assistance?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;