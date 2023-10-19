import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main.jsx';
import Home from './components/pages/Home/Home.jsx';
import Error from './components/pages/Error/Error.jsx';
import Register from './components/pages/Register/Register.jsx';
import Login from './components/pages/Login/Login.jsx';
import Shop from './components/pages/Shop/Shop.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import PrivateRouter from './PrivateRouter/PrivateRouter.jsx';
import AddProduct from './components/pages/AddProduct/AddProduct.jsx';
import UpdateProduct from './components/pages/UpdateProduct/UpdateProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/shop',
        element: <PrivateRouter><Shop></Shop></PrivateRouter>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/updateproduct',
        element: <UpdateProduct></UpdateProduct>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
