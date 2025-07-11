import React from 'react';
import type { CustomSlide as CustomSlideType } from '../types/slides';

interface CustomSlideProps {
  slide: CustomSlideType;
}

const CustomSlide: React.FC<CustomSlideProps> = ({ slide }) => {
  const Component = slide.component;
  
  return (
    <div className="slide-content custom-slide">
      <h2 className="slide-title">{slide.title}</h2>
      <div className="custom-component-container">
        <Component />
      </div>
    </div>
  );
};

export default CustomSlide;