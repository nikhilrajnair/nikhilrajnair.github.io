import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../content/projects';
import { Badge } from '../../ui/badge/badge';
import { Button } from '../../ui/button/button';
import { CaseStudyCard } from '../../ui/case-study-card/case-study-card';
import { Container } from '../../ui/container/container';
import { CtaSection } from '../../ui/cta-section/cta-section';
import { MetricCard } from '../../ui/metric-card/metric-card';
import { Section } from '../../ui/section/section';

@Component({
  selector: 'app-home',
  imports: [
    Badge,
    Button,
    CaseStudyCard,
    Container,
    CtaSection,
    MetricCard,
    RouterLink,
    Section,
  ],
  templateUrl: './home.html',
})
export class Home {
  protected readonly projects = projects;
}
