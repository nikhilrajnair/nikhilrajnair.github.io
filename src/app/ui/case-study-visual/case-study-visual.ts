import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CaseStudyVisualVariant } from '@content/case-study-template';

@Component({
  selector: 'app-case-study-visual',
  imports: [],
  templateUrl: './case-study-visual.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './case-study-visual.scss',
})
export class CaseStudyVisual {
  readonly variant = input.required<CaseStudyVisualVariant>();
  readonly heading = input.required<string>();
  readonly items = input.required<readonly string[]>();
}
