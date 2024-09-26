import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './app/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationPage from './pages/Registration.jsx';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails.jsx';
import { Provider } from 'react-redux';
import Review from './pages/Review.jsx';
import MyErrorBoundary from './pages/MyErrorBoundary.jsx';
import { HelmetProvider } from 'react-helmet-async';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<RegistrationPage />} />
      <Route path="/product/" element={<ProductDetails />} />
      <Route path="/review/" element={<Review />} />
      <Route path="/error/" element={<MyErrorBoundary />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);