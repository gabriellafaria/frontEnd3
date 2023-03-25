import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from 'axios';
import HomePage from './pages/home';
import FormPage from './pages/form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/> ,
  },
  {
    path: "/form/:id",
    element: <FormPage/>
  },
  {
    path: "/form",
    element: <FormPage/>
  }
]);

function Routes(){
  return(<RouterProvider router={router}/>)
} 

export default Routes
