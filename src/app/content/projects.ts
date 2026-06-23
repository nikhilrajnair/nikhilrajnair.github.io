export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  outcome: string;
  skills: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: 'erp-integrations-platform',
    title: 'ERP Integrations Platform',
    type: 'B2B SaaS',
    year: '2026',
    summary: 'Frontend workflows for guided enterprise ERP integration and onboarding.',
    outcome: 'Supported integration workflows for 5+ enterprise clients.',
    skills: ['Angular', 'TypeScript', 'Workato'],
  },
  {
    slug: 'product-analytics-foundation',
    title: 'Product Analytics Foundation',
    type: 'Product analytics',
    year: '2026',
    summary: 'A consistent, type-safe foundation for product events and funnel visibility.',
    outcome: 'Created a shared tracking model for product decision-making.',
    skills: ['Angular', 'TypeScript', 'Mixpanel'],
  },
  {
    slug: 'frontend-quality-release-automation',
    title: 'Frontend Quality and Release Automation',
    type: 'Developer experience',
    year: '2026',
    summary: 'E2E coverage and automated releases for safer, faster frontend delivery.',
    outcome: 'Improved release confidence by 30%+ and cut release cycles by ~50%.',
    skills: ['Playwright', 'Azure DevOps', 'Semantic Release'],
  },
  {
    slug: 'insurance-user-journeys',
    title: 'Insurance App User Journey Improvements',
    type: 'Insurance',
    year: '2025',
    summary: 'Clearer, more reliable product journeys across web and hybrid mobile surfaces.',
    outcome: 'Improved key insurance app user journeys across devices.',
    skills: ['Ember.js', 'TypeScript', 'Capacitor'],
  },
];
