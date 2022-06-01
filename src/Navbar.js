import React from 'react';
import { ReactComponent as Arrowdown } from './icon-arrow-down.svg';
import Login from './Login';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-items">
                <div className="arrow-down">
                    <li>Features</li>
                    <Arrowdown />
                </div>
                <div className="arrow-down">
                    <li>Company</li>
                    <Arrowdown />
                </div>
                <li>Careers</li>
                <li>About</li>
            </div>
            <Login />
        </div>
    )
}

export default Navbar;
