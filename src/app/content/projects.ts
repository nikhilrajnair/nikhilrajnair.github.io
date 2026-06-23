export type Project = {
  slug: string;
  title: string;
  type: string;
  role: string;
  year?: string;
  summary: string;
  outcome?: string;
  skills: readonly string[];
  detailPath?: string;
  externalUrl?: string;
};

export const projects: readonly Project[] = [
  {
    slug: 'erp-integrations-platform',
    title: 'ERP Integrations Platform',
    type: 'B2B SaaS',
    role: 'Frontend Engineer',
    year: '2026',
    summary: 'Frontend workflows for guided enterprise ERP integration and onboarding.',
    outcome: 'Supported integration workflows for 5+ enterprise clients.',
    skills: ['Angular', 'TypeScript', 'Workato'],
    detailPath: '/work/erp-integrations-platform',
  },
  {
    slug: 'product-analytics-foundation',
    title: 'Product Analytics Foundation',
    type: 'Product analytics',
    role: 'Frontend Engineer',
    year: '2026',
    summary: 'A consistent, type-safe foundation for product events and funnel visibility.',
    outcome: 'Created a shared tracking model for product decision-making.',
    skills: ['Angular', 'TypeScript', 'Mixpanel'],
    detailPath: '/work/product-analytics-foundation',
  },
  {
    slug: 'frontend-quality-release-automation',
    title: 'Frontend Quality and Release Automation',
    type: 'Developer experience',
    role: 'Frontend Engineer',
    year: '2026',
    summary: 'E2E coverage and automated releases for safer, faster frontend delivery.',
    outcome: 'Improved release confidence by 30%+ and cut release cycles by ~50%.',
    skills: ['Playwright', 'Azure DevOps', 'Semantic Release'],
    detailPath: '/work/frontend-quality-release-automation',
  },
  {
    slug: 'insurance-user-journeys',
    title: 'Insurance App User Journey Improvements',
    type: 'Insurance',
    role: 'Frontend Engineer',
    year: '2025',
    summary: 'Clearer, more reliable product journeys across web and hybrid mobile surfaces.',
    outcome: 'Improved key insurance app user journeys across devices.',
    skills: ['Ember.js', 'TypeScript', 'Capacitor'],
    detailPath: '/work/insurance-user-journeys',
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
  },
  {
    slug: 'transporterr',
    title: 'Transporterr',
    type: 'Fleet management SaaS',
    role: 'Creator and Full-stack Engineer',
    summary: 'A multi-tenant fleet management platform spanning web, API, and driver workflows.',
    outcome: 'Established shared web, backend, mobile, and infrastructure foundations in one monorepo.',
    skills: ['Angular', 'Spring Boot', 'PostgreSQL', 'React Native'],
  },
  {
    slug: 'ng-track-event-directive',
    title: 'ng-track-event-directive',
    type: 'Open source',
    role: 'Creator and Maintainer',
    summary: 'A lightweight Angular directive for declarative click, hover, and view analytics events.',
    outcome: 'Adapter-based integration for Mixpanel, Segment, GA4, or custom analytics backends.',
    skills: ['Angular', 'TypeScript', 'IntersectionObserver'],
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
  },
  {
    slug: 'asset-management-platform',
    title: 'Asset Management Platform',
    type: 'Enterprise',
    role: 'Lead Frontend Engineer',
    summary: 'An Angular application for enterprise asset management workflows and data-heavy interfaces.',
    outcome: 'Improved load speed by 20% through lazy loading and change-detection optimization.',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Syncfusion'],
  },
];
