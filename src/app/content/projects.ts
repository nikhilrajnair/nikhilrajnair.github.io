export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
};

export const projects: readonly Project[] = [
  {
    slug: 'platform-foundations',
    title: 'Platform foundations',
    type: 'Frontend architecture',
    summary: 'A placeholder for a case study about scalable frontend foundations.',
  },
  {
    slug: 'design-system',
    title: 'A calmer design system',
    type: 'Design systems',
    summary: 'A placeholder for a case study about consistency, speed, and accessibility.',
  },
];
