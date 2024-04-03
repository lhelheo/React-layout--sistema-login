import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home'
import Contact from './routes/Contact'
import Admin from './routes/Admin'
import Suport from './routes/Suport'
import Others from './routes/Others'
import Texto2 from './routes/Texto2'
import Extext2 from './routes/Extext2'
import Test2 from './routes/Test2'
import Login from './routes/Login'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { 
        path: '/',
        element: <Home /> 
      },
      {
        path: 'contact',
        element: <Contact /> 
      },
      {
        path: 'admin',
        element: <Admin /> 
      },
      {
        path: 'suport',
        element: <Suport /> 
      },
      {
        path: 'others',
        element: <Others /> 
      },
      {
        path: 'texto2',
        element: <Texto2 /> 
      },
      {
        path: 'extext2',
        element: <Extext2 /> 
      },
      {
        path: 'test2',
        element: <Test2 /> 
      },
      {
        path: 'login',
        element: <Login /> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
