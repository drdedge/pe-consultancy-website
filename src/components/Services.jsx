import React from 'react';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">How We Help</h2>
        <p className="services-intro">
          Flexible engagement models: embedded in your environment, building self-hosted solutions you own, 
          bridging IT, analytics, and business teams to ensure compliance and lasting value.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <span className="service-icon">{service.icon}</span>
                <h3>{service.title}</h3>
              </div>
              <ul>
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;