import React from 'react';
import "./Navbar.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Navbar = () => {
    return (
        <div className='navbar-container'>

            <div className='navbar-sub-container'>

                <div className='burger-menu'>
                    <GiHamburgerMenu className='burger-menu-icon' />
                    <p>Sort by Category</p>
                </div>

                <div className='navbar'>
                    <ul className='anim-nav'>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!" > <span className='flex items-center'>Shop <MdKeyboardArrowDown className='text-[25px]' /></span> </a></li>
                        <li><a href="#!" > <span className='flex items-center'>FAQ <MdKeyboardArrowDown className='text-[25px]' /></span> </a></li>
                        <li><a href="#!">Contact Us</a></li>
                        <li><a href="#!">Track order</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;