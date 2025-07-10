import React from 'react';
import type { BulletsSlide as BulletsSlideType } from '../types/slides';

interface BulletsSlideProps {
  slide: BulletsSlideType;
}

export const BulletsSlide: React.FC<BulletsSlideProps> = ({ slide }) => {
  const renderBullet = (bullet: string, index: number) => {
    // Check if bullet contains " - " separator for subtext
    const dashIndex = bullet.indexOf(' - ');
    if (dashIndex > 0) {
      const mainText = bullet.substring(0, dashIndex);
      const subText = bullet.substring(dashIndex + 3);
      return (
        <li key={index} className="slide-bullet">
          <span className="bullet-main">{mainText}</span>
          <span className="bullet-sub">{subText}</span>
        </li>
      );
    }
    
    return (
      <li key={index} className="slide-bullet">{bullet}</li>
    );
  };

  return (
    <div className="slide-content bullets-slide">
      <h2 className="slide-title">{slide.title}</h2>
      <ul className="slide-bullets">
        {slide.bullets.map(renderBullet)}
      </ul>
    </div>
  );
};