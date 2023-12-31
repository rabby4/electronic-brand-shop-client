import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Samsung from './components/pages/Brands/Samsung.jsx';
import Apple from './components/pages/Brands/Apple.jsx';
import ProductDetails from './components/pages/ProductDetails/ProductDetails.jsx';
import Acer from './components/pages/Brands/Acer.jsx';
import Xiaomi from './components/pages/Brands/Xiaomi.jsx';
import Hp from './components/pages/Brands/Hp.jsx';
import Cart from './components/pages/Cart/Cart.jsx';
import OnePlus from './components/pages/Brands/OnePlus.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
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
        element: <Shop></Shop>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/addproduct',
        element: <PrivateRouter><AddProduct></AddProduct></PrivateRouter>
      },
      {
        path: '/updateproduct/:id',
        element: <PrivateRouter><UpdateProduct></UpdateProduct></PrivateRouter>,
        loader: ({ params }) => fetch(`https://electronic-brand-shop-server.vercel.app/products/${params.id}`)
      },
      {
        path: '/productdetails/:id',
        element: <PrivateRouter><ProductDetails></ProductDetails></PrivateRouter>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/samsung',
        element: <Samsung></Samsung>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/apple',
        element: <Apple></Apple>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/acer',
        element: <Acer></Acer>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/oneplus',
        element: <OnePlus></OnePlus>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/hp',
        element: <Hp></Hp>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/xiaomi',
        element: <Xiaomi></Xiaomi>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/products')
      },
      {
        path: '/cart',
        element: <PrivateRouter><Cart></Cart></PrivateRouter>,
        loader: () => fetch('https://electronic-brand-shop-server.vercel.app/cart')
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
