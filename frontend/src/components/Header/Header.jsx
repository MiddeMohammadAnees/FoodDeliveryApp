import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets'; // Make sure this path is correct and assets are correctly imported
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and expertise. Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <a href='#explore-menu'><button>View Menu</button></a>
        
      </div>
    </div>
  );
}

export default Header;
