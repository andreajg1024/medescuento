import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon, color }) => {
  return (
    <div className={`service-card ${color}`}>
      <div className="service-icon">
        <span>{icon}</span>
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
      <div className="service-hover-effect"></div>
    </div>
  );
};

export default ServiceCard;