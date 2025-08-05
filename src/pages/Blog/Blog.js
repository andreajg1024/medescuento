import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">EN DESARROLLO...</h1>
          <div className="blog-content">
            <p>Mira todo lo nuevo y las proyecciones que tiene MEDescuento.</p>
            <div className="blog-grid">
              <article className="blog-card">
                <h3>Jueves de Tips</h3>
                <p>Consejos útiles para tu bienestar y salud.</p>
              </article>
              <article className="blog-card">
                <h3>Novedades Médicas</h3>
                <p>Las últimas tendencias en servicios de salud.</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
