import React from 'react';
import './ThreeStageArchitectureDiagram.css';

const ThreeStageArchitectureDiagram: React.FC = () => {
  return (
    <div className="three-stage-diagram">
      {/* Legacy Home Section */}
      <div className="section">
        <div className="section-title">Legacy Home</div>
        <div className="legacy-box">
          <div className="component-icon">⚠️</div>
          <div className="legacy-content">
            <div className="legacy-component-name">Complex Component (does everything)</div>
            <div className="legacy-list">
              <div>• Data loading, business logic and presentation convoluted in React component code and nested hooks</div>
              <div>• Side effects and state management</div>
              <div>• Conditional rendering logic</div>
              <div>• No separation of concerns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition Arrow */}
      <div className="transition-arrow">
        <div className="arrow-down-line"></div>
        <div className="arrow-down-head">▼</div>
      </div>

      {/* Simplified Home Section */}
      <div className="section">
        <div className="section-title">Simplified Home</div>
        <div className="stages-row">
      {/* Stage 1: Pre-loading Data */}
      <div className="stage stage-1">
        <div className="stage-header">
          <span className="stage-number">1</span>
          <span className="stage-title">Preload data in the switchboard</span>
        </div>
        <div className="stage-content">
          <div className="component-box switchboard">
            <div className="component-icon">📥</div>
            <div className="component-name">Switchboard</div>
            <div className="component-desc">we're already showing a loading screen here</div>
          </div>
          <div className="stage-description">
            Preloaders fetch all necessary data before the home screen renders, eliminating loading states and ensuring instant UI
          </div>
        </div>
      </div>

      {/* Arrow 1 */}
      <div className="arrow">
        <div className="arrow-line"></div>
        <div className="arrow-head">▶</div>
      </div>

      {/* Stage 2: Creating Object Representation */}
      <div className="stage stage-2">
        <div className="stage-header">
          <span className="stage-number">2</span>
          <span className="stage-title">Creating Object Representation</span>
        </div>
        <div className="stage-content">
          <div className="component-box business-logic">
            <div className="component-icon">🏗️</div>
            <div className="component-name">Pure JavaScript Functions</div>
            <div className="component-desc">Business logic creates data model</div>
          </div>
          <div className="stage-description">
            Simple to build business logic in plain JavaScript - no React complexity, just pure functions that transform data
          </div>
        </div>
      </div>

      {/* Arrow 2 */}
      <div className="arrow">
        <div className="arrow-line"></div>
        <div className="arrow-head">▶</div>
      </div>

      {/* Stage 3: Rendering the Card */}
      <div className="stage stage-3">
        <div className="stage-header">
          <span className="stage-number">3</span>
          <span className="stage-title">Rendering the Card</span>
        </div>
        <div className="stage-content">
          <div className="component-box presentational">
            <div className="component-icon">🎨</div>
            <div className="component-name">Presentational Components</div>
            <div className="component-desc">Simple rendering without logic</div>
          </div>
          <div className="stage-description">
            Components have no business logic and are isolated from Phoenix complexity - pure presentation layer
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ThreeStageArchitectureDiagram;