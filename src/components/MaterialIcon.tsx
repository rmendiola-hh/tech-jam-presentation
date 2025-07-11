import React from 'react';
import './MaterialIcon.css';

interface MaterialIconProps {
  name: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({ 
  name, 
  size = 'medium', 
  color,
  className = '' 
}) => {
  return (
    <span 
      className={`material-icon material-icon--${size} ${className}`}
      style={{ color }}
    >
      {name}
    </span>
  );
};

export default MaterialIcon;