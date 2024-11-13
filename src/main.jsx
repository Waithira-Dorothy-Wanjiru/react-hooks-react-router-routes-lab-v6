// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes'; // Import the routes configuration

// Rendering the RouterProvider
ReactDOM.render(
  <RouterProvider router={createBrowserRouter(routes)} />,
  document.getElementById('root')
);
