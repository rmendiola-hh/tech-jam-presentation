import React from 'react';
import MaterialIcon from './MaterialIcon';
import './ModuleTitle.css';

interface BulletPoint {
  text: string;
  icon?: string;
  iconColor?: string;
}

interface ModuleTitleProps {
  icon: string;
  iconColor?: string;
  title: string;
  subtitle: string;
  description?: string;
  bulletPoints?: (string | BulletPoint)[];
}

export const ModuleTitle: React.FC<ModuleTitleProps> = ({ icon, iconColor, title, subtitle, description, bulletPoints }) => {
  return (
    <div className="module-title">
      <div className="module-header">
        <div className="module-icon">
          <MaterialIcon name={icon} size="medium" color={iconColor} />
        </div>
        <div className="module-content">
          <div className="module-title-text">{title}</div>
          <div className="module-subtitle">{subtitle}</div>
        </div>
      </div>
      {description && <div className="module-description">{description}</div>}
      {bulletPoints && bulletPoints.length > 0 && (
        <div className="module-bullet-points">
          {bulletPoints.map((point, index) => {
            const bulletPoint = typeof point === 'string' ? { text: point } : point;
            const iconName = bulletPoint.icon || 'check_circle';
            const iconColor = bulletPoint.iconColor || 'var(--color-highlight-green)';
            
            return (
              <div key={index} className="module-bullet-point">
                <MaterialIcon name={iconName} color={iconColor} size="small" />
                <span className="bullet-text">{bulletPoint.text}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ModuleTitle;