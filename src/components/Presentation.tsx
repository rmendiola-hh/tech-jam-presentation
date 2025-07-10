import React, { useState, useEffect, useCallback } from 'react';
import type { Slide } from '../types/slides';
import { SlideRenderer } from './SlideRenderer';
import './Presentation.css';

interface PresentationProps {
  slides: Slide[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }, [currentSlideIndex]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
      case ' ':
        event.preventDefault();
        goToNextSlide();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevSlide();
        break;
      case 'f':
      case 'F':
        event.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
        break;
    }
  }, [goToNextSlide, goToPrevSlide, toggleFullscreen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [handleKeyDown]);

  if (slides.length === 0) {
    return <div className="no-slides">No slides available</div>;
  }

  const slideWidth = 100 - 8; // Each slide takes 92% width (100% - 8% for peek)
  const translateX = -currentSlideIndex * slideWidth;

  return (
    <div className={`presentation ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="slide-container">
        <div 
          className="slides-track"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="slide-wrapper">
              <div className="slide">
                <SlideRenderer slide={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="presentation-controls">
        <div className="slide-counter">
          {currentSlideIndex + 1} / {slides.length}
        </div>
        <div className="control-buttons">
          <button 
            onClick={goToPrevSlide} 
            disabled={currentSlideIndex === 0}
            className="control-button"
          >
            ←
          </button>
          <button 
            onClick={goToNextSlide} 
            disabled={currentSlideIndex === slides.length - 1}
            className="control-button"
          >
            →
          </button>
          <button 
            onClick={toggleFullscreen}
            className="control-button"
          >
            {isFullscreen ? '⛶' : '⛶'}
          </button>
        </div>
      </div>
    </div>
  );
};