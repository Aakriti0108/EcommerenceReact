import React from "react";

// Create a CartContext with a default structure
const CartContext = React.createContext({
  cartItems: [], // Holds the list of cart items (optional default value)
  removeCart: (id) => {}, // Function to remove an item from the cart
  addToCart: (item) => {}, // Optional: Function to add an item to the cart
});

export default CartContext;
