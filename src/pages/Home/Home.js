import React from 'react';
import Hero from '../../components/Hero/Hero.js';
import ServiceCard from '../../components/ServiceCard/ServiceCard.js';
import ContactSection from '../../components/ContactSection/ContactSection.js';
import './Home.css';

const Home = () => {
  const services = [
    {
      title: "Servicios de Impacto",
      description: "Trabajamos con amor brindando servicios y beneficios que contribuyen a la armonía, equilibrio del ser humano y a nuestra promesa de valor (aportando a un mundo saludable).",
      icon: "✏️",
      color: "teal"
    },
    {
      title: "Servicios",
      description: "Te brindamos atención personalizada para el agendamiento de citas, procedimientos y servicios de salud en general.",
      icon: "🖥️",
      color: "teal"
    },
    {
      title: "Contacto",
      description: "Contáctanos y encuentra con nosotros en descuentos especiales en todo lo relacionado con salud y bienestar para tu empresa y tu familia.",
      icon: "✈️",
      color: "purple"
    }
  ];

  const additionalServices = [
    {
      title: "Blogs",
      description: "Mira todo lo nuevo y las proyecciones que tiene MEDescuento.",
      icon: "💡",
      color: "light"
    },
    {
      title: "Tienda",
      description: "Podrás comprar todos nuestros servicios, suscripciones, productos y afiliaciones.",
      icon: "🛒",
      color: "light"
    },
    {
      title: "Ayuda y Soporte",
      description: "Busca ayuda o contacta con servicio al cliente para tus inquietudes y más información.",
      icon: "👤",
      color: "light"
    }
  ];

  return (
    <div className="home">
      <Hero />
      
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">¿En Qué Podemos Ayudarte?</h2>
          <p className="section-subtitle">
            Esta lista tendrá diferentes servicios o entradas importantes de la web
          </p>
          
          <div className="search-section">
            <h3>Haz una búsqueda</h3>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="main-search"
              />
              <button className="search-button">🔍</button>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>

          <div className="additional-services">
            {additionalServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>

          <div className="blog-section">
            <div className="blog-header">
              <h2>Nuestro Blog</h2>
              <p>Mira todo lo nuevo y las proyecciones que tiene MEDescuento</p>
            </div>
            
            <div className="blog-posts">
              <div className="blog-post">
                <img src="/api/placeholder/300/200" alt="Yoga session" />
                <div className="blog-overlay">
                  <span className="blog-tag">WELLNESS</span>
                </div>
              </div>
              
              <div className="blog-post">
                <img src="/api/placeholder/300/200" alt="Medical consultation" />
                <div className="blog-overlay">
                  <h3>¿Largas esperas? – Jueves de Tips</h3>
                  <span className="blog-tag">JUEVES DE TIPS</span>
                </div>
              </div>
              
              <div className="blog-post">
                <img src="/api/placeholder/300/200" alt="Pediatric endocrinology" />
                <div className="blog-overlay">
                  <h3>SABÍAS QUE... CONTAMOS CON NUEVO SERVICIO DE ENDOCRINÓLOGO PEDIATRA</h3>
                  <span className="blog-tag">JUEVES DE TIPS</span>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary blog-more-btn">VER MÁS</button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Home;