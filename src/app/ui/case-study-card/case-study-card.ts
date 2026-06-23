import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../content/projects';
import { Badge } from '../badge/badge';

@Component({
  selector: 'app-case-study-card',
  imports: [Badge, RouterLink],
  templateUrl: './case-study-card.html',
  styleUrl: './case-study-card.scss',
})
export class CaseStudyCard {
  readonly project = input.required<Project>();
}
