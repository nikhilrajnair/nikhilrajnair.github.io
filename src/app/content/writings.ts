export type Writing = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  published: string;
  readingTime: string;
  url?: string;
};

export const writings: readonly Writing[] = [
  {
    slug: 'semantic-release',
    title: 'Reducing micro-frontend release time with semantic release',
    category: 'Testing and Release Quality',
    summary: 'A practical look at removing manual versioning and release friction.',
    published: 'April 2026',
    readingTime: '5 min read',
    url: 'https://dev.to/nikhilrajnair/how-i-cut-our-micro-frontend-release-time-by-50-with-semantic-release-on-azure-devops-3m35',
  },
  {
    slug: 'angular-quality-stack',
    title: 'Modernizing the Angular quality stack',
    category: 'Angular and TypeScript',
    summary: 'Notes from moving a frontend quality workflow toward faster modern tooling.',
    published: 'March 2026',
    readingTime: '6 min read',
    url: 'https://dev.to/nikhilrajnair/modernizing-the-angular-quality-stack-moving-to-vite-2d23',
  },
  {
    slug: 'analytics-tracking-product-teams-can-use',
    title: 'Building analytics tracking that product teams can actually use',
    category: 'Product Analytics',
    summary: 'A practical approach to event naming, reusable tracking, and useful product signals.',
    published: 'Coming soon',
    readingTime: '5 min read',
  },
  {
    slug: 'erp-integration-workflows',
    title: 'What I learned from building ERP integration workflows',
    category: 'Angular and TypeScript',
    summary:
      'Lessons from designing guided setup, redirect handling, and resilient connection states.',
    published: 'Coming soon',
    readingTime: '6 min read',
  },
  {
    slug: 'playwright-release-confidence',
    title: 'How Playwright improved my release confidence',
    category: 'Testing and Release Quality',
    summary: 'What changed when critical user journeys became part of the release feedback loop.',
    published: 'Coming soon',
    readingTime: '5 min read',
  },
  {
    slug: 'visible-frontend-engineering',
    title: 'Making frontend work visible through better engineering documentation',
    category: 'Frontend Architecture',
    summary:
      'Simple documentation practices that make decisions, trade-offs, and progress easier to see.',
    published: 'Coming soon',
    readingTime: '4 min read',
  },
  {
    slug: 'ai-tools-daily-engineering',
    title: 'How I use AI tools in daily engineering work',
    category: 'AI-Assisted Engineering',
    summary:
      'A grounded workflow for using AI to explore, implement, review, and document frontend work.',
    published: 'Coming soon',
    readingTime: '5 min read',
  },
  {
    slug: 'nda-safe-case-studies',
    title: 'Designing NDA-safe case studies as a frontend engineer',
    category: 'Career Notes',
    summary:
      'How to communicate context, decisions, and impact without exposing confidential details.',
    published: 'Coming soon',
    readingTime: '4 min read',
  },
];
