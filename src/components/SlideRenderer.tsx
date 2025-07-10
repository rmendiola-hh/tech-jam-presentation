import React from 'react';
import type { Slide } from '../types/slides';
import { TitleSlide } from './TitleSlide';
import { BulletsSlide } from './BulletsSlide';
import { CodeSlide } from './CodeSlide';
import CustomSlide from './CustomSlide';

interface SlideRendererProps {
  slide: Slide;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide }) => {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'bullets':
      return <BulletsSlide slide={slide} />;
    case 'code':
      return <CodeSlide slide={slide} />;
    case 'custom':
      return <CustomSlide slide={slide} />;
    default:
      return <div>Unknown slide type</div>;
  }
};