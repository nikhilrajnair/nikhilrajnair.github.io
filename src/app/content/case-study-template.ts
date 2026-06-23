export type CaseStudyVisualVariant =
  | 'workflow'
  | 'architecture'
  | 'component-system'
  | 'before-after'
  | 'metrics';

export type CaseStudyContent = {
  summary: string;
  context: string;
  problem: string;
  role: string;
  constraints: readonly string[];
  approach: readonly string[];
  decisions: readonly { heading: string; text: string }[];
  outcomes: readonly string[];
  learned: string;
  tech: readonly string[];
  visuals: readonly {
    variant: CaseStudyVisualVariant;
    heading: string;
    items: readonly string[];
  }[];
};

export const caseStudyTemplate: CaseStudyContent = {
  summary:
    'A reusable structure for explaining product and engineering work without confidential details.',
  context:
    'Describe the product area and audience using only approved, public information. Keep client and account names out unless publication is explicitly permitted.',
  problem:
    'State the user or engineering problem at a useful level of abstraction. Focus on the shape of the challenge, not confidential workflows or internal data.',
  role:
    'Summarize your responsibilities, collaborators, and decision scope without naming private teams, stakeholders, or organizational details.',
  constraints: [
    'Replace this with an approved technical, product, or delivery constraint.',
    'Use ranges or qualitative language when exact scale is confidential.',
    'Describe dependencies by capability rather than private vendor or client names.',
  ],
  approach: [
    'Frame the problem and agree on a safe measure of success.',
    'Map the workflow and identify the smallest useful system boundary.',
    'Build, validate, and release in reviewable increments.',
  ],
  decisions: [
    {
      heading: 'Decision placeholder',
      text: 'Explain the trade-off, the options considered, and why the chosen direction fit the constraints.',
    },
    {
      heading: 'System boundary placeholder',
      text: 'Describe what the solution deliberately owned—and what it left to existing systems.',
    },
    {
      heading: 'Quality strategy placeholder',
      text: 'Summarize how accessibility, performance, observability, and testing shaped delivery.',
    },
  ],
  outcomes: [
    'Add an approved result here. Prefer a verified metric, a range, or a qualitative proof point; omit anything that cannot be published.',
  ],
  learned:
    'Capture one reusable lesson about the product, system, or collaboration model without revealing internal incidents or decisions.',
  tech: ['Approved framework', 'Approved tooling', 'Approved platform'],
  visuals: [
    {
      variant: 'workflow',
      heading: 'Workflow diagram',
      items: ['Input', 'Decision', 'Action', 'Feedback'],
    },
    { variant: 'architecture', heading: 'Architecture diagram', items: [] },
    { variant: 'component-system', heading: 'Component system mockup', items: [] },
    { variant: 'before-after', heading: 'Before / after structure', items: [] },
    { variant: 'metrics', heading: 'Metrics panel', items: [] },
  ],
};

