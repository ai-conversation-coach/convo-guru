import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Chat from './pages/Chat';
import NoPage from './pages/NoPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
//import reportWebVitals from './reportWebVitals';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <NoPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
    ],
  },
];

const router = createBrowserRouter(
    routes
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
