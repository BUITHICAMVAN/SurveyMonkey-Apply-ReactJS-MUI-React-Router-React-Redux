import React from 'react';
import "../css/index.css";
import {
  createBrowserRouter,
  RouterProvider, 
  Link
} from "react-router-dom";


import ChangeMind from './ChangeMind';


// const router = createBrowserRouter([
//   {
//     //path mặc định để biết chỗ dẫn đến đâu
//     path: "/ChangeMind",
//     // khi route đến path trên thì sẽ render ra 
//     element: <ChangeMind/>
//   }
// //   ,
// //   {path: "/A", element:<div>A</div>}
// ]);


export default function Header() {
  return (
    <RouterProvider router={router}>
      <header className="container">
        <div className="header_main">
          <div className='header_row'>
            <div className="header_col header_col-left">
              <div className='header_brand'>
                <div className="header_logo">
                  <img className="header_logo-img" src="../assets/workable-website-favicon-color.png" alt="logo" />
                </div>
                <div className="header_name">
                  <h1>FAMILIES USING TECHNOLOGY SURVEY</h1>
                </div>
              </div>
            </div>
            <div className="header_col header_col-right">
              <div className="header_route">
                <Link to="/ChangeMind">I HAVE CHANGED MY MIND</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </RouterProvider>
  );
}