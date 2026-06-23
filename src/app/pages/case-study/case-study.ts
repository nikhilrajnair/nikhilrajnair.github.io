import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Badge } from '../../ui/badge/badge';
import { Button } from '../../ui/button/button';
import { Container } from '../../ui/container/container';
import { CtaSection } from '../../ui/cta-section/cta-section';
import { MetricCard } from '../../ui/metric-card/metric-card';
import { Section } from '../../ui/section/section';

@Component({
  selector: 'app-case-study',
  imports: [Badge, Button, Container, CtaSection, MetricCard, RouterLink, Section],
  templateUrl: './case-study.html',
})
export class CaseStudy {}
