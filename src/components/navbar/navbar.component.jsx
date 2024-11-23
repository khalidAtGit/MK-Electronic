import React from 'react';
import './navbar.styles.scss';
import CategoryFilter from '../category-filter/category-filter.component';

function Navbar() {
    return (
        <nav className='navbar'>
            <img className='nav-logo' src="./assets/icon.png" alt="Logo" />
            <h1 className='nav-title'>MK ELECTRONIC</h1>

            <CategoryFilter />
        </nav>
    );
}

export default Navbar;
