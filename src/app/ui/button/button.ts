import { Component, input } from '@angular/core';

@Component({
  selector: 'a[appButton], button[appButton]',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  host: {
    '[class.secondary]': "variant() === 'secondary'",
  },
})
export class Button {
  readonly variant = input<'primary' | 'secondary'>('primary');
}
