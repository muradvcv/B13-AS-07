import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Router/Routers'
import TimeLineProvider from './Context/TimeLineProvider'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TimeLineProvider>
      <RouterProvider router={router} />
      <ToastContainer />
   </TimeLineProvider>
  </StrictMode>,
)
