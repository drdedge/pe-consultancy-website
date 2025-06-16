import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CaseCarousel.css';

const CaseCarousel = ({ cases }) => {
  const [index, setIndex] = useState(0);
  const lastIndex = cases.length - 1;

  const prev = () => setIndex(i => Math.max(i - 1, 0));
  const next = () => setIndex(i => Math.min(i + 1, lastIndex));

  return (
    <div className="case-carousel">
      <button className="carousel-btn prev" onClick={prev} disabled={index === 0} aria-label="Previous">
        ‹
      </button>
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {cases.map(caseStudy => (
          <Link
            to={`/portfolio/${caseStudy.id}`}
            key={caseStudy.id}
            className="case-card"
          >
            <div className="case-image">
              {caseStudy.image ? (
                <img src={caseStudy.image} alt={caseStudy.headline} />
              ) : (
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
                  {caseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="timeframe">
                  <span className="timeframe-label">Delivered in</span>
                  <span className="timeframe-value">{caseStudy.timeframe}</span>
                </div>
              </div>
              <div className="case-metrics">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-box">{metric}</div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-btn next" onClick={next} disabled={index === lastIndex} aria-label="Next">
        ›
      </button>
      <div className="carousel-dots">
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`dot${i === index ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseCarousel;
