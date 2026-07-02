import { booleanAttribute, Component, computed, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '@content/projects';
import { Badge } from '@ui/badge/badge';

const MAX_STACK_ITEMS = 4;

@Component({
  selector: 'app-project-card',
  imports: [Badge, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.compact]': 'compact()',
  },
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly compact = input(false, { transform: booleanAttribute });

  protected readonly stackLine = computed(() => {
    const skills = this.project().skills;
    if (!skills.length) {
      return '';
    }
    const shown = skills.slice(0, MAX_STACK_ITEMS).join(' · ');
    const extra = skills.length - MAX_STACK_ITEMS;
    return extra > 0 ? `${shown} +${extra}` : shown;
  });
}
