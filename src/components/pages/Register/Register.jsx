import React, { useContext, useState } from 'react';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Password should be at least 6 characters',
            })
            return
        } else if (!/(?=.*?[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Password should be at least one Uppercase',
            })
            return;
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: 'Password should be at least one special character',
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                        navigate(location?.state ? location.state : '/')
                    })
                Swal.fire(
                    'Good job!',
                    'Registration Successful!',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'The email already in use',
                })
            })


    }

    return (
        <div>
            <div className="max-w-7xl h-screen flex items-center mx-auto lg:px-0 md:px-0 px-5">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-xl mx-auto">
                    <div className='mt-10 mb-5'>
                        <h2 className='text-center text-5xl font-bold'>Register Now</h2>
                    </div>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" name='password' className="input input-bordered relative w-full" required />
                                <span className="cursor-pointer absolute right-3 bottom-4 text-xl" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoIosEye></IoIosEye>
                                    }
                                </span>
                            </div>

                        </div>
                        <div className="form-control">
                            <button className="btn bg-orange-600 hover:bg-orange-500 text-white text-base">Register</button>
                        </div>
                    </form>
                    <div className='mb-5'>
                        <p className='text-sm text-center mb-5'>Do not have an account? Please <Link to='/login'><strong className='text-orange-500'>Login</strong></Link></p>
                    </div>

                </div>
                {/* <Toaster></Toaster> */}
            </div>
        </div>
    );
};

export default Register;