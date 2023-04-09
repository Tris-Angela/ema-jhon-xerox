import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import OrderReviews from './components/order summary/OrderReviews';
import Inventory from './components/inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/LoadProductscart/cartProductsLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      
      {
        path: '/review',
        element: <OrderReviews></OrderReviews>,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
