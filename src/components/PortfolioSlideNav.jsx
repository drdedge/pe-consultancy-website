import React, { useState } from 'react';
import './PortfolioSlideNav.css';

const PortfolioSlideNav = ({ categories, currentCaseId, onCaseSelect, isOpen, onToggle }) => {
  const [expandedCategories, setExpandedCategories] = useState(
    categories.map(cat => cat.id) // All expanded by default
  );

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <>
      <button 
        className="menu-toggle"
        onClick={onToggle}
        aria-label="Toggle navigation menu"
      >
        <span className="menu-icon">
          {isOpen ? '×' : '☰'}
        </span>
      </button>

      <nav className={`portfolio-nav ${isOpen ? 'open' : 'closed'}`}>
        <div className="nav-header">
          <h2>Case Studies</h2>
          <p className="nav-subtitle">Click to navigate</p>
        </div>

        <div className="nav-categories">
          {categories.map(category => (
            <div key={category.id} className="nav-category">
              <button
                className="category-toggle"
                onClick={() => toggleCategory(category.id)}
                aria-expanded={expandedCategories.includes(category.id)}
              >
                <span className="category-title">{category.title}</span>
                <span className="category-count">({category.cases.length})</span>
                <span className="toggle-icon">
                  {expandedCategories.includes(category.id) ? '−' : '+'}
                </span>
              </button>

              {expandedCategories.includes(category.id) && (
                <ul className="case-list">
                  {category.cases.map(caseStudy => (
                    <li key={caseStudy.id}>
                      <button
                        className={`case-link ${currentCaseId === caseStudy.id ? 'active' : ''}`}
                        onClick={() => onCaseSelect(caseStudy.id)}
                      >
                        <span className="case-headline">{caseStudy.headline}</span>
                        <span className="case-client">{caseStudy.client}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="nav-footer">
          <p className="case-count">
            {categories.reduce((sum, cat) => sum + cat.cases.length, 0)} Total Cases
          </p>
        </div>
      </nav>
    </>
  );
};

export default PortfolioSlideNav;