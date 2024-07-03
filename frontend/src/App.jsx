// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import Signup from './components/Signup';



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/register',
    element: <Signup/>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

function App() {
  return (
    <>
   
    <RouterProvider router={router} />
   
    </>
  );
}

export default App;
