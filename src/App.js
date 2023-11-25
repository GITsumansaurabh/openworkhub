import React from 'react';
import './App.css';
import Home1 from './pages/Home1';
import { SigninPage } from './pages/SigninPage';
import { SignupPage } from './pages/SignupPage';
import Details from './pages/Details';
import Footer from './pages/Footer';


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signup from './features/auth/components/Signup';
import NavBar from './features/navbar/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home1/></div>
  },
  {
    path: "/signin",
    element: <div><SigninPage/></div>,
  },
  {
    path: "/signup",
    element: <div><SignupPage/></div>,
  },
  {
    path: "/details",
    element: <div><Details/></div>,
  }
]);



function App() {
  return (
   
     <div className="App">
      <NavBar></NavBar>
     <RouterProvider router={router} />
      <Footer></Footer>
     </div>
  );
}

export default App;
