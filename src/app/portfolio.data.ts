export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  impact: string;
  stack: string[];
};

export type DevtoArticle = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  coverImage?: string | null;
  tags: string[];
};

export const profile = {
  name: 'Nikhil Raj Ainchooran',
  role: 'Frontend Engineer',
  location: 'Frankfurt, Germany',
  yearsOfExperience: '8+ years',
  intro:
    'Frontend Engineer focused on scalable web applications, elegant UI systems, and measurable product impact across Angular, React, and Ember ecosystems.',
  summary:
    'I build maintainable frontend architecture, optimize user journeys with performance-first thinking, and help teams ship faster through reusable patterns and strong engineering practices.',
  contact: {
    email: 'nikhilrajnair.a@gmail.com',
    linkedin: 'https://linkedin.com/in/nikhilrajnair',
    github: 'https://github.com/nikhilrajnair',
    devto: 'https://dev.to/nikhilrajnair'
  }
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Angular', 'Ember.js', 'React', 'React Native']
  },
  {
    title: 'UI and Styling',
    items: ['HTML5', 'CSS3', 'SCSS', 'Angular Material', 'PrimeNG', 'TailwindCSS', 'Bootstrap']
  },
  {
    title: 'Testing and Quality',
    items: ['Playwright', 'QUnit', 'Jasmine', 'Karma', 'Cucumber', 'TDD']
  },
  {
    title: 'Tooling and Delivery',
    items: ['Git', 'GitHub', 'CI/CD', 'REST APIs', 'AWS', 'Figma', 'Agile/Scrum']
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Markt-Pilot',
    role: 'Frontend Engineer',
    location: 'Stuttgart, Germany',
    period: 'Sep 2025 - Present',
    summary:
      'Led Angular micro-frontend initiatives for ERP integrations, onboarding, and product analytics in a fast-scaling B2B environment.',
    highlights: [
      'Designed and shipped an ERP integrations micro-frontend that reduced setup friction for new customers.',
      'Built a guided setup wizard with robust error handling and Workato integration to replace manual support-heavy workflows.',
      'Implemented product analytics foundations with Mixpanel including custom directives and dashboard instrumentation.',
      'Introduced Playwright E2E testing and release automation that improved release confidence and cut cycle time.'
    ],
    stack: ['Angular', 'TypeScript', 'Playwright', 'Azure DevOps', 'Semantic Release', 'SCSS']
  },
  {
    company: 'Clark GmbH',
    role: 'Frontend Engineer',
    location: 'Frankfurt, Germany',
    period: 'Aug 2022 - Aug 2025',
    summary:
      'Delivered modular Ember.js workflows and UX improvements for high-traffic onboarding and profile experiences.',
    highlights: [
      'Built reusable UI components using atomic design principles and improved UX consistency across key customer journeys.',
      'Led A/B testing and frontend performance optimization that increased user engagement by 50%.',
      'Refactored legacy architecture by extracting business logic into services to reduce maintenance overhead.',
      'Implemented responsive Zendesk customization for desktop and mobile support access.'
    ],
    stack: ['Ember.js', 'TypeScript', 'Handlebars', 'SCSS', 'QUnit', 'Cucumber']
  },
  {
    company: 'Mindtree Pvt. Ltd.',
    role: 'Lead Frontend Engineer',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2022',
    summary:
      'Spearheaded development of an Angular asset management platform with strong focus on stability and delivery speed.',
    highlights: [
      'Applied lazy loading and route-level optimization to improve load speed and engagement.',
      'Shipped production-ready code with zero critical post-launch bugs through disciplined testing practices.',
      'Mentored junior engineers through pair programming and reviews, raising team productivity.'
    ],
    stack: ['Angular 13', 'TypeScript', 'RxJS', 'Syncfusion', 'SCSS']
  },
  {
    company: 'Wellthy Therapeutics Pvt. Ltd.',
    role: 'Senior Frontend Engineer',
    location: 'Bangalore, India',
    period: 'Mar 2018 - Jul 2021',
    summary:
      'Re-architected healthcare CMS experiences into a performant Angular SPA with reusable design-system driven components.',
    highlights: [
      'Migrated a complex multi-page flow to SPA architecture with improved UX and data visualization.',
      'Created a custom design system on Angular Material for faster feature development and consistent UI.',
      'Improved technical SEO and media optimization, increasing organic traffic by 60%.'
    ],
    stack: ['Angular', 'Angular Material', 'RxJS', 'Bootstrap', 'SCSS']
  }
];

export const projects: ProjectItem[] = [
  {
    name: 'Guided ERP Setup Wizard',
    description:
      'A structured onboarding workflow that connects ERP systems to core product capabilities with transparent progress and resilient error recovery.',
    impact: 'Reduced support dependency and improved onboarding clarity for enterprise users.',
    stack: ['Angular', 'TypeScript', 'Workato', 'SCSS']
  },
  {
    name: 'MP ONE Analytics Foundation',
    description:
      'An analytics architecture initiative that standardized tracking events and enabled actionable dashboards across product funnels.',
    impact: 'Enabled data-driven product decisions for the first time at launch scale.',
    stack: ['Angular', 'Mixpanel', 'TypeScript', 'Data Visualization']
  },
  {
    name: 'Design-System Driven CMS Modernization',
    description:
      'A UI modernization effort to convert fragmented healthcare dashboards into a cohesive, reusable component ecosystem.',
    impact: 'Improved consistency and reduced development time with reusable frontend modules.',
    stack: ['Angular', 'Angular Material', 'SCSS', 'RxJS']
  }
];
