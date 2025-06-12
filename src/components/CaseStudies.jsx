import React, { useState, useRef, useEffect } from 'react';
import { portfolioSections } from '../data/portfolio';
import './CaseStudies.css';

const CaseStudies = () => {
  const [scrollPositions, setScrollPositions] = useState({});
  const sliderRefs = useRef({});

  useEffect(() => {
    // Initialize scroll positions
    Object.keys(portfolioSections).forEach(section => {
      const sectionId = section.replace(/\s+/g, '-').toLowerCase();
      updateArrows(sectionId);
    });
  }, []);

  const updateArrows = (sliderId) => {
    const slider = sliderRefs.current[sliderId];
    if (!slider) return;

    const isAtStart = slider.scrollLeft <= 0;
    const isAtEnd = slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10;

    setScrollPositions(prev => ({
      ...prev,
      [sliderId]: { isAtStart, isAtEnd }
    }));
  };

  const scrollPortfolio = (sectionId, direction) => {
    const slider = sliderRefs.current[sectionId];
    if (!slider) return;

    const isMobile = window.innerWidth <= 768;
    const cardWidth = isMobile ? 344 : 424;
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
    
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleScroll = (sectionId) => {
    updateArrows(sectionId);
  };

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title">Portfolio Projects</h2>
        <div className="portfolio-container">
          {Object.entries(portfolioSections).map(([section, projects]) => {
            const sectionId = section.replace(/\s+/g, '-').toLowerCase();
            const { isAtStart = true, isAtEnd = false } = scrollPositions[sectionId] || {};

            return (
              <div key={section} className="portfolio-section">
                <h3>{section}</h3>
                <div className="portfolio-slider-container">
                  <button 
                    className={`slider-arrow prev ${isAtStart ? 'disabled' : ''}`}
                    onClick={() => scrollPortfolio(sectionId, 'prev')}
                    disabled={isAtStart}
                  >
                    ←
                  </button>
                  <div 
                    className="portfolio-slider" 
                    ref={el => sliderRefs.current[sectionId] = el}
                    onScroll={() => handleScroll(sectionId)}
                  >
                    {projects.map((project, index) => (
                      <div key={index} className="portfolio-card">
                        <div className="portfolio-impact">{project.impact}</div>
                        <div className="portfolio-challenge">
                          <strong>Challenge:</strong> {project.challenge}
                        </div>
                        <div className="portfolio-solution">
                          <h5>Solution & Stack</h5>
                          <p><strong>{project.solution}</strong></p>
                          <p className="portfolio-tools">{project.tools}</p>
                        </div>
                        <div className="portfolio-metrics">
                          {project.metrics.map((metric, metricIndex) => (
                            <span key={metricIndex} className="metric-tag">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className={`slider-arrow next ${isAtEnd ? 'disabled' : ''}`}
                    onClick={() => scrollPortfolio(sectionId, 'next')}
                    disabled={isAtEnd}
                  >
                    →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;