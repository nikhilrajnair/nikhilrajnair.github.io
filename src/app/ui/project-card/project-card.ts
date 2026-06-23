import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../content/projects';
import { Badge } from '../badge/badge';
import { Button } from '../button/button';

@Component({
  selector: 'app-project-card',
  imports: [Badge, Button, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  host: {
    '[class.compact]': 'compact()',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly compact = input(false, { transform: booleanAttribute });
}
