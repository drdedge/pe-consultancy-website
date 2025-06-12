import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { portfolioCategories, getAllCases, getCaseById } from '../data/portfolio';
import PortfolioSlideNav from '../components/PortfolioSlideNav';
import CaseStudySlide from '../components/CaseStudySlide';
import SlideControls from '../components/SlideControls';
import './Portfolio.css';

const Portfolio = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const allCases = getAllCases();
  
  // Find current case or default to first
  const currentCaseIndex = caseId 
    ? allCases.findIndex(c => c.id === caseId)
    : 0;
  
  const [activeIndex, setActiveIndex] = useState(
    currentCaseIndex >= 0 ? currentCaseIndex : 0
  );
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const currentCase = allCases[activeIndex];

  // Update URL when case changes
  useEffect(() => {
    if (currentCase && currentCase.id !== caseId) {
      navigate(`/portfolio/${currentCase.id}`, { replace: true });
    }
  }, [currentCase, caseId, navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'Escape' && isFullscreen) {
        exitFullscreen();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'm' || e.key === 'M') {
        setIsMenuOpen(!isMenuOpen);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeIndex, isFullscreen, isMenuOpen]);

  const handleNext = () => {
    if (activeIndex < allCases.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleCaseSelect = (caseId) => {
    const index = allCases.findIndex(c => c.id === caseId);
    if (index >= 0) {
      setActiveIndex(index);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Touch/swipe handling for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50) {
        handleNext(); // Swipe left
      }
      if (touchEndX > touchStartX + 50) {
        handlePrevious(); // Swipe right
      }
    };

    const slideElement = document.querySelector('.portfolio-container');
    if (slideElement) {
      slideElement.addEventListener('touchstart', handleTouchStart);
      slideElement.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (slideElement) {
        slideElement.removeEventListener('touchstart', handleTouchStart);
        slideElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [activeIndex]);

  if (!currentCase) {
    return <div className="portfolio-error">Case study not found</div>;
  }

  return (
    <div className={`portfolio-container ${isFullscreen ? 'fullscreen' : ''}`}>
      <PortfolioSlideNav
        categories={portfolioCategories}
        currentCaseId={currentCase.id}
        onCaseSelect={handleCaseSelect}
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen(!isMenuOpen)}
      />
      
      <div className={`portfolio-content ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
        <CaseStudySlide caseStudy={currentCase} />
        
        <SlideControls
          currentIndex={activeIndex}
          totalSlides={allCases.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onToggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
          hasNext={activeIndex < allCases.length - 1}
          hasPrevious={activeIndex > 0}
        />
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="keyboard-hints">
        <span>← → Navigate</span>
        <span>M Menu</span>
        <span>F Fullscreen</span>
      </div>
    </div>
  );
};

export default Portfolio;