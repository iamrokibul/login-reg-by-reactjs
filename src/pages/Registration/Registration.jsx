
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const registerData = new FormData(e.currentTarget);
        const name = registerData.get('name');
        const email = registerData.get('email');
        const password = registerData.get('password');
        console.log(name, email, password);
        
        // User Sign Up
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            
            // Navigate after registration
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    return (
        <div className='w-full min-h-[60vh] border flex flex-col justify-center items-center p-4'>
            <h3 className='text-3xl font-bold'>Let's Registration</h3>
            <form onSubmit={handleRegister} className="card-body w-2/4 p-1">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
                <p className='mt-2 text-center'>Already have an account? <Link to='/login' className='text-yellow-500 font-bold hover:underline'>Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;