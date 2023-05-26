import React from 'react';
import Root from './routes/Root';
import Consent from './components/Consent';
import ChangeMind from './components/ChangeMind';
import InfoFill from './components/InfoFill';
import FirstForm from './components/FirstForm'
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';
import SubmitSuccess from './components/SubmitSuccess';
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
      path: "/FirstForm",
      element: <FirstForm/>
    },
    {
      path: "/SecondForm",
      element: <SecondForm/>
    },
    {
      path: "/ThirdForm",
      element: <ThirdForm/>
    },
    {
      path: "/InfoFill",
      element: <InfoFill/>
    },
    {
      path: "/ChangeMind",
      element: <ChangeMind/>
    },
    {
      path: "/SubmitSuccess",
      element: <SubmitSuccess/>
    }
  ]
  }
]);

  return (
  <RouterProvider router={router}/>
  );
}
