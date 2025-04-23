
import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom"; 
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import IndividualDetails from '../IndividualDetails/IndividualDetails';
import BookingDetails from '../BookingDetails/BookingDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/lawerData.json'), 
        Component: Home,
        errorElement: <ErrorPage />
      },
      {
        path: '/showDetails',
        loader: async () => {
          const storedData = localStorage.getItem('selectedLawyer');
      
          if (!storedData) {
            throw new Error("No lawyer selected");
          }
      
          const lawyer = JSON.parse(storedData);
          return lawyer;
        },
        Component: IndividualDetails,
        errorElement: <ErrorPage />
      }
      ,
      {
        path: '/bookingDetails',
        loader: async () => {
          const storedData = localStorage.getItem('bookedLawyers');
          
          if (!storedData) {
            throw new Error("No booking data found in localStorage");
          }
      
          const lawyers = JSON.parse(storedData);
          return lawyers;
        },
        Component: BookingDetails,
        errorElement: <ErrorPage />
      }
      
    ]
  },
]);

export default router;
