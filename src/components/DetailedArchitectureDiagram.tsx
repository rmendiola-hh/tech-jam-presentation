import React from 'react';
import './DetailedArchitectureDiagram.css';

const DetailedArchitectureDiagram: React.FC = () => {
  return (
    <div className="detailed-architecture-diagram">
      {/* Stage 1: Preloading */}
      <div className="detailed-stage">
        <div className="detailed-stage-header">
          <span className="detailed-stage-number">1</span>
          <span className="detailed-stage-title">PRELOADING - SWITCHBOARD</span>
        </div>
        <div className="detailed-flow">
          <div className="flow-item main-function">
            getUnifiedUserInfo → preloadHomeScreenData()
          </div>
          <div className="flow-children">
            <div className="flow-item">├─ preloadUserFirstName()</div>
            <div className="flow-item">├─ loadEtSessionCardIndications()</div>
            <div className="flow-item">├─ preloadWeeklyGoalTooltipDismissed()</div>
            <div className="flow-item">├─ loadAchvAchievementsDataWithStreaks()</div>
            <div className="flow-item">├─ loadFirstWeekGoal()</div>
            <div className="flow-item">├─ loadWeeklyGoalData()</div>
            <div className="flow-item">├─ preloadCompletedEtSessionItems()</div>
            <div className="flow-item">├─ loadPlaylist(isFtu)</div>
            <div className="flow-item">├─ preloadPelvicTrainerSetupStatus()</div>
            <div className="flow-item">└─ preloadEnsoCardData()</div>
          </div>
        </div>
      </div>

      {/* Stage 2: Object Representation */}
      <div className="detailed-stage">
        <div className="detailed-stage-header">
          <span className="detailed-stage-number">2</span>
          <span className="detailed-stage-title">OBJECT REPRESENTATION</span>
        </div>
        <div className="detailed-flow">
          <div className="flow-item main-function">
            HomeScreenV2 → createHomeLayout(state, capabilities)
          </div>
          <div className="flow-children">
            <div className="flow-item">├─ generateDailyPlaylistCardData() → CardProps</div>
            <div className="flow-item">├─ generateWeeklyGoalCard() → CardProps</div>
            <div className="flow-item">├─ generateVideoCallCard() → CardProps</div>
            <div className="flow-item">├─ generateEnsoCard() → CardProps</div>
            <div className="flow-item">├─ generateProgressTrackerCardData() → CardProps</div>
            <div className="flow-item">├─ generateIncentivesCard() → CardProps</div>
            <div className="flow-item">└─ generateConfigurableLayout() → CardProps</div>
          </div>
        </div>
      </div>

      {/* Stage 3: Rendering */}
      <div className="detailed-stage">
        <div className="detailed-stage-header">
          <span className="detailed-stage-number">3</span>
          <span className="detailed-stage-title">RENDERING</span>
        </div>
        <div className="detailed-flow">
          <div className="flow-item main-function">
            HomeScreenV2 → &lt;HomeLayout items=&#123;items&#125; /&gt;
          </div>
          <div className="flow-children">
            <div className="flow-item">└─ Home Cards Package Components</div>
            <div className="flow-children nested">
              <div className="flow-item">├─ &lt;EtSessionCard &#123;...props&#125; /&gt;</div>
              <div className="flow-item">├─ &lt;WeeklyGoalCard &#123;...props&#125; /&gt;</div>
              <div className="flow-item">├─ &lt;ProgressTracker &#123;...props&#125; /&gt;</div>
              <div className="flow-item">└─ &lt;IncentivesCard &#123;...props&#125; /&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedArchitectureDiagram;