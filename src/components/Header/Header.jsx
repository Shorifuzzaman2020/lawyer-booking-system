
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); 

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <>
            {loading && (
                <div className="fixed top-0 left-0 right-0 flex justify-center items-center z-50 bg-white bg-opacity-60 h-screen">
                    <span className="loading loading-bars loading-xl text-blue-500"></span>
                </div>
            )}

            <div className="navbar bg-base-100 w-11/12 mx-auto mb-2">
                <div className="navbar-start">
                    <div className='flex justify-center items-center'>
                        <img src='/assets/logo.png' alt="Logo" className='w-10 h-10 mr-2' />
                        <h1 className='text-2xl font-bold'>LawBD</h1>
                    </div>
                </div>

                <div className="navbar-center lg:flex">
                    <ul className="menu sm:menu-vertical lg:menu-horizontal px-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
                        >
                            <li><a>Home</a></li>
                        </NavLink>
                        <NavLink
                            to="/bookingDetails"
                            className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
                        >
                            <li><a>My-Bookings</a></li>
                        </NavLink>
                        <NavLink
                            to="/showBlogs"
                            className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
                        >
                            <li><a>Blogs</a></li>
                        </NavLink>
                        <NavLink
                            to="/errorPage"
                            className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : ''}
                        >
                            <li><a>Contact Us</a></li>
                        </NavLink>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a className="btn bg-green-500 text-white font-bold rounded-full">Contact Now</a>
                </div>
            </div>
        </>
    );
};

export default Header;

