import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../ui/container/container';

@Component({
  selector: 'app-site-footer',
  imports: [Container, RouterLink],
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './site-footer.scss',
})
export class SiteFooter {
  protected readonly currentYear = new Date().getFullYear();
}
