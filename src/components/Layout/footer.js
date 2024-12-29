import React from "react";
import classes from "./footer.module.css"; // Optional: Create a separate CSS file for styles

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes['footer-content']}>
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <ul className={classes['footer-links']}>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
