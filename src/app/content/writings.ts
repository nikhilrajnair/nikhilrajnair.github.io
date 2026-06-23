export type Writing = {
  slug: string;
  title: string;
  topic: string;
  summary: string;
};

export const writings: readonly Writing[] = [
  {
    slug: 'frontend-architecture',
    title: 'Frontend architecture without ceremony',
    topic: 'Architecture',
    summary: 'A placeholder for practical notes on keeping product code clear and adaptable.',
  },
  {
    slug: 'performance-budgets',
    title: 'Performance is a product feature',
    topic: 'Performance',
    summary: 'A placeholder for an article about making speed part of everyday engineering.',
  },
];
