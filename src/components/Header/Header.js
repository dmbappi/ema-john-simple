import React from 'react';
import logo from "../../images/logo.png"
import"./Header.css";
const Header = () => {
    return (
        <div >
            <div className='header'>
            <img className="logo" src={logo} alt="" srcset="" />
                <nav>
                <a href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                <a href='/about'>About</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;