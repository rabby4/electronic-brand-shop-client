import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { logIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
                Swal.fire(
                    'Good job!',
                    'Logged in successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    icon: 'Error',
                    title: 'Oops...',
                    text: 'You entered wrong email and password!',
                })
            })

    }

    const handleGoogle = () => {
        logInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire(
                    'Good job!',
                    'Logged in successful with Google!',
                    'success'
                )
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'Error',
                    title: 'Oops...',
                    text: 'You entered wrong email and password!',
                })
            })
    }

    return (
        <div>
            <div className="max-w-7xl h-[700px] flex items-center mx-auto lg:px-0 md:px-0 px-5">

                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl mx-auto">
                    <div className='mt-10 mb-5'>
                        <h2 className='text-center text-5xl font-bold'>Please Login</h2>
                    </div>
                    <form onSubmit={handleLogIn} className="card-body">
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
                        <button onClick={handleGoogle} className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-orange-600 hover:border-orange-600 duration-300'>
                            <FcGoogle></FcGoogle>
                            <span>Login with Google</span>
                        </button>
                        {/* <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-orange-600 hover:border-orange-600 duration-300'>
                            <BsGithub></BsGithub>
                            <span>Login with Github</span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;