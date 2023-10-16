import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ActivityForm from './pages/ActivityForm/ActivityForm.jsx';

import ActivityType from './pages/ActivityType/ActivityType.jsx';
import Concluding from './pages/Concluding/Concluding.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/Signup/SignUp.jsx';
import UserPage from './pages/UserPage/User.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/userhome",
    element: <UserPage />,
  },
  {
    path: "/activitytype",
    element: <ActivityType />,
  },
  {
    path: "/activityform",
    element: <ActivityForm />,
  },
  {
    path: "/concluding",
    element: <Concluding />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);