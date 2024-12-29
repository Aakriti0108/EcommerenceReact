import React from "react";
import classes from './openCart.module.css';
import { Card, Container,Row,Col, Button } from "react-bootstrap";

const openCart = (props)=>{
  
   return (
          <Container  style={{
            background: 'white',
            width: '300px', // Adjust width
            height: '400px', // Adjust height
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
                    <span  style={{
                     marginRight: '20px',
                     textDecoration: 'underline',
                     textUnderlineOffset: '4px',
                   }}>price</span>
                    <span  style={{
                     marginRight: '20px',
                     textDecoration: 'underline',
                     textUnderlineOffset: '4px',
                   }}>quantity</span>
                    <span  style={{
                     marginRight: '20px',
                     textDecoration: 'underline',
                     textUnderlineOffset: '4px',
                   }}>item</span>
                    </Col>
                    </Row>
                 </div>
                 <div>
                    <Row  >
                    <Col xs={4} md={5}>
                    <span  style={{
                     marginRight: '35px'
                   }}>${50.00}</span>
                    <span  style={{
                     marginRight: '35px'
                   }}>2</span>
                    <span  style={{
                     marginRight: '45px'
                   }} >Chips</span>
                    </Col>
                    </Row>
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

export default openCart