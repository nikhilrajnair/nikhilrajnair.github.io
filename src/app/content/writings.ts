export type Writing = {
  slug: string;
  title: string;
  topic: string;
  summary: string;
  published: string;
  url: string;
};

export const writings: readonly Writing[] = [
  {
    slug: 'semantic-release',
    title: 'Reducing micro-frontend release time with semantic release',
    topic: 'Delivery',
    summary: 'A practical look at removing manual versioning and release friction.',
    published: 'April 2026',
    url: 'https://dev.to/nikhilrajnair/how-i-cut-our-micro-frontend-release-time-by-50-with-semantic-release-on-azure-devops-3m35',
  },
  {
    slug: 'angular-quality-stack',
    title: 'Modernizing the Angular quality stack',
    topic: 'Angular',
    summary: 'Notes from moving a frontend quality workflow toward faster modern tooling.',
    published: 'March 2026',
    url: 'https://dev.to/nikhilrajnair/modernizing-the-angular-quality-stack-moving-to-vite-2d23',
  },
];
