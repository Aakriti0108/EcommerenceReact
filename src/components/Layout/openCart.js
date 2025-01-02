import React, { useContext } from "react";
import { Card, Container,Row,Col, Button } from "react-bootstrap";
import CartContext from "../../store/cart-content";

const OpenCart = (props)=>{
  let { cartItem, removeCart } = useContext(CartContext);
  console.log(removeCart,'data')

   return (
          <Container  style={{
            background: 'white',
            width: '500px', // Adjust width
            height: '700px', // Adjust height
            top: '7%',
            right: '0%', // Adjust positioning
            position: 'fixed',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for better aesthetics
            borderRadius: '10px', // Optional rounded corners
            overflow: 'hidden', // Prevent overflow issues
          }}> 
                <div style={{  padding: '10px' }}>
                <div style={{fontSize:'35px',fontWeight:'bold',justifyContent:"space-between"}}>
                     <div  onClick={props.onClick} style={{textAlign:'right'}} >X</div>
                      <div style={{fontSize:'25px',fontWeight:'bold',textAlign:"center"}}>CART</div>
                 </div>
                 </div>
                 <div>
                 
                 <Row>
                 <Col xs={4} md={5}>
                 <div style={{display:'flex',padding: '20px',textAlign:"center"}}>
                 <span  style={{
                   marginRight: '100px',
                   textDecoration: 'underline',
                   textUnderlineOffset: '4px',
                   fontSize:'20px',fontWeight:'bold'
                 }}>Price</span>
                  <span  style={{
                   marginRight: '100px',
                   textDecoration: 'underline',
                   textUnderlineOffset: '4px',
                   fontSize:'20px',fontWeight:'bold'
                 }}>Quantity</span>
                  <span  style={{
                   marginRight: '100px',
                   textDecoration: 'underline',
                   textUnderlineOffset: '4px',
                   fontSize:'20px',fontWeight:'bold'
                 }}>Item</span>
                 </div>
                
                 </Col>
                 </Row>
                 
                 
                 </div>
                 <div>
                 <ul >
                 <Row >
                 {cartItem.map((cart)=>(
                    <Col xs={8} key={cart.id}>
                    
                    <div style={{display:'flex',padding: '20px',textAlign:"center"}}>
                    <Card.Img style={{height:'30%',width:'30%',margin:'auto'}} src={cart.imageUrl} />
                    <span style={{display:'flex',margin:'auto'}}>{cart.title}</span>
                    <div style={{display:'flex',margin:'auto',padding: '40px'}}>
                    <span>${cart.price}</span>
                    </div>
                    <div style={{display:'flex',padding: '40px', gap: '20px'}}>
                    <input type="number" defaultValue='1' style={{height:'30px',width:'30px'}}></input>
                    <Button style={{height:'30px',width:'80px'}} onClick={() => removeCart(cart.id)}>Remove</Button>
                   
                    
                    </div>
                    
                    </div>
                  
                    </Col>
                  ))
                  
                }
                
                </Row>
                 </ul>
                   
                 </div>
                 <div style={{textAlign: 'right'}}>
                    <span>Total</span>
                    <span>$0</span>
                 </div>
                 <div style={{textAlign: 'center'}}>
                 <Button>Purchase</Button>
               </div>
               
                
          </Container> 
   )
}

export default OpenCart