import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../theme';
import { Button } from '@ui/button/button';
import { Container } from '@ui/container/container';

@Component({
  selector: 'app-site-header',
  imports: [Button, Container, RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly theme = inject(ThemeService);
}
