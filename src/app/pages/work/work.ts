import { Component } from '@angular/core';
import { projects } from '../../content/projects';
import { Container } from '../../ui/container/container';
import { ProjectCard } from '../../ui/project-card/project-card';

@Component({
  selector: 'app-work',
  imports: [Container, ProjectCard],
  templateUrl: './work.html',
})
export class Work {
  protected readonly projects = projects;
}
