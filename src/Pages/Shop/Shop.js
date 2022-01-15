import React from 'react';
import "./Shop.css";

const Shop = () => {
    return (
        <div className='navbar'>
            {/* <a href="#home">Home</a>
            <a href="#news">News</a> */}
            <div class="dropdown">
                <button class="dropbtn">Category
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <hr />
            </div>
            
        </div>
    );
};

export default Shop;