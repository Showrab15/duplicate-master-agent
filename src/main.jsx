import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routers.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import {  HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider context={helmetContext}>
    <RouterProvider router={router} />
    </HelmetProvider>
    </StrictMode>,
)
