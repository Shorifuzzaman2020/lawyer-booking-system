import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
  <div className="navbar-start">
    
    <div className='flex justify-center items-center'>
        <div>
            <img src='assets/logo.png' alt="" />
        </div>
        <div>
            <h1 className='text-2xl font-bold'>LawBD</h1>
        </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>My-Bookings</a></li>
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