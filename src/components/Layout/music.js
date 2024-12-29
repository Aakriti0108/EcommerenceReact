import React from "react";
import { Button,Card,Container,Row,Col } from "react-bootstrap";
import classes from './music.module.css';

let music = ()=> {

    
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]

     return (
      <Container style={{padding:'50px'}} >
      <div style={{padding:'80px'}}>
             <Row className={classes.musicDisplay}>
             {productsArr.map((products)=>[
              <Col xs={4} md={5}>
              <div style={{ width: "18rem", margin: "20px auto", display: "flex", flexDirection: "column" }}>
              <Card.Img variant="top" src={products.imageUrl} />
              <div>
                <div>{products.title}</div>
                <div >
                <span>${products.price}</span>
                <Button variant="primary" style={{ // Pushes the button to the bottom
                      marginLeft: "95px", // Aligns the button to the right
                    }} >ADD TO CART</Button>
                </div>
               
              </div>
              
            </div>
            </Col>

        
             ]
                ) }
            </Row>
     
              
      </div>
              
       </Container>
     )
}

export default music