import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='topnav'>
            <a className='active' href="#home">MOCK PROJECT</a>
            <input type="text" placeholder="search.." />
            <a href="#home">Home</a>
            <a href="#seller">For seller</a>
            <a href="#buyer">For buyer</a>
            <a href="#support">Support</a>
            <button>Browse Marketplace</button>
            
            
        </div>
    );
};

export default Navbar;