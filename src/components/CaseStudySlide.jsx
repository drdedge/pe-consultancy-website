import React from 'react';
import './CaseStudySlide.css';

const CaseStudySlide = ({ caseStudy }) => {
  const { details } = caseStudy;
  
  // Different slide layouts based on content
  const renderSlideContent = () => {
    // If no detailed content, show summary slide
    if (!details) {
      return renderSummarySlide();
    }

    // For detailed cases, show full content slide
    return renderDetailedSlide();
  };

  const renderSummarySlide = () => (
    <div className="slide-layout slide-summary">
      <div className="slide-header">
        <span className="category-badge">{caseStudy.categoryTitle}</span>
        <h1 className="slide-headline">{caseStudy.headline}</h1>
        <p className="slide-client">{caseStudy.client}</p>
      </div>

      <div className="slide-body">
        <div className="challenge-section">
          <h3>Challenge</h3>
          <p>{caseStudy.challenge}</p>
        </div>

        <div className="metrics-grid">
          {caseStudy.metrics.map((metric, index) => (
            <div key={index} className="metric-card">
              <div className="metric-value">{metric}</div>
            </div>
          ))}
        </div>

        <div className="slide-footer">
          <div className="tech-stack">
            <span className="tech-label">Technologies:</span>
            {caseStudy.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <div className="timeframe">
            <span className="timeframe-label">Delivered in</span>
            <span className="timeframe-value">{caseStudy.timeframe}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDetailedSlide = () => (
    <div className="slide-layout slide-detailed">
      <div className="slide-header">
        <span className="category-badge">{caseStudy.categoryTitle}</span>
        <h1 className="slide-headline">{caseStudy.headline}</h1>
        <p className="slide-client">{caseStudy.client}</p>
      </div>

      <div className="slide-body">
        <div className="executive-summary">
          <h3>Executive Summary</h3>
          <p>{details.executiveSummary}</p>
        </div>

        <div className="content-grid">
          <div className="context-section">
            <h3>Context</h3>
            <div className="context-item">
              <h4>Situation</h4>
              <p>{details.context.situation}</p>
            </div>
            <div className="context-item">
              <h4>Business Impact</h4>
              <p>{details.context.businessImpact}</p>
            </div>
          </div>

          <div className="approach-section">
            <h3>Approach</h3>
            <p className="methodology">{details.approach.methodology}</p>
            <div className="phases">
              {details.approach.phases.map((phase, index) => (
                <div key={index} className="phase-item">
                  <span className="phase-name">{phase.phase}</span>
                  <span className="phase-duration">{phase.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="results-section">
          <h3>Results</h3>
          <div className="results-grid">
            <div className="quantitative-results">
              <h4>Quantitative</h4>
              <ul>
                {details.results.quantitative.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
            <div className="qualitative-results">
              <h4>Qualitative</h4>
              <ul>
                {details.results.qualitative.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {details.results.testimonial && (
          <div className="testimonial">
            <blockquote>
              <p>"{details.results.testimonial.quote}"</p>
              <footer>
                <cite>{details.results.testimonial.author}</cite>
                <span>{details.results.testimonial.company}</span>
              </footer>
            </blockquote>
          </div>
        )}

        <div className="slide-footer">
          <div className="tech-stack">
            <span className="tech-label">Technologies:</span>
            {caseStudy.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
          <div className="timeframe">
            <span className="timeframe-label">Delivered in</span>
            <span className="timeframe-value">{caseStudy.timeframe}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="case-study-slide">
      {renderSlideContent()}
    </div>
  );
};

export default CaseStudySlide;