import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
         <nav className="Menu">
            <Link to="/">              
            <img className="Logo" src={Logo} alt="LF Oliveira logo" />
            </Link>

        </nav> 
    );
}

export default Menu;