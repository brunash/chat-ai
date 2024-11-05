import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage';
import DashboardPage from "./routes/dashboard/DashboardPage";
import ChatPage from "./routes/chatPage/ChatPage";
import RootLayout from "./layouts/rootLayout/RootLayout";


const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path:"/", element: <Homepage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
