import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import CartProvider from './store/cartProvider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/Pages/About';// Adjust path based on actual structure

const router = createBrowserRouter([
  { path: '/about', element: <About /> },
  { path: '/', element: <Header /> },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
