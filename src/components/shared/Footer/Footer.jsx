import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-base-content mt-24'>
            <div className=' bg-orange-500 py-8'>
                <div className='container mx-auto flex justify-between items-center text-white lg:flex-row md:flex-col flex-col lg:space-y-0 md:space-y-5 space-y-5'>
                    <div>
                        <h2 className='lg:text-xl md:text-2xl text-xl font-semibold'>Sign Up to Newsletter</h2>
                    </div>
                    <div>
                        <p className='text-sm'>Get all the latest information on Events, Sales and Offers.</p>
                        <h2 className='text-xl font-semibold'>Receive $10 coupon for first shopping.</h2>
                    </div>
                    <div>
                        <form>
                            <fieldset className="form-control w-80">
                                <div className="relative">
                                    <input type="text" placeholder="example@gmail.com" className="input input-bordered w-full pr-16" />
                                    <button className="btn bg-gray-700 hover:bg-gray-600 border-0 text-white absolute top-0 right-0 rounded-l-none">Subscribe</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
            <div className=" grid lg:grid-cols-5 md:grid-cols-2 lg:gap-0 md:gap-10 gap-10 py-16 container mx-auto lg:px-0 md:px-10 px-5">
                <div className='col-span-2 lg:pr-16 md:pr-10'>
                    <img className='md:w-40 w-28' src="https://www.robiulelectronics.com/img/upload/20170827081056963596180_21124116_1834692093227634_407323248_n.png" alt="" />
                    <div className=''>
                        <p>Shop the latest electronics at [website name], your one-stop shop for all things tech. We offer a wide selection of products from top brands, including TVs, laptops, smartphones, tablets, and more. Plus, we offer free shipping on orders over $50 and easy returns.</p>
                    </div>
                    <div className='space-y-1 mt-5'>
                        <p> <strong>Address:</strong> 3298 Grant Street Longview, TX</p>
                        <p>United Kingdom 75601</p>
                        <p><strong>Phone:</strong>1-202-555-0106</p>
                        <p><strong>Email:</strong>help@shopper.com</p>
                    </div>
                </div>
                <div>
                    <header className="footer-title">Services</header>
                    <div className='flex flex-col space-y-2'>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Support</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </div>
                <div>
                    <header className="footer-title">Brand</header>
                    <div className='flex flex-col space-y-2'>
                        <Link to='/samsung'>
                            <button className="link link-hover">Samsung</button>
                        </Link>
                        <Link to='/hp'>
                            <button className="link link-hover">HP</button>
                        </Link>
                        <Link to='/acer'>
                            <button className="link link-hover">Acer</button>
                        </Link>
                        <Link to='/apple'>
                            <button className="link link-hover">Apple</button>
                        </Link>
                        <Link to='/xiaomi'>
                            <button className="link link-hover">Xiaomi</button>
                        </Link>
                        <Link to='/oneplus'>
                            <button className="link link-hover">One Plus</button>
                        </Link>
                    </div>

                </div>
                <div className='flex lg:flex-col lg:gap-0 md:gap-10 gap-10 lg:col-span-1 md:col-span-2 col-span-2'>
                    <div>
                        <header className="footer-title">Social</header>
                        <div className="flex gap-6">
                            <a href='#' className='text-2xl'><BsFacebook></BsFacebook></a>
                            <a href='#' className='text-2xl'><BsTwitter></BsTwitter></a>
                            <a href='#' className='text-2xl'><AiFillInstagram></AiFillInstagram></a>
                        </div>
                    </div>
                    <div className='lg:mt-10 md:mt-0 mt-0 '>
                        <header className="footer-title">Secure Payments</header>
                        <div>
                            <img className='lg:w-full md:w-[250px]' src="https://themezhub.net/kumo-demo-2/kumo/assets/img/card.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-black text-white text-sm footer-center p-4">
                <aside>
                    <p>Copyright © 2023 - Designd By developer rabby</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;