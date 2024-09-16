import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import Body from './components/Body';
// import About from './components/About';  (Lazy Loading)
import Contact from './components/Contact';
import AuthenticationPage from './components/AuthenticationPage';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/Cart';


const About = lazy(() => import("./components/About"))

const Grocery = lazy(() => import("./components/Grocery"))


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/authentication",
        element: <AuthenticationPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router= {appRouter } /> );



