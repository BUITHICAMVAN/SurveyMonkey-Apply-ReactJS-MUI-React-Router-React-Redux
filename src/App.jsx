import React from 'react';
import {createRoot} from 'react-dom/client'
import Header from './Header';
import Content from './Content';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content/>,
  }
//   ,
//   {path: "/A", element:<div>A</div>}
]);

export default function App() {
  return (
    <div>
        <Header/>
        <RouterProvider router={router} />
    </div>
  )
}
