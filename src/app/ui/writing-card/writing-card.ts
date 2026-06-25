import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { Writing } from '@content/writings';
import { Badge } from '@ui/badge/badge';

@Component({
  selector: 'app-writing-card',
  imports: [Badge],
  templateUrl: './writing-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './writing-card.scss',
})
export class WritingCard {
  readonly article = input.required<Writing>();
}
