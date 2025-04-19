import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './ErrorPage';
import Layout from './Layout/Layout';
import User from './User';
import GrandParent from './GrandParent';
import Parent from './Parent';
import Child from './Child';

import{
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <div>Home Page</div>,
      },
      {
        path: "/login",
        element: <div>Login Page</div>,
      },
      {
        path: "/register",
        element: <div>Register</div>,
      },
      {
        path: "/user/:id",
        element: <User />,
      },
      {
        path: "/grandparent",
        element: <GrandParent />,
      },
      {
        path: "/parent",
        element: <Parent />,
      },
      {
        path: "/child",
        element: <Child />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
);
