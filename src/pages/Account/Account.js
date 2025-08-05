import React from 'react';
import './Account.css';

const Account = () => {
  return (
    <div className="page">
      <div className="container">
        <section className="section">
          <h1 className="section-title">EN DESARROLLO...</h1>
          <div className="account-content">
            <p>Gestiona tu cuenta y accede a todos nuestros servicios.</p>
            <div className="account-options">
              <button className="btn btn-primary">Iniciar Sesión</button>
              <button className="btn btn-secondary">Registrarse</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
