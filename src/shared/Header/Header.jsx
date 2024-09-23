import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      console.log('Sign Out Successfull!');
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  const navLinks = (
    <div className="flex gap-3">
        
        {
          user ? 
          <span className="flex gap-3">
            <li><NavLink to='/'>Home</NavLink></li>
            <li onClick={handleLogOut}><NavLink to='/login'>Logout</NavLink></li>
          </span>
          :
          <span className="flex gap-3">
            <li><NavLink to='/'>Login</NavLink></li> 
            <li><NavLink to='/registration'>Registration</NavLink></li>
          </span>
        }
    </div>
  );

  return (
    <div>
      <div className="navbar bg-base-100 border w-full">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-xl">LOG/REG - Authenticator</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {
                navLinks
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
