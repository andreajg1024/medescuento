import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-container">
                <div className="globe-footer">
                  <div className="heartbeat-line-footer"></div>
                  <div className="heart-icon-footer">❤️</div>
                </div>
                <div className="logo-text-footer">
                  <span className="med-footer">MED</span>
                  <span className="escuento-footer">escuento</span>
                </div>
              </div>
            </div>
            <p className="footer-description">
              Un mundo de privilegios a su alcance. Brindamos servicios de salud 
              con descuentos especiales para tu empresa y tu familia.
            </p>
            <div className="social-links-footer">
              <a href="#" className="social-link-footer facebook">📘</a>
              <a href="#" className="social-link-footer whatsapp">📱</a>
              <a href="#" className="social-link-footer instagram">📷</a>
              <a href="#" className="social-link-footer twitter">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Servicios</h3>
            <ul className="footer-links">
              <li><Link to="/services">Servicios de Impacto</Link></li>
              <li><Link to="/services">Citas Médicas</Link></li>
              <li><Link to="/services">Terapias</Link></li>
              <li><Link to="/services">Promociones</Link></li>
              <li><Link to="/services">Clientes Satisfechos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Empresa</h3>
            <ul className="footer-links">
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/account">Mi Cuenta</Link></li>
              <li><Link to="/store">Tienda</Link></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Armenia, Quindío, Colombia</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+57 300 123 4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>info@medescuento.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 MEDescuento. Todos los derechos reservados.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Política de Privacidad</a>
              <a href="#terms">Términos y Condiciones</a>
              <a href="#cookies">Política de Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;