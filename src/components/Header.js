import React, { Component } from 'react';
import logo from '../assets/logo-rastreator-header.png';

class Header extends Component {
  render() {
    return (
    <header>
      <div className='header-container'>

        <a href="/">
          <img className='logo' src={logo} alt='Logo rastreator' />
        </a>
          <button className="header-btn">MI ÁREA PERSONAL</button>
      </div>
      <nav className="header-navbar-container">
        <ul className="header-navbar">
          <li className="header-navbar-item"><a href="#">SEGUROS</a></li>
          <li className="header-navbar-item"><a href="#">INTERNET Y TELEFONÍA</a></li>
          <li className="header-navbar-item"><a href="#"> FINANZAS</a></li>
          <li className="header-navbar-item"><a href="#">VIAJES</a></li>
          <li className="header-navbar-item"><a href="#">COCHES</a></li>
          <li className="header-navbar-item"><a href="#">ENERGÍA</a></li>
        </ul>
      </nav>
    </header>
    );
  }
}

export default Header;