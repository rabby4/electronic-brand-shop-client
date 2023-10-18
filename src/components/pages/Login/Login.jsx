import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <div className="max-w-7xl h-[700px] flex items-center mx-auto lg:px-0 md:px-0 px-5">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl mx-auto">
                    <div className='mt-10 mb-5'>
                        <h2 className='text-center text-4xl font-semibold'>Please Login</h2>
                    </div>
                    <form className="card-body">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <button className="btn bg-orange-600 hover:bg-orange-500 text-white text-base">Login</button>
                        </div>
                    </form>
                    <div>
                        <p className='text-sm text-center mb-5'>New in this website? Please <Link to='/register'><strong className='text-orange-600'>Register</strong></Link></p>
                    </div>
                    <div className="px-10 mb-10">
                        <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-orange-600 hover:border-orange-600 duration-300'>
                            <FcGoogle></FcGoogle>
                            <span>Login with Google</span>
                        </button>
                        <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-orange-600 hover:border-orange-600 duration-300'>
                            <BsGithub></BsGithub>
                            <span>Login with Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;