import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioCategories } from '../data/portfolio';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title">Proven Results for PE Operating Partners</h2>
        <p className="case-studies-intro">
          Rapid value identification and business case development, typically delivered in 4-16 weeks
        </p>
        
        {portfolioCategories.map(category => (
          <div key={category.id} className="category-section">
            <h3 className="category-title">{category.title}</h3>
            <p className="category-description">{category.description}</p>
            
            <div className="cases-grid">
              {category.cases.map(caseStudy => (
                <Link 
                  to={`/portfolio/${caseStudy.id}`} 
                  key={caseStudy.id} 
                  className="case-card"
                >
                  {/* Placeholder for image - will show when images are added */}
                  <div className="case-image">
                    {caseStudy.image && (
                      <img src={caseStudy.image} alt={caseStudy.headline} />
                    )}
                    {!caseStudy.image && (
                      <div className="image-placeholder">
                        <span>{caseStudy.client}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="case-content">
                    <h4 className="case-headline">{caseStudy.headline}</h4>
                    
                    <p className="case-challenge">{caseStudy.challenge}</p>
                    
                    <div className="case-meta">
                      <div className="tech-tags">
                        {caseStudy.techStack.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      
                      <div className="timeframe">
                        <span className="timeframe-label">Delivered in</span>
                        <span className="timeframe-value">{caseStudy.timeframe}</span>
                      </div>
                    </div>
                    
                    <div className="case-metrics">
                      {caseStudy.metrics.map((metric, index) => (
                        <div key={index} className="metric-box">
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
        
        <div className="case-studies-cta">
          <p>Ready to accelerate value creation in your portfolio?</p>
          <Link to="/portfolio" className="btn btn-primary">View All Case Studies</Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;