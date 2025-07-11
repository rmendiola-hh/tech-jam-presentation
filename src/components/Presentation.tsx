import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { Slide } from '../types/slides';
import { SlideRenderer } from './SlideRenderer';
import './Presentation.css';

interface PresentationProps {
  slides: Slide[];
}

export const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const firstSlideRef = useRef<HTMLDivElement | null>(null);

  // Get slide index from URL hash
  const getSlideIndexFromHash = useCallback(() => {
    const hash = window.location.hash.slice(1); // Remove # prefix
    const slideNumber = parseInt(hash, 10);
    if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= slides.length) {
      return slideNumber - 1; // Convert to 0-based index
    }
    return 0;
  }, [slides.length]);

  // Update URL hash when slide changes
  const updateUrlHash = useCallback((slideIndex: number) => {
    const slideNumber = slideIndex + 1; // Convert to 1-based
    const newHash = `#${slideNumber}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }, []);

  // Measure single slide width (all slides are same width)
  const measureSlideWidth = useCallback(() => {
    if (firstSlideRef.current) {
      const rect = firstSlideRef.current.getBoundingClientRect();
      const width = rect.width + 20; // Include margin-right
      console.log('Measured slide width:', width);
      setSlideWidth(width);
    }
  }, []);

  // Initialize slide index from URL hash on mount
  useEffect(() => {
    const initialSlideIndex = getSlideIndexFromHash();
    setCurrentSlideIndex(initialSlideIndex);
  }, [getSlideIndexFromHash]);

  // Update URL hash when slide changes
  useEffect(() => {
    updateUrlHash(currentSlideIndex);
  }, [currentSlideIndex, updateUrlHash]);

  // Measure on mount, resize, and fullscreen changes
  useEffect(() => {
    measureSlideWidth();
    window.addEventListener('resize', measureSlideWidth);
    return () => window.removeEventListener('resize', measureSlideWidth);
  }, [measureSlideWidth]);

  // Remeasure when fullscreen changes
  useEffect(() => {
    const timer = setTimeout(measureSlideWidth, 100); // Small delay for fullscreen transition
    return () => clearTimeout(timer);
  }, [isFullscreen, measureSlideWidth]);

  // Measure after slides render
  useEffect(() => {
    if (slides.length > 0) {
      const timer = setTimeout(measureSlideWidth, 50);
      return () => clearTimeout(timer);
    }
  }, [slides, measureSlideWidth]);

  // Calculate translate based on slide width
  const calculateTranslateX = useCallback(() => {
    return -currentSlideIndex * slideWidth;
  }, [currentSlideIndex, slideWidth]);

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
    
    const handleHashChange = () => {
      const newSlideIndex = getSlideIndexFromHash();
      setCurrentSlideIndex(newSlideIndex);
    };
    
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleKeyDown, getSlideIndexFromHash]);

  if (slides.length === 0) {
    return <div className="no-slides">No slides available</div>;
  }

  const translateX = calculateTranslateX();

  return (
    <div className={`presentation ${isFullscreen ? 'fullscreen' : ''}`}>
      <div className="slide-container">
        <div 
          className="slides-track"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className="slide-wrapper"
              ref={index === 0 ? firstSlideRef : null}
            >
              <div className="slide">
                <SlideRenderer slide={slide} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <footer className="presentation-footer">
        <div className="footer-title">
          Simplified Home Tech Jam July 2025
        </div>
        <div className="footer-center">
          <div className="slide-counter">
            {currentSlideIndex + 1} / {slides.length}
          </div>
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ 
                width: `${((currentSlideIndex + 1) / slides.length) * 100}%` 
              }}
            />
          </div>
        </div>
        <div className="footer-controls">
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
      </footer>
    </div>
  );
};