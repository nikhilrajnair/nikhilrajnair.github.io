export type Project = {
  slug: string;
  title: string;
  type: string;
  role: string;
  year?: string;
  summary: string;
  outcome?: string;
  skills: readonly string[];
  coverImage?: string;
  coverAlt?: string;
  detailPath?: string;
  externalUrl?: string;
};

export const projects: readonly Project[] = [
  {
    slug: 'erp-integrations-platform',
    title: 'ERP Integrations Platform',
    type: 'B2B SaaS',
    role: 'Senior Frontend and Product Engineer',
    year: '2026',
    summary: 'Frontend workflows for guided enterprise ERP integration and onboarding.',
    outcome: 'Supported integration workflows for 5+ enterprise clients.',
    skills: ['Angular', 'TypeScript', 'Workato'],
    coverImage: 'images/case-studies/erp-integrations-platform.webp',
    coverAlt:
      'Abstract ERP integration workflow showing guided setup, connector handoff, redirect handling, dashboard sync status, and operational summary.',
    detailPath: '/work/erp-integrations-platform',
  },
  {
    slug: 'product-analytics-foundation',
    title: 'Product Analytics Foundation',
    type: 'Product analytics',
    role: 'Senior Frontend Engineer',
    year: '2026',
    summary: 'A consistent, type-safe foundation for product events and funnel visibility.',
    outcome: 'Created a shared tracking model for product decision-making.',
    skills: ['Angular', 'TypeScript', 'Mixpanel'],
    coverImage: 'images/case-studies/product-analytics-foundation.webp',
    coverAlt:
      'Abstract product analytics workflow showing UI interaction, tracking directive, analytics service, event payload, and insights dashboard.',
    detailPath: '/work/product-analytics-foundation',
  },
  {
    slug: 'frontend-quality-release-automation',
    title: 'Frontend Quality and Release Automation',
    type: 'Developer experience',
    role: 'Senior Frontend Engineer',
    year: '2026',
    summary: 'E2E coverage and automated releases for safer, faster frontend delivery.',
    outcome: 'Improved release confidence by 30%+ and cut release cycles by ~50%.',
    skills: ['Playwright', 'Azure DevOps', 'Semantic Release'],
    coverImage: 'images/case-studies/frontend-quality-release-automation.webp',
    coverAlt:
      'Abstract release automation workflow showing code commit, build, E2E test, quality gate, deployment, and release metrics.',
  },
  {
    slug: 'insurance-user-journeys',
    title: 'Insurance App User Journey Improvements',
    type: 'Insurance',
    role: 'Senior Frontend Engineer',
    year: '2025',
    summary: 'Clearer, more reliable product journeys across web and hybrid mobile surfaces.',
    outcome: 'Improved key insurance app user journeys across devices.',
    skills: ['Ember.js', 'TypeScript', 'Capacitor'],
    coverImage: 'images/case-studies/insurance-app-user-journey.webp',
    coverAlt:
      'Abstract mobile insurance app journey showing onboarding, policy overview, support access, and product impact metrics.',
  },
];

export const secondaryProjects: readonly Project[] = [
  {
    slug: 'ozo',
    title: 'OZO',
    type: 'Product project',
    role: 'Creator',
    summary: 'A selected product project with implementation details being prepared for publication.',
    skills: [],
    coverImage: 'images/projects/ozo-side-project.webp',
    coverAlt:
      'OZO product concept showing a mobile app and admin dashboard for documents, warranties, invoices, memberships, and reminders.',
  },
  {
    slug: 'transporterr',
    title: 'Transporterr',
    type: 'Fleet management SaaS',
    role: 'Creator and Full-stack Engineer',
    summary: 'A multi-tenant fleet management platform spanning web, API, and driver workflows.',
    outcome: 'Established shared web, backend, mobile, and infrastructure foundations in one monorepo.',
    skills: ['Angular', 'Spring Boot', 'PostgreSQL', 'React Native'],
    coverImage: 'images/projects/transporterr-ai-document-workflow.webp',
    coverAlt:
      'Transporterr workflow showing document upload, AI extraction, structured data review, confidence scoring, and export.',
  },
  {
    slug: 'ng-track-event-directive',
    title: 'ng-track-event-directive',
    type: 'Open source',
    role: 'Creator and Maintainer',
    summary: 'A lightweight Angular directive for declarative click, hover, and view analytics events.',
    outcome: 'Adapter-based integration for Mixpanel, Segment, GA4, or custom analytics backends.',
    skills: ['Angular', 'TypeScript', 'IntersectionObserver'],
    coverImage: 'images/projects/ng-track-event-directive.webp',
    coverAlt:
      'Event tracking pipeline showing UI interaction, Angular tracking directive, structured event payload, tracking service, and analytics platform.',
    externalUrl: 'https://github.com/nikhilrajnair/ng-track-event-directive',
  },
  {
    slug: 'healthcare-admin-dashboards',
    title: 'Healthcare Admin Dashboards',
    type: 'Healthcare',
    role: 'Senior Frontend Engineer',
    summary: 'Operational dashboards for doctors, health coaches, administrators, and patient analytics.',
    outcome: 'Supported digital therapeutics products across EPAC, APAC, and the USA.',
    skills: ['Angular', 'Angular Material', 'RxJS', 'Google Charts'],
    coverImage: 'images/projects/healthcare-admin-dashboard.webp',
    coverAlt:
      'Healthcare admin dashboard concept showing care console navigation, patient activity charts, care-team workflows, recent patients, and operational insights.',
  },
  {
    slug: 'asset-management-platform',
    title: 'Asset Management Platform',
    type: 'Enterprise',
    role: 'Lead Frontend Engineer',
    summary: 'An Angular application for enterprise asset management workflows and data-heavy interfaces.',
    outcome: 'Improved load speed by 20% through lazy loading and change-detection optimization.',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Syncfusion'],
    coverImage: 'images/projects/asset-management-platform.webp',
    coverAlt:
      'Asset management platform concept showing data upload, validation summary, recent uploads, quality checks, and export actions.',
  },
];
