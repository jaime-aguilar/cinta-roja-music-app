import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar-bg">
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" href="/">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        </div>
    )
}

export default Navbar;
