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
    slug: 'platform-foundations',
    title: 'Platform foundations',
    type: 'Frontend architecture',
    year: '2026',
    summary: 'A placeholder for a case study about scalable frontend foundations.',
    outcome: 'A clearer path from idea to release.',
    skills: ['Angular', 'TypeScript', 'Playwright'],
  },
  {
    slug: 'design-system',
    title: 'A calmer design system',
    type: 'Design systems',
    year: '2025',
    summary: 'A placeholder for a case study about consistency, speed, and accessibility.',
    outcome: 'Shared UI decisions with less repeated work.',
    skills: ['Design tokens', 'Storybook', 'Accessibility'],
  },
];
