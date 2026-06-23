import { Component, input } from '@angular/core';
import { Writing } from '../../content/writings';
import { Badge } from '../badge/badge';

@Component({
  selector: 'app-writing-card',
  imports: [Badge],
  templateUrl: './writing-card.html',
  styleUrl: './writing-card.scss',
})
export class WritingCard {
  readonly article = input.required<Writing>();
}
