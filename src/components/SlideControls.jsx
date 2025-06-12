import React from 'react';
import './SlideControls.css';

const SlideControls = ({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onToggleFullscreen,
  isFullscreen,
  hasNext,
  hasPrevious
}) => {
  return (
    <div className="slide-controls">
      <button
        className="control-btn prev-btn"
        onClick={onPrevious}
        disabled={!hasPrevious}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="slide-info">
        <span className="slide-counter">
          {currentIndex + 1} / {totalSlides}
        </span>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      <button
        className="control-btn next-btn"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <button
        className="control-btn fullscreen-btn"
        onClick={onToggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
      >
        {isFullscreen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m7-1V4m0 0h-4m4 0l-5 5m-7 7v-4m0 4h4m-4 0l5-5m7 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m7-5h-4m4 0v4m0-4l-5 5m-7 7h4m-4 0v-4m0 4l5-5m7 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SlideControls;