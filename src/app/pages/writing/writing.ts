import { Component } from '@angular/core';
import { writings } from '../../content/writings';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-writing',
  imports: [PageLayout],
  templateUrl: './writing.html',
})
export class Writing {
  protected readonly writings = writings;
}
