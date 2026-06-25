import { booleanAttribute, Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@ui/button/button';
import { Container } from '@ui/container/container';

@Component({
  selector: 'app-cta-section',
  imports: [Button, Container, RouterLink],
  templateUrl: './cta-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './cta-section.scss',
})
export class CtaSection {
  readonly heading = input.required<string>();
  readonly text = input.required<string>();
  readonly link = input('/work');
  readonly linkLabel = input('View my work');
  readonly external = input(false, { transform: booleanAttribute });
}
