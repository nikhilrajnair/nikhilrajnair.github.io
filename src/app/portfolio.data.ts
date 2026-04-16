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
  role: 'Senior Frontend Engineer',
  location: 'Frankfurt, Germany',
  yearsOfExperience: '9+ years',
  intro:
    'Senior Frontend Engineer with 9+ years of experience architecting and delivering scalable SPAs, micro-frontend platforms, and design systems using Angular, React, Ember.js, and TypeScript.',
  summary:
    'Proven track record defining frontend architecture, establishing coding standards, and leading technical direction across cross-functional agile teams — from requirements and technical design through development, automated testing, CI/CD, and rollout. Builds with accessibility, performance, and maintainability as defaults.',
  contact: {
    email: 'nikhilrajnair.a@gmail.com',
    linkedin: 'https://linkedin.com/in/nikhilrajnair',
    github: 'https://github.com/nikhilrajnair',
    devto: 'https://dev.to/nikhilrajnair'
  }
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Stack',
    items: ['Angular', 'React', 'Ember.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'RxJS']
  },
  {
    title: 'Architecture',
    items: ['SPA', 'Micro-frontends', 'Component-driven development', 'Lazy loading', 'NgRx', 'Redux', 'TanStack Query']
  },
  {
    title: 'Design Systems',
    items: ['Storybook', 'Design tokens', 'Angular Material', 'PrimeNG', 'TailwindCSS', 'Bootstrap']
  },
  {
    title: 'APIs and Integration',
    items: ['REST APIs', 'GraphQL', 'OpenAPI', 'Workato']
  },
  {
    title: 'Testing and Quality',
    items: ['Playwright', 'Jest', 'Jasmine', 'Karma', 'QUnit', 'Cucumber', 'TDD', 'SonarQube', 'ESLint', 'Prettier']
  },
  {
    title: 'Tooling and Delivery',
    items: ['Git', 'GitHub Actions', 'Azure DevOps', 'GitLab CI', 'Semantic Release', 'Webpack', 'Vite', 'Docker', 'Figma', 'Agile/Scrum']
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Markt-Pilot',
    role: 'Frontend Engineer',
    location: 'Stuttgart, Germany',
    period: 'Sep 2025 - Present',
    summary:
      'Building Angular micro-frontend platform for ERP integrations, analytics, and onboarding in a fast-scaling B2B SaaS environment.',
    highlights: [
      'Built the ERP Integrations Angular micro-frontend from scratch and delivered a Guided Setup Wizard replacing manual engineering support for SAP, Oracle, and NetSuite connector onboarding.',
      'Implemented a unified [track] Angular directive with type-safe domain-grouped event interfaces, replacing a fragmented legacy Mixpanel setup with a consistent analytics system.',
      'Set up Storybook from scratch as the shared UI component library with visual and snapshot testing, design token documentation, and CI integration as the single source of truth for UI.',
      'Introduced Playwright E2E testing from zero, improving release confidence by 30%; rolled out Semantic Release via Azure DevOps cutting release cycle time by 50% across multiple micro-frontends.',
      'Defined coding standards via ESLint, Prettier, SonarQube, and Husky hooks; authored engineering RFCs and facilitated Tech Talks to align and upskill the team.'
    ],
    stack: ['Angular', 'TypeScript', 'Playwright', 'Storybook', 'Azure DevOps', 'Semantic Release', 'Mixpanel', 'SCSS']
  },
  {
    company: 'Clark GmbH',
    role: 'Frontend Engineer',
    location: 'Frankfurt, Germany',
    period: 'Aug 2022 - Aug 2025',
    summary:
      'Shipped end-to-end product features in Ember.js and Capacitor for a digital insurance platform serving hundreds of thousands of users.',
    highlights: [
      'Shipped NBA card system, contract cancellation flows, and voucher journeys with configurable A/B experiments to hundreds of thousands of users.',
      'Designed and maintained a design token system across web and hybrid mobile surfaces; built a reusable atomic UI component library ensuring cross-browser and cross-device consistency.',
      'Resolved complex iOS and Android-specific bugs in the Zendesk messenger integration including notch compatibility, scroll locking, and badge state management, improving support access by 40%.',
      'Led A/B testing and performance optimisations increasing user engagement by 50%; refactored legacy codebases extracting business logic into services, reducing maintenance by 30% and accelerating feature delivery by 20%.',
      'Collaborated with backend engineers (Ruby on Rails) on REST API integration; translated Figma designs into WCAG-compliant, pixel-accurate responsive interfaces.'
    ],
    stack: ['Ember.js', 'TypeScript', 'Capacitor', 'Handlebars', 'SCSS', 'QUnit', 'Cucumber']
  },
  {
    company: 'Mindtree Pvt. Ltd.',
    role: 'Lead Frontend Engineer',
    location: 'Bangalore, India',
    period: 'Aug 2021 - Aug 2022',
    summary:
      'Led Angular SPA architecture for an asset management platform, defining component structure and coding standards for the team.',
    highlights: [
      'Improved load speed by 20% via lazy loading, code splitting, and change detection optimisation.',
      'Mentored 4 engineers through code reviews and pair programming, boosting team productivity by 25%.',
      'Delivered zero critical post-launch bugs through rigorous unit testing and CI-integrated linting.',
      'Facilitated client workshops to gather UI/UX requirements and translate business goals into actionable frontend specifications.'
    ],
    stack: ['Angular 13', 'TypeScript', 'RxJS', 'Syncfusion', 'SCSS']
  },
  {
    company: 'Wellthy Therapeutics Pvt. Ltd.',
    role: 'Senior Frontend Engineer',
    location: 'Bangalore, India',
    period: 'Mar 2018 - Jul 2021',
    summary:
      'Built multiple Angular dashboards for a digital therapeutics platform used across EPAC, APAC, and the USA, contributing to a 3x increase in user engagement.',
    highlights: [
      'Built dashboards for doctors, health coaches, admins, and patient analytics deployed across EPAC, APAC, and the USA, contributing to a 3x increase in user engagement.',
      'Developed a real-time content creation dashboard using Angular reactive forms with live mobile preview; integrated ChartistJS and Google Charts for interactive patient data visualisation.',
      'Re-architected the company website into a mobile-first Angular SPA with technical SEO improvements, achieving a 60% increase in organic traffic.',
      'Built a custom design system on Angular Material with shared components, design tokens, and theme variables, improving UI consistency across all product surfaces by 20%.'
    ],
    stack: ['Angular', 'Angular Material', 'RxJS', 'ChartistJS', 'Google Charts', 'Bootstrap', 'SCSS']
  },
  {
    company: 'Codegreen Technologies LLP',
    role: 'UI Developer',
    location: 'Kochi, India',
    period: 'Jan 2016 - Mar 2018',
    summary:
      'Developed responsive websites and admin dashboards for clients, focusing on performance, accessibility, and mobile-first design.',
    highlights: [
      'Built responsive websites and admin dashboards using HTML5, CSS3, JavaScript, and WordPress, achieving 25% faster load times through mobile-first design and asset optimisation.',
      'Ran Lighthouse and Chrome DevTools audits, reducing bounce rates by 20% and ensuring WCAG-compliant accessibility across all client deliverables.'
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'WordPress']
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
