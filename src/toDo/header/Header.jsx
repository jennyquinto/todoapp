import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <h1>To Do App</h1>
            <div className='header__menu'>
                <span className='menu__line open'></span>
            </div>
        </div>
    )
};

export default Header;