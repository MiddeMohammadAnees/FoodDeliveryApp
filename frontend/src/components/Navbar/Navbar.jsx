import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets'; // Make sure this path is correct and assets are correctly imported
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("menu"); 
  const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="Logo" className="logo"  /></Link> 
      <ul className="navbar-menu">
        <Link to= '/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
  <img src={assets.search_icon} alt="Search" className="navbar-search-icon" />
  <Link to="/cart" className="cart-container">
    <img src={assets.basket_icon} alt="Basket" />
    {getTotalCartAmount() > 0 && <div className="dot"></div>}
  </Link>
  <button onClick={() => setShowLogin(true)}>Sign In</button>
</div>

    </div>
  );
}

export default Navbar;