import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buttons from "./views/Buttons.jsx";
import Alerts from "./views/Alerts.jsx";
import Home from "./views/Home.jsx";
import Modals from "./views/Modals.jsx";
import Lists from "./views/Lists.jsx";
import Inputs from "./views/Inputs.jsx";
import Selects from "./views/Selects.jsx";

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/buttons', element: <Buttons /> },
      { path: '/alerts', element: <Alerts /> },
      { path: '/modals', element: <Modals /> },
      { path: '/lists', element: <Lists /> },
      { path: '/basic-inputs', element: <Inputs /> },
      { path: '/selects', element: <Selects /> },
      { path: '/file', element: <div>File</div> },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
