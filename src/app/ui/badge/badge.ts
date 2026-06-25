import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'span[appBadge]',
  imports: [],
  templateUrl: './badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './badge.scss',
})
export class Badge {}
