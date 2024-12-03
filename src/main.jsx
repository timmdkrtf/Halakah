import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import React, { useRef, useEffect, useState } from 'react';
import Landing from './pages/Landing.jsx';
import MajmuPage from './pages/MajmuPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/buku/Majmuatul-Awrod',
    element: <MajmuPage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
