import React from 'react';
import './About.css'; // Solo si tienes un CSS para esta página

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">EN DESARROLLO...</h1>
          <div className="about-content">
            <div className="about-text">
              <p>
                MEDescuento es una plataforma innovadora que conecta a las personas 
                con servicios de salud de calidad a precios accesibles. Nuestro 
                compromiso es brindar un mundo de privilegios a su alcance.
              </p>
              <p>
                Trabajamos con amor, brindando servicios y beneficios que contribuyen 
                a la armonía y equilibrio del ser humano, cumpliendo nuestra promesa 
                de valor: aportar a un mundo más saludable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