export const caseStudies: Readonly<Record<string, CaseStudyContent>> = {
  'erp-integrations-platform': {
    summary:
      'Designed and shipped an Angular-based ERP integration experience that helped enterprise customers connect ERP systems through a guided setup flow and monitor connection health from a dashboard.',
    context:
      'This was part of a B2B SaaS product for machine manufacturers managing complex spare-parts pricing workflows across large SKU datasets.',
    problem:
      'Enterprise customers needed a clearer way to connect ERP systems, understand setup progress, recover from errors, and monitor sync status without relying heavily on manual support.',
    role:
      'Senior frontend and product engineer responsible for the Angular frontend experience, UI states, redirect handling, dashboard visibility, error feedback, API integration, testing, and delivery quality.',
    constraints: [
      'The setup journey handed users into a Workato-powered connector flow and then redirected them back into the product.',
      'The dashboard needed to represent connection health, sync errors, missing data, and manual actions clearly.',
      'Loading, error, and recovery states needed to reduce dependence on manual support.',
    ],
    approach: [
      'Designed the guided setup journey around a Workato-powered connector flow.',
      'Built the frontend handoff into setup and the redirect back into the product.',
      'Created dashboard states for connection status, sync errors, missing data, and manual actions.',
      'Added clear feedback for errors, loading states, next steps, and recovery.',
      'Collaborated with product and backend engineers to align the experience with customer onboarding needs.',
    ],
    decisions: [
      {
        heading: 'Treat the connector as one guided journey',
        text: 'The product handoff, Workato flow, and return redirect were designed as one continuous onboarding experience.',
      },
      {
        heading: 'Make connection health visible',
        text: 'Dashboard states surfaced status, sync errors, missing data, and available manual actions in one place.',
      },
      {
        heading: 'Design recovery as a first-class state',
        text: 'Loading, error feedback, and next steps were explicit so users could understand what happened and how to continue.',
      },
    ],
    outcomes: [
      'Supported ERP onboarding for 5+ enterprise clients.',
      'Improved onboarding efficiency by approximately 40%.',
      'Reduced user confusion during setup through clearer status visibility and guided feedback.',
    ],
    learned:
      'When part of an onboarding journey happens outside the product, clear handoffs, visible status, and actionable recovery guidance are essential to making the experience feel coherent.',
    tech: [
      'Angular',
      'TypeScript',
      'RxJS',
      'REST APIs',
      'Workato integration flow',
      'Playwright',
      'Azure DevOps',
    ],
    visuals: [
      {
        variant: 'workflow',
        heading: 'ERP connection workflow',
        items: ['Product setup', 'Workato connector', 'ERP system', 'Connection dashboard'],
      },
    ],
  },
  'product-analytics-foundation': {
    summary:
      'Built a scalable product analytics foundation using Mixpanel, reusable Angular tracking tooling, and stakeholder dashboards to support data-driven product decisions.',
    context:
      'The work established a shared frontend analytics foundation across key product flows and connected implementation standards with stakeholder-facing dashboards.',
    problem:
      'Product teams needed consistent event tracking and better visibility into user behavior, funnels, and drop-off points.',
    role:
      'Designed the frontend tracking architecture, created reusable Angular tooling, defined tracking standards, and supported dashboard setup with stakeholders.',
    constraints: [
      'Tracking needed to stay consistent across different UI interactions and product flows.',
      'The Angular integration needed to be reusable instead of coupling analytics logic to individual components.',
      'Event data needed to remain understandable to stakeholders using product funnels and dashboards.',
    ],
    approach: [
      'Created a reusable Angular tracking directive for UI interactions.',
      'Standardized event naming and tracking structure.',
      'Integrated tracking into key product flows.',
      'Helped stakeholders understand product funnels and behavior patterns.',
      'Documented the approach for reuse across projects.',
    ],
    decisions: [
      {
        heading: 'Keep tracking declarative',
        text: 'A reusable Angular directive made UI tracking consistent while keeping analytics calls out of individual component logic.',
      },
      {
        heading: 'Standardize the event contract',
        text: 'Shared naming and event structure gave product flows a consistent analytics vocabulary.',
      },
      {
        heading: 'Connect instrumentation to insight',
        text: 'Dashboard setup and stakeholder collaboration kept tracking focused on funnels, behavior patterns, and useful product questions.',
      },
    ],
    outcomes: [
      'Enabled more consistent analytics implementation.',
      'Helped product teams make better decisions based on user behavior.',
    ],
    learned:
      'Analytics tooling becomes more valuable when implementation standards and stakeholder interpretation are designed together, rather than treating event collection as the final step.',
    tech: [
      'Angular',
      'TypeScript',
      'Mixpanel',
      'Custom Angular directive',
      'Product analytics dashboards',
    ],
    visuals: [
      {
        variant: 'workflow',
        heading: 'Product event tracking flow',
        items: [
          'UI interaction',
          'Tracking directive',
          'Analytics service',
          'Mixpanel event',
          'Dashboard insight',
        ],
      },
    ],
  },
};
