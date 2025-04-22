import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
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
        }
      ]
    },
  ]);

export default router;