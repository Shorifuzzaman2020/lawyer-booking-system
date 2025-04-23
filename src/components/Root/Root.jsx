
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const location = useLocation();

  const shouldHideFooter = location.pathname === '/errorPage';

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Root;

