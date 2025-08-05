import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>¿Dónde Estámos?</h2>
            <p>Búscanos en la sección Contacto</p>
            <button className="btn btn-secondary contact-btn">Haz clic aquí</button>
          </div>
          
          <div className="contact-visual">
            <div className="contact-illustration">
              <div className="medical-icons">
                <div className="icon-circle">
                  <span>🏥</span>
                </div>
                <div className="icon-circle">
                  <span>👩‍⚕️</span>
                </div>
                <div className="icon-circle">
                  <span>💊</span>
                </div>
                <div className="icon-circle">
                  <span>🩺</span>
                </div>
              </div>
              <div className="pulse-animation"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;