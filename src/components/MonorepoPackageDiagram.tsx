import React from 'react';
import Module from './Module';
import MaterialIcon from './MaterialIcon';
import StorybookIcon from './StorybookIcon';
import './MonorepoPackageDiagram.css';

const MonorepoPackageDiagram: React.FC = () => {
  return (
    <div className="monorepo-package-diagram">
      <div className="monorepo-container">
        <div className="repository-container">
          <div className="repository-label">Phoenix Repository</div>
          
          {/* Home Cards Package - Left Side */}
          <div className="package-section">
            <Module
              icon="inventory_2"
              iconColor="var(--color-icon-package)"
              title="Home Cards Package"
              subtitle="packages/home-cards"
              description="An encapsulation that keeps pure presentational components away from Phoenix business logic. Provides a sandbox to use Storybook to create and document new components without necessarily including them in Phoenix."
              className="home-cards"
            >
              <div className="package-content">
                {/* Internal Storybook - Left Side */}
                <div className="storybook-section internal">
                  <div className="storybook-header">
                    <div className="storybook-icon">
                      <StorybookIcon height={20} />
                    </div>
                    <div className="internal-badge">Internal Only</div>
                  </div>
                  <div className="storybook-content">
                    <div className="storybook-advantages">
                      <div className="advantages-text">
                        Enables isolated component development, visual regression testing, and design system consistency without Phoenix dependencies.
                      </div>
                    </div>
                    <div className="storybook-features">
                      <div className="storybook-feature">
                        <div className="feature-icon">
                          <MaterialIcon name="palette" color="var(--color-icon-app)" size="small" />
                        </div>
                        <div className="feature-text">Component Gallery</div>
                      </div>
                      <div className="storybook-feature">
                        <div className="feature-icon">
                          <MaterialIcon name="search" color="var(--color-icon-testing)" size="small" />
                        </div>
                        <div className="feature-text">Interactive Testing</div>
                      </div>
                      <div className="storybook-feature">
                        <div className="feature-icon">
                          <MaterialIcon name="description" color="var(--color-icon-documentation)" size="small" />
                        </div>
                        <div className="feature-text">Living Documentation</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exported Components - Right Side */}
                <div className="package-exports">
                  <div className="exports-header">
                    <div className="exports-title">Exported Components</div>
                  </div>
                  <div className="exports-list">
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">ActionButton</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">EtSessionCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">GoalProgressTrackerItem</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">GoalStreakCounter</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">IncentivesCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">MidTermActivityGoalCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">PlaylistErrorCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">ProgressCircle</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">ProgressTracker</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">ProgressTrackerCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">QuickStartMenu</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">SimpleProgressTrackerItem</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">TodayCard</span>
                    </div>
                    <div className="export-item">
                      <MaterialIcon name="output" color="var(--color-icon-export)" size="small" />
                      <span className="export-name">WeeklyGoalCard</span>
                    </div>
                  </div>
                </div>
              </div>
            </Module>
          </div>

          {/* Import Arrow */}
          <div className="import-arrow">
            <div className="arrow-line-horizontal"></div>
            <div className="arrow-head-right">→</div>
            <div className="arrow-label">imports</div>
          </div>

          {/* Phoenix App - Right Side */}
          <div className="phoenix-section">
            <Module
              icon="phone_android"
              iconColor="var(--color-icon-app)"
              title="Phoenix App"
              subtitle="the main react native application"
              description="This is the main application which handles business logic, state management, navigation & routing, and API integration."
              className="phoenix-app"
            >
              <div className="component-section">
                <div className="component-header">
                  <div className="component-icon">
                    <MaterialIcon name="home" color="var(--color-icon-navigation)" size="medium" />
                  </div>
                  <div className="component-title">HomeScreenV2</div>
                </div>
                
                <div className="code-block">
                  <div className="code-line">
                    <span className="code-keyword">import</span> {"{"}
                  </div>
                  <div className="code-line indent">
                    <span className="code-import">EtSessionCard</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-import">WeeklyGoalCard</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="code-import">IncentivesCard</span>
                  </div>
                  <div className="code-line">
                    {"}"} <span className="code-keyword">from</span> <span className="code-string">"home-cards"</span>;
                  </div>
                  <div className="code-line">
                    &nbsp;
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">const</span> <span className="code-function">renderCard</span> = (item) => {"{"}
                  </div>
                  <div className="code-line indent">
                    <span className="code-keyword">switch</span> (item.cardName) {"{"}
                  </div>
                  <div className="code-line indent indent">
                    <span className="code-keyword">case</span> <span className="code-string">"EtSession"</span>:
                  </div>
                  <div className="code-line indent indent indent">
                    <span className="code-keyword">return</span> <span className="code-tag">&lt;EtSessionCard</span> <span className="code-prop">{"...props"}</span> <span className="code-tag">/&gt;</span>;
                  </div>
                  <div className="code-line indent indent">
                    <span className="code-keyword">case</span> <span className="code-string">"WeeklyGoal"</span>:
                  </div>
                  <div className="code-line indent indent indent">
                    <span className="code-keyword">return</span> <span className="code-tag">&lt;WeeklyGoalCard</span> <span className="code-prop">{"...props"}</span> <span className="code-tag">/&gt;</span>;
                  </div>
                  <div className="code-line indent indent">
                    <span className="code-keyword">case</span> <span className="code-string">"Incentives"</span>:
                  </div>
                  <div className="code-line indent indent indent">
                    <span className="code-keyword">return</span> <span className="code-tag">&lt;IncentivesCard</span> <span className="code-prop">{"...props"}</span> <span className="code-tag">/&gt;</span>;
                  </div>
                  <div className="code-line indent">
                    {"}"}
                  </div>
                  <div className="code-line">
                    {"}"};
                  </div>
                </div>
              </div>
            </Module>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonorepoPackageDiagram;