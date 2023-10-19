import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Home = () => {
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
        </div>
    );
};

export default Home;