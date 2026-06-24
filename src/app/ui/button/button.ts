import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'a[appButton], button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: {
    '[class.secondary]': "variant() === 'secondary'",
  },
})
export class Button {
  readonly variant = input<'primary' | 'secondary'>('primary');
}
