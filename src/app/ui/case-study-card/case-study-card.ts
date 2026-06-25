import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@content/projects';
import { Badge } from '@ui/badge/badge';

@Component({
  selector: 'app-case-study-card',
  imports: [Badge, RouterLink],
  templateUrl: './case-study-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './case-study-card.scss',
})
export class CaseStudyCard {
  readonly project = input.required<Project>();
}
