import React from 'react';
import './ModuleContainer.css';

interface ModuleContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ModuleContainer: React.FC<ModuleContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`module-container ${className}`}>
      {children}
    </div>
  );
};

export default ModuleContainer;