import React, {useState} from 'react';
import { Navbar, Container ,Card, Button} from "react-bootstrap";
import classes from './Header.module.css';
import Footer from "./footer";
import Music from "./music";
import OpenCart from './openCart';

const Header = (props) => {
  let [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <React.Fragment>
    {cartIsShown && <OpenCart onClick={hideCartHandler} />}
      <Navbar bg="black" >
        <Container className={classes.navItem}>
          <div className={classes.navFoy}>
          <h4  className={classes.navFoy}>Home</h4>
          <h4 className={classes.navF0oy}>Store</h4>
          <h4 className={classes.navFoy}>About</h4>
          </div>
        </Container>
        <div>
        <Button variant="black" size="sm" style={{color:'white',borderColor:'blue'}} onClick={showCartHandler}>cart </Button>
        <span style={{color:'white',marginBottom:'0px',fontSize:'20px'}}>0</span>
        </div>
        
      </Navbar>
      
      <div style={{ width: '180 rem', backgroundColor:'grey',margin:'5px 0px'}}>
      <div style={{margin:'0px 10rem 30px 550px '}}>
        <div style={{padding:'30px',fontSize:'50px',color:'white'}}>The Generics</div>
      </div>
    </div>

    <Music></Music>
    
    <Footer></Footer>
    </React.Fragment>
  );
};

export default Header;
