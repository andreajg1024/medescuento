import React from 'react';
import './Store.css';

const Store = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">EN DESARROLLO...</h1>
          <div className="store-content">
            <p>
              Podrás comprar todos nuestros servicios, suscripciones, 
              productos y afiliaciones.
            </p>
            <div className="store-categories">
              <div className="category-card">
                <h3>Servicios</h3>
                <p>Servicios médicos y terapéuticos</p>
              </div>
              <div className="category-card">
                <h3>Suscripciones</h3>
                <p>Planes mensuales y anuales</p>
              </div>
              <div className="category-card">
                <h3>Productos</h3>
                <p>Productos para la salud</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;
