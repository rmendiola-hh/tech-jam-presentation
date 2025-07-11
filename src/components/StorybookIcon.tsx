import React from 'react';
import storybookLogo from '../assets/logo-storybook-inverse.svg';

interface StorybookIconProps {
  height?: number;
}

export const StorybookIcon: React.FC<StorybookIconProps> = ({ 
  height = 24
}) => {
  return (
    <img 
      src={storybookLogo} 
      alt="Storybook"
      height={height}
      style={{
        objectFit: 'contain'
      }}
    />
  );
};

export default StorybookIcon;