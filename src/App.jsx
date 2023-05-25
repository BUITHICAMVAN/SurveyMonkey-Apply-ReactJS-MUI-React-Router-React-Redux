import React from 'react';
import Root from './routes/Root';
import FillForm from './components/FillForm';
import Consent from './components/Consent';
import ChangeMind from './components/ChangeMind';
import InfoFill from './components/InfoFill'
import "../src/css/index.css"

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  children: [
    {
      path: "/",
      element: <Consent/>
    },
    {
      path: "/FillForm",
      element: <FillForm/>
    },
    {
      path: "/InfoFill",
      element: <InfoFill/>
    },
    {
      path: "/ChangeMind",
      element: <ChangeMind/>
    }
  ]
  }
]);

  return (
  <RouterProvider router={router}/>
  );
}
