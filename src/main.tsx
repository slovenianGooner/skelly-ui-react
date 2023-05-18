import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Buttons from "./views/Buttons";
import Alerts from "./views/Alerts";
import Home from "./views/Home";
import Modals from "./views/Modals";
import Lists from "./views/Lists";
import Inputs from "./views/Inputs";
import Selects from "./views/Selects";
import File from "./views/File";
import ListInputs from "./views/ListInputs";

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
      { path: '/file', element: <File /> },
      { path: '/list-inputs', element: <ListInputs />}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
