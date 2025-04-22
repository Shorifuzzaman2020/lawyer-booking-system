import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto mb-2">
  <div className="navbar-start">
    
    <div className='flex justify-center items-center'>
        <div>
            <img src='public/assets/logo.png' alt="" />
        </div>
        <div>
            <h1 className='text-2xl font-bold'>LawBD</h1>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to='/'><li><a>Home</a></li></Link>
      <Link to='/showDetails/$/bookingDetails'><li><a>My-Bookings</a></li></Link>
      <li><a>Blogs</a></li>
      <li><a>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-500 text-white font-bold rounded-full">Contact Now</a>
  </div>
</div>
    );
};

export default Header;
