
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto mb-2">
            <div className="navbar-start">
                <div className='flex justify-center items-center'>
                    <div>
                        <img src='/assets/logo.png' alt="Logo" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>LawBD</h1>
                    </div>
                </div>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu sm:menu-vertical lg:menu-horizontal px-1">

                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
                    >
                        <li><a>Home</a></li>
                    </NavLink>
                    <NavLink
                        to="/bookingDetails"
                        className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
                    >
                        <li><a>My-Bookings</a></li>
                    </NavLink>
                    <NavLink
                        to="/showBlogs"
                        className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
                    >
                        <li><a>Blogs</a></li>
                    </NavLink>
                    <NavLink
                        to="/errorPage"
                        className={({ isActive }) => (isActive ? 'text-blue-500 font-bold' : '')}
                    >
                        <li><a>Contact Us</a></li>
                    </NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-500 text-white font-bold rounded-full">Contact Now</a>
            </div>
        </div>
    );
};

export default Header;
