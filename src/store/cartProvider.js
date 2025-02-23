import { useState } from "react";
import CartContext from "./cart-content";

const CartProvider = (props)=>{

    let [cartItem,setCartItem]=useState([

            {
              id:1,
            
            title: 'Colors',
            
            price: 100,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            
            quantity: 2,
            
            },
            
            {
              id:2,
            
            title: 'Black and white Colors',
            
            price: 50,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            
            quantity: 3,
            
            },
            
            {
              id:3,
            
            title: 'Yellow and Black Colors',
            
            price: 70,
            
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            
            quantity: 1,
            
            }        
    ])

    let removeCart = (id)=>{
        let updatedUser = cartItem.filter(item=>item.id !== id)
          setCartItem(updatedUser); 
        console.log('remove',id,updatedUser);
    }
    
    let addToCart = (item) => {
      setCartItem((prevCart) => [...prevCart, item]);
    };
   
   
    return <CartContext.Provider value={{cartItem,addToCart,removeCart}}>{props.children}</CartContext.Provider>
}
export default CartProvider