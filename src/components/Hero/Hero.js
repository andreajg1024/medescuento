import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="logo-hero">
                <img 
                  src="./logomedescuentos.png" 
                  alt="MEDescuento Logo" 
                  className="logo-image-hero"
                  onError={(e) => {
                    // Si falla, intentar con diferentes rutas
                    if (e.target.src.includes('./logomedescuentos.png')) {
                      e.target.src = '/logomedescuentos.png';
                    } else if (e.target.src.includes('/logomedescuentos.png')) {
                      e.target.src = './assets/logomedescuentos.png';
                    } else if (e.target.src.includes('./assets/logomedescuentos.png')) {
                      e.target.src = './images/logomedescuentos.png';
                    } else {
                      // Si nada funciona, mostrar texto de respaldo
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="logo-text-hero-fallback"><span class="med-hero">MED</span><span class="escuento-hero">escuento</span></div>';
                    }
                  }}
                />
              </div>
              
              
              <div className="hero-buttons">
                <button className="btn btn-primary hero-btn">CONTACTO</button>
              </div>
              
              <div className="hero-cards">
                <div className="hero-card green">
                  <h3>Promoción</h3>
                  <p>Conoce</p>
                </div>
                
                <div className="hero-card green">
                  <h3>Clientes Satisfechos</h3>
                </div>
                
                <div className="hero-card purple">
                  <div className="star-icon">⭐</div>
                  <h3>Terapeuta</h3>
                  <p>Ansiedad, depresión, estrés, insomnio y duelo.</p>
                </div>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="location-card">
                <h3>¿Dónde Estámos?</h3>
                <p>Búscanos en la sección Contacto</p>
                <button className="btn btn-secondary">Haz clic aquí</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;