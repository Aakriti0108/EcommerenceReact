import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import CartProvider from './store/cartProvider';



function App() {
  
     return(
          
           <CartProvider>
           <Header></Header>
           </CartProvider>
        )
}

export default App;
