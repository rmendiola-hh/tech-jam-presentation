import type { Slide } from '../types/slides';

export const sampleSlides: Slide[] = [
  {
    id: '1',
    type: 'title',
    title: 'Simplified Home',
    subtitle: 'Technical Walkthrough - Strategic Development Approach'
  },
  {
    id: '2',
    type: 'bullets',
    title: 'Core Message',
    bullets: [
      'Strategic development approach with benefits for users, business, and developers',
      'Heavy focus on code cleanliness and modularity',
      'Puts us in a much better position to keep iterating on the home screen',
      'Lessons that other teams can apply to their work'
    ]
  },
  {
    id: '3',
    type: 'bullets',
    title: 'The Main Problems We Faced',
    bullets: [
      'Lack of Central Control - No controlling logic for home screen',
      'Convoluted React Components - 7 years of layers upon layers',
      'Business logic buried in nested hooks',
      'Side effects affecting other components and performance',
      'Simple features required ugly hacks'
    ]
  },
  {
    id: '4',
    type: 'code',
    title: 'Legacy Home Complexity',
    language: 'text',
    code: `HomeStack → HomeScreenV2 [if homeV2]
         → PerisurgicalHome [if isPerisurgical]
         → Playlist [if !homeV2 && !isPerisurgical]
             └─> PlaylistContentHandler
                 ├─> AcutePlaylistContent [if isAcuteUser]
                 │   ├─> PlaylistWithVideoCallCard
                 │   │   ├─> VideoCallCard
                 │   │   └─> PlaylistWrapper
                 │   │       ├─> AcutePlaylistCard
                 │   │       └─> PostPlaylistModal
                 │   └─> ReferralComponent
                 ├─> AeChronicPlaylistContent [if isAeChronic]
                 │   ├─> PlaylistTop
                 │   ├─> TodaySection
                 │   │   ├─> TodayHeader
                 │   │   ├─> EmoCard
                 │   │   └─> PlaylistWithVideoCallCard
                 │   └─> ForYouSection
                 │       ├─> ForYouHeader
                 │       ├─> EngagementIncentivesCard
                 │       └─> [20+ more components...]`
  },
  {
    id: '5',
    type: 'bullets',
    title: 'Our Three Guiding Principles',
    bullets: [
      'Absolute Best Experience for Our Members - Home screen loads right away',
      'Agile Product for Easy Experimentation - Quick iterations, not 2-week setups',
      'Great Developer Experience - Clean, modular, testable code',
      'Move away from frustrating legacy codebase patterns'
    ]
  },
  {
    id: '6',
    type: 'code',
    title: 'Three-Stage Architecture',
    language: 'text',
    code: `LEGACY HOME: One Complex Component
┌─────────────────────────────────────┐
│  🔀 Complex Component (does everything)  │
│  ├─ Data loading with hooks            │
│  ├─ Business logic buried in hooks     │
│  ├─ Conditional rendering logic        │
│  ├─ Side effects and state management  │
│  └─ Presentation mixed with logic      │
└─────────────────────────────────────┘

           ↓ SIMPLIFIED HOME ↓

STAGE 1: Pre-loading Data
┌─────────────────────────────────────┐
│  📥 Switchboard (getUnifiedUserInfo)    │
│  └─ All data loaded upfront            │
└─────────────────────────────────────┘
                 │
                 ▼
STAGE 2: Creating Object Representation  
┌─────────────────────────────────────┐
│  🏗️  Pure JavaScript Functions         │
│  └─ Business logic creates data model  │
└─────────────────────────────────────┘
                 │
                 ▼
STAGE 3: Rendering the Card
┌─────────────────────────────────────┐
│  🎨 Presentational Components          │
│  └─ Simple rendering without logic     │
└─────────────────────────────────────┘`
  },
  {
    id: '7',
    type: 'code',
    title: 'Simplified Home Architecture',
    language: 'text',
    code: `[STAGE 1: PRELOADING - SWITCHBOARD]
getUnifiedUserInfo → preloadHomeScreenData()
├─ preloadUserFirstName()
├─ loadEtSessionCardIndications()
├─ preloadWeeklyGoalTooltipDismissed()
├─ loadAchvAchievementsDataWithStreaks()
├─ loadFirstWeekGoal()
├─ loadWeeklyGoalData()
├─ preloadCompletedEtSessionItems()
├─ loadPlaylist(isFtu)
├─ preloadPelvicTrainerSetupStatus()
└─ preloadEnsoCardData()

[STAGE 2: OBJECT REPRESENTATION]
HomeScreenV2 → createHomeLayout(state, capabilities)
├─ generateDailyPlaylistCardData() → CardProps
├─ generateWeeklyGoalCard() → CardProps
├─ generateVideoCallCard() → CardProps
├─ generateEnsoCard() → CardProps
├─ generateProgressTrackerCardData() → CardProps
├─ generateIncentivesCard() → CardProps
└─ generateConfigurableLayout() → CardProps

[STAGE 3: RENDERING]
HomeScreenV2 → <HomeLayout items={items} />
└─ Home Cards Package Components
   ├─ <EtSessionCard {...props} />
   ├─ <WeeklyGoalCard {...props} />
   ├─ <ProgressTracker {...props} />
   └─ <IncentivesCard {...props} />`
  },
  {
    id: '8',
    type: 'code',
    title: 'createHomeLayout Function',
    language: 'typescript',
    code: `// Stage 2: Object representation in createHomeLayout
export const createHomeLayout = (
  state: RootState,
  capabilitiesObj: Capabilities,
  { isSpecialistVisitMember, srBase, userIncentiveProps }: ExtraProps,
): HomeLayoutType => {
  // Business logic determines what to show
  const isFtu = aePlaylistContainsFtuData(state);
  const program = selectPudlUserProgramName(state);
  
  // Easy to add logic for different programs
  switch (program) {
    case "wellness":
    case "prevention":
      return renderWellnessLayout(state, capabilitiesObj);
    case "acute":
      return renderAcuteLayout(isFtu, state, capabilitiesObj, srBase);
    default:
      return renderUnifiedLayout(
        isFtu,
        state,
        capabilitiesObj,
        srBase,
        userIncentiveProps,
      );
  }
};`
  },
  {
    id: '9',
    type: 'code',
    title: 'Card Generator Example',
    language: 'typescript',
    code: `export const generateDailyPlaylistCardData = (
  state: RootState,
  handleDailyPlaylist: () => void,
  t: TranslationFunction,
): CardProps => {
  // Extract data from Redux state (already preloaded)
  const firstName = getUserFirstName(state);
  const firstExercisePreview = getEtSessionImage(state) || "";
  const duration = getEtSessionDuration(state) || 0;
  const playlistStatus = getAePlaylistStatus(state);
  const treatmentAreas = getUserIndications(state) || [];

  // Business logic determines title and button text
  const title = playlistStatus === PlaylistStatus.NOT_STARTED
    ? t("playlistCard.titleNotStarted", { firstName })
    : t("playlistCard.titleInProgress");

  const buttonLabel = playlistStatus === PlaylistStatus.NOT_STARTED
    ? t("playlist.button.notStarted")
    : t("buttonText.continue");

  // Return data object for presentational component
  return {
    cardName: CardName.EtSession,
    slug: 'Playlist-EtSession',
    props: {
      title,
      caption: '${duration} minutes · ${treatmentAreas.join(", ")}',
      buttonLabel,
      imageSource: firstExercisePreview,
      onPress: handleDailyPlaylist,
    },
  };
};`
  },
  {
    id: '10',
    type: 'bullets',
    title: 'Storybook for Presentational Components',
    bullets: [
      'Leverage React Native web capabilities for component development',
      'No need for simulators - see work instantly on web',
      'PMs and designers can review UI before nightly builds',
      'Living documentation of available components',
      'Automatic deployment via GitHub Actions'
    ]
  },
  {
    id: '11',
    type: 'bullets',
    title: 'The Home Cards Monorepo Package',
    bullets: [
      'Strategic technical solution - first monorepo package in Phoenix',
      'Storybook sandbox that does not affect Phoenix build',
      'Exports clean, presentational components as NPM package',
      'Protection against business logic in presentation components',
      'Operational benefits for the whole team'
    ]
  },
  {
    id: '12',
    type: 'code',
    title: 'Home Cards Package Exports',
    language: 'typescript',
    code: `// packages/home-cards/src/index.ts
export { EtSessionCard } from "./components/EtSessionCard";
export type { EtSessionCardProps } from "./components/EtSessionCard";
export { PlaylistErrorCard } from "./components/PlaylistErrorCard";
export type { PlaylistErrorCardProps } from "./components/PlaylistErrorCard";
export { WeeklyGoalCard } from "./components/WeeklyGoalCard";
export type { WeeklyGoalCardProps } from "./components/WeeklyGoalCard";
export { ProgressTracker } from "./components/ProgressTracker";
export type { ProgressTrackerProps } from "./components/ProgressTracker";
export { IncentivesCard } from "./components/IncentivesCard";
export type { IncentivesCardProps } from "./components/IncentivesCard";

// This separation allows the Home Cards package to focus 
// purely on presentation while Phoenix handles all the 
// business logic and data management.`
  },
  {
    id: '13',
    type: 'bullets',
    title: 'Time to Interactive (TTI) Measurement',
    bullets: [
      'Measures complete user experience from switchboard to interactive home',
      'Legacy home: switchboard → when you can press playlist card',
      'Simplified home: switchboard → all data loaded and screen ready',
      'Not comparing apples to apples - Simplified has more accurate measurement',
      'Visibility into cross-team wins (Cloudflare performance improvements)'
    ]
  },
  {
    id: '14',
    type: 'code',
    title: 'TTI Implementation',
    language: 'typescript',
    code: `// src/modules/home/screens/HomeScreenV2/index.tsx
export default function HomeScreenV2() {
  const hasMeasuredTTI = useRef(false);
  
  useEffect(() => {
    if (!hasMeasuredTTI.current) {
      try {
        hasMeasuredTTI.current = true;
        performance.mark("SimplifiedHome:Ready");

        const switchboardToHomeMeasure = performance.measure(
          "SwitchboardToSimplifiedHome",
          "Switchboard:Start",
          "SimplifiedHome:Ready",
        );

        // Only track if duration is under the timeout threshold
        if (switchboardToHomeMeasure.duration < HOME_PERFORMANCE_TIMEOUT) {
          track(Event.SwitchboardToHomePerformanceMeasurement, {
            duration: switchboardToHomeMeasure.duration,
            homeVersion: "Simplified",
          });
        }
      } catch (error) {
        // Error handling for measurement failures
      }
    }
  }, []);
}`
  },
  {
    id: '15',
    type: 'bullets',
    title: 'Key Principles for Other Teams',
    bullets: [
      'Extract Business Logic from React Components',
      'Prioritize UI Agility - never impossible to tweak look and feel',
      'Leverage Storybook for Designer Collaboration',
      'Maximize BFF Usage - avoid waiting for app releases',
      'Consolidate Network Requests for better performance'
    ]
  },
  {
    id: '16',
    type: 'bullets',
    title: 'More Principles for Other Teams',
    bullets: [
      'Use Feature Flags for Safe Rollouts',
      'Measure Performance Impact with clear metrics',
      'Clean Up Technical Debt Proactively',
      'Maintain Architectural Consistency across features',
      'Document technical debt as it is created'
    ]
  },
  {
    id: '17',
    type: 'bullets',
    title: 'Project Accomplishments',
    bullets: [
      '3 clear stages vs 7+ nested conditional layers',
      'Pure functions for business logic vs hooks scattered everywhere',
      'Presentational components from monorepo vs complex stateful components',
      'Single source of truth vs distributed state management',
      'Better developer experience and easier testing'
    ]
  },
  {
    id: '18',
    type: 'bullets',
    title: 'Benefits of This Architecture',
    bullets: [
      'Easier for developers to comprehend',
      'Nice separation of concerns',
      'Different developers can work on different stages simultaneously',
      'Business logic is unit testable',
      'Parallelizable work across the team'
    ]
  },
  {
    id: '19',
    type: 'bullets',
    title: 'Questions & Follow-Up',
    bullets: [
      'How can your team apply these principles?',
      'What legacy patterns need refactoring?',
      'Where can you implement feature flags?',
      'How might Storybook benefit your workflow?',
      'What performance metrics should you be tracking?'
    ]
  }
];