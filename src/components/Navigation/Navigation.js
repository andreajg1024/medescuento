import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio', icon: 'fas fa-home' },
    { path: '/servicios', label: 'Servicios', icon: 'fas fa-concierge-bell' },
    { path: '/blog', label: 'Blog', icon: 'fas fa-blog' },
    { path: '/sobre-nosotros', label: 'Sobre Nosotros', icon: 'fas fa-users' },
    { path: '/mi-cuenta', label: 'Mi cuenta', icon: 'fas fa-user-circle' },
    { path: '/tienda', label: 'Tienda', icon: 'fas fa-store' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-content">
          {/* Logo móvil */}
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">
                <span className="med">MED</span>
                <span className="escuento">escuento</span>
              </span>
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Menu de navegación */}
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className={item.icon}></i>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón de contacto */}
          <div className="nav-cta">
            <Link to="/contacto" className="btn btn-primary contact-btn">
              <i className="fas fa-phone"></i>
              CONTACTO
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;