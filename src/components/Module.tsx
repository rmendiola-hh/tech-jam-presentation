import React from 'react';
import ModuleTitle from './ModuleTitle';
import ModuleContainer from './ModuleContainer';
import './Module.css';

interface ModuleProps {
  icon: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export const Module: React.FC<ModuleProps> = ({ 
  icon, 
  iconColor,
  title, 
  subtitle, 
  description,
  className = '', 
  children 
}) => {
  return (
    <div className="module">
      <ModuleTitle 
        icon={icon}
        iconColor={iconColor}
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <ModuleContainer className={className}>
        {children}
      </ModuleContainer>
    </div>
  );
};

export default Module;