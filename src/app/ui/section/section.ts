import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Container } from '../container/container';

@Component({
  selector: 'app-section',
  imports: [Container],
  templateUrl: './section.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './section.scss',
})
export class Section {
  readonly eyebrow = input('');
  readonly heading = input.required<string>();
  readonly intro = input('');
}
