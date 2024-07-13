import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/about">Sobre Mim</Link></li>
                <li><Link to="/portfolio">Portfólio</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;
