import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../content/projects';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-work',
  imports: [PageLayout, RouterLink],
  templateUrl: './work.html',
})
export class Work {
  protected readonly projects = projects;
}
