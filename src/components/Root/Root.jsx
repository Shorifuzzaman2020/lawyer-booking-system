import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
