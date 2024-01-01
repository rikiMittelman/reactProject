import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './componnents/Login.jsx'
import User from './componnents/User.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Admin from './componnents/Admin.jsx'
import Empty from './componnents/Empty.jsx'
import Services from './componnents/Services.jsx'
import Events from './componnents/Events.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<User />,
    errorElement:<div>😮😮5😮</div>
  },
  {
    path:'/admin',
    element:<Admin/>,
    errorElement:<div>😮😮1😮</div>,
    children:[
      {
        path:'',
        element:<Empty/>,    
        errorElement:<div>😮2😮😮</div>
      },
      {
        path:'Services',
        element:<Services/>,
        errorElement:<div>😮😮3😮</div>
      },
      {
        path:'Events',
        element:<Events/>,
        errorElement:<div>😮😮4😮</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
