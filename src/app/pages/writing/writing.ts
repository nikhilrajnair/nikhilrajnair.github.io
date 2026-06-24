import { Component, ChangeDetectionStrategy } from '@angular/core';
import { writings } from '../../content/writings';
import { Container } from '../../ui/container/container';
import { WritingCard } from '../../ui/writing-card/writing-card';

@Component({
  selector: 'app-writing',
  imports: [Container, WritingCard],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './writing.html',
})
export class Writing {
  protected readonly writings = writings.filter((article) => article.published !== 'Coming soon');
}
