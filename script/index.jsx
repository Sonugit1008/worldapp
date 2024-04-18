import { createRoot } from 'react-dom/client'
import App from './App';
//import "./index.css";

import { createBrowserRouter,RouterProvider, } from "react-router-dom";
import Contact from '../components/Contact';
import Header from '../components/Header';
import Home from '../components/Home';
import Error from '../components/Error';
import CountryDetails from '../components/CountryDetails';
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/:countryDetail",
          element: <CountryDetails/>,
        },
      ],
    },
    
  ]);


const h1 = "Hello Sonu";
const root = createRoot(document.querySelector('#root'))

root.render(
        <RouterProvider router={router} />
);