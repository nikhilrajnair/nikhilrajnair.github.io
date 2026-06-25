import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from '@ui/button/button';
import { Container } from '@ui/container/container';

@Component({
  selector: 'app-site-header',
  imports: [Button, Container, RouterLink, RouterLinkActive],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './site-header.scss',
})
export class SiteHeader {}
