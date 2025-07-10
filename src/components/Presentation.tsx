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
  const [slideWidths, setSlideWidths] = useState<number[]>([]);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
  }, [slides.length]);

  // Measure slide widths
  const measureSlides = useCallback(() => {
    const widths = slideRefs.current.map((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const width = rect.width + 20; // Include margin-right
        console.log(`Slide ${index} width:`, width);
        return width;
      }
      return 0;
    });
    console.log('All slide widths:', widths);
    setSlideWidths(widths);
  }, []);

  // Measure on mount and resize
  useEffect(() => {
    measureSlides();
    window.addEventListener('resize', measureSlides);
    return () => window.removeEventListener('resize', measureSlides);
  }, [measureSlides]);

  // Measure after slides render
  useEffect(() => {
    if (slides.length > 0) {
      // Small delay to ensure DOM is updated
      const timer = setTimeout(measureSlides, 50);
      return () => clearTimeout(timer);
    }
  }, [slides, measureSlides]);

  // Calculate translate based on actual slide widths
  const calculateTranslateX = useCallback(() => {
    if (slideWidths.length === 0) return 0;
    
    let totalWidth = 0;
    for (let i = 0; i < currentSlideIndex; i++) {
      totalWidth += slideWidths[i] || 0;
    }
    return -totalWidth;
  }, [currentSlideIndex, slideWidths]);

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
              ref={el => slideRefs.current[index] = el}
            >
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