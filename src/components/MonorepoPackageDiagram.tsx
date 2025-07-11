import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Module from './Module';
import MaterialIcon from './MaterialIcon';
import StorybookIcon from './StorybookIcon';
import './MonorepoPackageDiagram.css';

const MonorepoPackageDiagram: React.FC = () => {
  return (
    <div className="monorepo-package-diagram">
      <div className="monorepo-container">
        <div className="repository-container">
          <div className="repository-label">
            <MaterialIcon name="code" color="var(--color-highlight-green)" size="small" />
            Phoenix Repository
          </div>
          
          {/* Home Cards Package - Left Side */}
          <div className="package-section">
            <Module
              icon="inventory_2"
              iconColor="var(--color-icon-package)"
              title="Home Cards Package"
              subtitle="A clearly encapsulated sandbox for pure presentational components"
              description="This monorepo package allows us to provide a clean encapsulation for pure presentational components, away from the complex business logic of Phoenix. Provides a sandbox to use Storybook to create and document new components without necessarily including them in Phoenix."
              bulletPoints={[
                {
                  text: "Pull Requests automatically deploy a Storybook url for non-developers to review",
                  icon: "rocket_launch",
                  iconColor: "var(--color-highlight-blue)"
                },
                {
                  text: "ESLint rules prevent this package from importing files from Phoenix, enforcing encapsulation",
                  icon: "security",
                  iconColor: "var(--color-highlight-red)"
                }
              ]}
              path="src/packages/home-cards"
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
                      <MaterialIcon name="more_horiz" color="var(--color-text-secondary)" size="small" />
                      <span className="export-name">...more components</span>
                    </div>
                  </div>
                </div>
              </div>
            </Module>
          </div>

          {/* Import Arrow */}
          <div className="import-arrow">
            <svg 
              width="50" 
              height="24" 
              viewBox="0 0 50 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M2 12L48 12" 
                stroke="var(--color-teal-bright)" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              <path 
                d="M40 6L48 12L40 18" 
                stroke="var(--color-teal-bright)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Phoenix App - Right Side */}
          <div className="phoenix-section">
            <Module
              icon="phone_android"
              iconColor="var(--color-icon-app)"
              title="Phoenix App"
              subtitle="The main react native application"
              description="This is the main application which handles business logic, state management, navigation & routing, and API integration. The new simplified home screen imports its presentational components from the home-cards package."
              bulletPoints={[
                {
                  text: "ESLint rules prevent Phoenix from importing non-public home-cards internals, preventing abstraction violations",
                  icon: "security",
                  iconColor: "var(--color-highlight-red)"
                }
              ]}
              path="src/index.ts"
              className="phoenix-app"
            >
              <div className="component-section">
                <div className="component-header">
                  <div className="component-icon">
                    <MaterialIcon name="home" color="var(--color-icon-navigation)" size="medium" />
                  </div>
                  <div className="component-title">HomeScreenV2</div>
                </div>
                
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.75rem',
                    lineHeight: '1.4'
                  }}
                >
                  {`import {
  EtSessionCard,
  WeeklyGoalCard,
  IncentivesCard
} from "home-cards";

const renderCard = (item) => {
  switch (item.cardName) {
    case "EtSession":
      return <EtSessionCard {...props} />;
    case "WeeklyGoal":
      return <WeeklyGoalCard {...props} />;
    case "Incentives":
      return <IncentivesCard {...props} />;
  }
};`}
                </SyntaxHighlighter>
              </div>
            </Module>
          </div>
        </div>
      </div>
      <div className="diagram-caption">
        Monorepo packages and ESLint rules provide a great mechanism for enforcing modularity of the codebase, making it easier to maintain clear boundaries and prevent architectural drift. Home/Library pod built a mechanism for making packages deployable, so any team could now create their own sandbox in the Phoenix repo that creates web artifacts without negatively impacting Phoenix
      </div>
    </div>
  );
};

export default MonorepoPackageDiagram;