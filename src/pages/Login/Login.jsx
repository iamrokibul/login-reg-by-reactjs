import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const loginData = new FormData(e.currentTarget);
        const email = loginData.get('email');
        const password = loginData.get('password');
        console.log(email, password);

        // Login User
        loginUser(email, password)
        .then(result => {
            console.log('Login Successfull!', result.user);

            // Navigate after login
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log('Username or Password Not Match!', error.message);
        });
    }

    return (
        <div className='w-full min-h-[50vh] border flex flex-col justify-center items-center p-4'>
            <h3 className='text-3xl font-bold'>Let's Login</h3>
            <form onSubmit={handleLogin} className="card-body w-2/4 p-1">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            <p className='mt-2 text-center'>Don't have an account? <Link to='/registration' className='text-yellow-500 font-bold hover:underline'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;