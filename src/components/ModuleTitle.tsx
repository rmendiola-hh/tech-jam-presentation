import React from 'react';
import MaterialIcon from './MaterialIcon';
import './ModuleTitle.css';

interface ModuleTitleProps {
  icon: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  description?: string;
}

export const ModuleTitle: React.FC<ModuleTitleProps> = ({ icon, iconColor, title, subtitle, description }) => {
  return (
    <div className="module-title">
      <div className="module-icon">
        <MaterialIcon name={icon} size="medium" color={iconColor} />
      </div>
      <div className="module-content">
        <div className="module-title-text">{title}</div>
        <div className="module-subtitle">{subtitle}</div>
        {description && <div className="module-description">{description}</div>}
      </div>
    </div>
  );
};

export default ModuleTitle;