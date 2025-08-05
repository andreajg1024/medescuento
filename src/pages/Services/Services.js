import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">EN DESARROLLO...</h1>
          <div className="services-content">
            <div className="service-item">
              <h3>Servicios de Impacto</h3>
              <p>Servicios especializados que contribuyen al bienestar integral.</p>
            </div>
            <div className="service-item">
              <h3>Citas Médicas</h3>
              <p>Agendamiento personalizado para consultas médicas.</p>
            </div>
            <div className="service-item">
              <h3>Terapias</h3>
              <p>Servicios terapéuticos para ansiedad, depresión, estrés y más.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
