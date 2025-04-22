import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import IndividualDetails from '../IndividualDetails/IndividualDetails';
import BookingDetails from '../BookingDetails/BookingDetails';
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            loader:()=>fetch('lawerData.json'),
            path: "/",
            Component: Home,
        },
        {
          path: '/showDetails/:id',
          loader: async ({ params }) => {
            const res = await fetch('/lawerData.json');
            const data = await res.json();
            return data.find(lawyer => lawyer.id.toString() === params.id);
          },
          Component: IndividualDetails,
        },
        {
          path: '/showDetails/:id/bookingDetails',
          loader: async ({ params }) => {
            const res = await fetch('/lawerData.json');
            const data = await res.json();
            return data.find(lawyer => lawyer.id.toString() === params.id);
          },
          Component: BookingDetails,
        }
      ]
    },
  ]);

export default router;
