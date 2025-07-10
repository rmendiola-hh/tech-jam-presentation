import React from 'react';
import type { BulletsSlide as BulletsSlideType } from '../types/slides';

interface BulletsSlideProps {
  slide: BulletsSlideType;
}

export const BulletsSlide: React.FC<BulletsSlideProps> = ({ slide }) => {
  return (
    <div className="slide-content bullets-slide">
      <h2 className="slide-title">{slide.title}</h2>
      <ul className="slide-bullets">
        {slide.bullets.map((bullet, index) => (
          <li key={index} className="slide-bullet">{bullet}</li>
        ))}
      </ul>
    </div>
  );
};