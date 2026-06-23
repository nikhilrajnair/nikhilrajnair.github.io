import { Component, input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  imports: [],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.scss',
})
export class MetricCard {
  readonly value = input.required<string>();
  readonly label = input.required<string>();
  readonly detail = input('');
}
