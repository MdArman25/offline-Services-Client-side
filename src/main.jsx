import {  HelmetProvider } from 'react-helmet-async';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Layout/MainLayout.jsx'
import AuthProvider from './Auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HelmetProvider>
  <AuthProvider>
   <RouterProvider router={Router} />
  </AuthProvider>

  </HelmetProvider>
  </React.StrictMode>,
)
