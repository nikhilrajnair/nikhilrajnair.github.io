import { Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { caseStudies, caseStudyTemplate } from '@content/case-study-template';
import { Project, projects } from '@content/projects';
import { Badge } from '@ui/badge/badge';
import { Button } from '@ui/button/button';
import { CaseStudyVisual } from '@ui/case-study-visual/case-study-visual';
import { Container } from '@ui/container/container';

const placeholderProject: Project = {
  slug: 'template',
  title: 'Case Study Template',
  type: 'NDA-safe placeholder',
  role: 'Add your approved role',
  summary: caseStudyTemplate.summary,
  skills: caseStudyTemplate.tech,
};

@Component({
  selector: 'app-case-study',
  imports: [Badge, Button, CaseStudyVisual, Container, RouterLink],
  templateUrl: './case-study.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './case-study.scss',
})
export class CaseStudy {
  readonly slug = input('template');

  protected readonly content = computed(() => caseStudies[this.slug()] ?? caseStudyTemplate);
  protected readonly project = computed(
    () => projects.find((project) => project.slug === this.slug()) ?? placeholderProject,
  );
  protected readonly relatedProjects = computed(() =>
    projects
      .filter(
        (project) => project.slug !== this.project().slug && Boolean(caseStudies[project.slug]),
      )
      .slice(0, 3),
  );
}
