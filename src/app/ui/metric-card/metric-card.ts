import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  imports: [],
  templateUrl: './metric-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './metric-card.scss',
})
export class MetricCard {
  readonly value = input.required<string>();
  readonly label = input.required<string>();
  readonly detail = input('');
}
