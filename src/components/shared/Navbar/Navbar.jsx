import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/addproduct'>Add Product</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className='bg-orange-500'>
            <div className='container mx-auto'>
                <div className="navbar justify-between">
                    <div className="navbar-start w-auto">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu-md bg-orange-500 text-white font-medium dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to='/'><img className='md:w-36 w-28 rounded-xl' src="https://www.robiulelectronics.com/img/upload/20170827081056963596180_21124116_1834692093227634_407323248_n.png" alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu-horizontal px-1 text-lg text-white menu-mrg">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {/* <span className="badge badge-sm indicator-item">8</span> */}
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-orange-500 text-base">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-block bg-orange-500 hover:bg-orange-600 text-white">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                user ? <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-14 rounded-full">
                                            {
                                                user && <img className="w-14 h-14 rounded-full" src={user.photoURL} alt="" />
                                            }
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                {user?.displayName}
                                                <span className="badge">New</span>
                                            </a>
                                        </li>

                                        <li><button className="font-semibold" onClick={handleLogOut} >Log Out</button></li>
                                    </ul>
                                </div>
                                    :
                                    <Link to='/login'><button className="btn px-8">Login</button></Link>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;