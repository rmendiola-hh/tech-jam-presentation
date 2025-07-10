import React from 'react';
import { TitleSlide as TitleSlideType } from '../types/slides';

interface TitleSlideProps {
  slide: TitleSlideType;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ slide }) => {
  return (
    <div className="slide-content title-slide">
      <h1 className="slide-title">{slide.title}</h1>
      {slide.subtitle && <p className="slide-subtitle">{slide.subtitle}</p>}
    </div>
  );
};