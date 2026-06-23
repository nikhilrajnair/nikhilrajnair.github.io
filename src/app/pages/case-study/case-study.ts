import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudyTemplate } from '../../content/case-study-template';
import { Project, projects } from '../../content/projects';
import { Badge } from '../../ui/badge/badge';
import { Button } from '../../ui/button/button';
import { CaseStudyVisual } from '../../ui/case-study-visual/case-study-visual';
import { Container } from '../../ui/container/container';

const placeholderProject: Project = {
  slug: 'template',
  title: 'Case Study Template',
  type: 'NDA-safe placeholder',
  role: 'Add your approved role',
  summary: 'A reusable structure for explaining product and engineering work without confidential details.',
  skills: caseStudyTemplate.fallbackStack,
};

@Component({
  selector: 'app-case-study',
  imports: [Badge, Button, CaseStudyVisual, Container, RouterLink],
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  readonly slug = input('template');

  protected readonly template = caseStudyTemplate;
  protected readonly project = computed(
    () => projects.find((project) => project.slug === this.slug()) ?? placeholderProject,
  );
  protected readonly relatedProjects = computed(() =>
    projects.filter((project) => project.slug !== this.project().slug).slice(0, 3),
  );
}
