import React from 'react';
import ModuleTitle from './ModuleTitle';
import ModuleContainer from './ModuleContainer';
import './Module.css';

interface BulletPoint {
  text: string;
  icon?: string;
  iconColor?: string;
}

interface ModuleProps {
  icon: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  description?: string;
  bulletPoints?: (string | BulletPoint)[];
  path: string;
  className?: string;
  children: React.ReactNode;
}

export const Module: React.FC<ModuleProps> = ({ 
  icon, 
  iconColor,
  title, 
  subtitle, 
  description,
  bulletPoints,
  path,
  className = '', 
  children 
}) => {
  return (
    <div className={`module ${className}`}>
      <div className="module-path">{path}</div>
      <ModuleTitle 
        icon={icon}
        iconColor={iconColor}
        title={title}
        subtitle={subtitle}
        description={description}
        bulletPoints={bulletPoints}
      />
      <ModuleContainer className={className}>
        {children}
      </ModuleContainer>
    </div>
  );
};

export default Module;