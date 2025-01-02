import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Définition des routes dans un seul routeur
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",  // Pour toutes les autres routes non définies, afficher une page 404
    element: <div>404 - Page non trouvée</div>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    {/* Un seul RouterProvider qui gère toutes les routes */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Si tu veux mesurer la performance de ton app
reportWebVitals();
