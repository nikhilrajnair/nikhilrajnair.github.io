import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skill-group',
  imports: [],
  templateUrl: './skill-group.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './skill-group.scss',
})
export class SkillGroup {
  readonly heading = input.required<string>();
  readonly skills = input.required<readonly string[]>();
}
