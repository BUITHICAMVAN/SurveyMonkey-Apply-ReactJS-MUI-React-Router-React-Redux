import React from 'react';
import {createRoot} from 'react-dom/client'
import Header from './Header';
import Consent from './Consent';
import Footer from './Footer';
import ChangeMind from './ChangeMind';
import "../css/index.css"

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


// createBrowserRouter nhận các routes thành 1 array
const router = createBrowserRouter([
  {
    // khi path ở / trang mặc định thì sẽ render Consent ra
    path: "/",
    element: <Consent/>
  },
  {    
    path: "/ChangeMind",
    element: <ChangeMind/>}
//   ,
//   {path: "/A", element:<div>A</div>}
]);

export default function App() {
  return (
    <div className='container'>
      <RouterProvider router={router}>
        <Header/>
        {/* RouterProvider nên được bọc ở component nào có sự thay đổi
        <RouterProvider router={router}/> */}
        <Consent/>
        <Footer/>
      </RouterProvider>
    </div>
  )
}
