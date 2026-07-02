import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '@content/projects';
import { writings } from '@content/writings';
import { Button } from '@ui/button/button';
import { Container } from '@ui/container/container';
import { CtaSection } from '@ui/cta-section/cta-section';
import { MetricCard } from '@ui/metric-card/metric-card';
import { ProjectCard } from '@ui/project-card/project-card';
import { Section } from '@ui/section/section';
import { WritingCard } from '@ui/writing-card/writing-card';

@Component({
  selector: 'app-home',
  imports: [
    Button,
    Container,
    CtaSection,
    MetricCard,
    ProjectCard,
    RouterLink,
    Section,
    WritingCard,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  protected readonly featuredProjects = projects.slice(0, 3);
  protected readonly writings = writings.slice(0, 2);
  protected readonly workAreas = [
    'Frontend architecture and micro frontends',
    'Angular and TypeScript applications',
    'Design systems and reusable components',
    'Product analytics and tracking',
    'Testing and release quality',
    'AI-assisted engineering workflows',
  ];
}
