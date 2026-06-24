import { Component } from '@angular/core';
import { skillGroups } from '../../content/skills';
import { Container } from '../../ui/container/container';
import { CtaSection } from '../../ui/cta-section/cta-section';
import { Section } from '../../ui/section/section';
import { SkillGroup } from '../../ui/skill-group/skill-group';

@Component({
  selector: 'app-about',
  imports: [Container, CtaSection, Section, SkillGroup],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly skillGroups = skillGroups;
  protected readonly technicalStrengths = [
    'Frontend architecture and micro frontends',
    'Angular and TypeScript applications',
    'Design systems and reusable components',
    'Accessible, responsive interfaces',
    'End-to-end testing and release quality',
    'Product analytics implementation',
  ];
  protected readonly productStrengths = [
    'Turning complex workflows into clear user journeys',
    'Connecting engineering decisions to product outcomes',
    'Defining useful analytics events and feedback loops',
    'Working closely with product, design, and backend teams',
  ];
  protected readonly experience = [
    {
      heading: 'B2B SaaS and enterprise systems',
      text: 'ERP integration journeys, product analytics foundations, Angular micro frontends, and reliable release workflows for complex web applications.',
    },
    {
      heading: 'Insurance and fintech products',
      text: 'Mobile and web journeys across onboarding, contracts, and support for an insurance platform serving 700k+ users.',
    },
    {
      heading: 'Healthcare applications',
      text: 'Administrative dashboards, reusable design systems, and patient workflows for doctors, coaches, and care teams.',
    },
    {
      heading: 'Technical leadership',
      text: 'Mentoring engineers, strengthening code review practices, and documenting architecture decisions for distributed teams.',
    },
  ];
}
