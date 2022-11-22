import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import NewOrder from "./NewOrder";
import OrderRefund from "./OrderRefund";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Login/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/new-order",
    element: <NewOrder/>
  },
  {
    path: "order/:invoiceid",
    element: <OrderRefund/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
