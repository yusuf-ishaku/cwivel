import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './assets/components/navbar';
import { Home } from "./pages/home"
import { Dashboard } from './pages/dashboard';
import { Users } from './pages/users';
import { Chat } from './pages/chat';
import { Bookings } from './pages/bookings';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { SignUpUser } from './pages/signupuser';
import { ArtisanSignUp } from './pages/artisansignup';
import { ComingSoon } from './assets/components/comingSoon';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar2 } from './assets/components/nav2';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider} from "react-query";

let cwivelRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <PageNotFound></PageNotFound>
  },
  {
    path: "/come",
    element: <ComingSoon></ComingSoon>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "/signupuser",
    element: <SignUpUser></SignUpUser>
  },
  {
    path: "/bookings",
    element: <Bookings></Bookings>
  },
  {
    path: "/chat",
    element: <Chat></Chat>
  },
  {
    path: "/users",
    element: <Users></Users>
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/artisanSignup",
    element: <ArtisanSignUp></ArtisanSignUp>
  }
]);
const user = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={user}>
      <RouterProvider router={cwivelRouter}></RouterProvider>
  </QueryClientProvider>
  </React.StrictMode>,
)
