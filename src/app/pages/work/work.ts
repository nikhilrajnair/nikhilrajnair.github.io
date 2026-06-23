import { Component } from '@angular/core';
import { projects, secondaryProjects } from '../../content/projects';
import { Container } from '../../ui/container/container';
import { ProjectCard } from '../../ui/project-card/project-card';
import { Section } from '../../ui/section/section';

@Component({
  selector: 'app-work',
  imports: [Container, ProjectCard, Section],
  templateUrl: './work.html',
})
export class Work {
  protected readonly projects = projects;
  protected readonly secondaryProjects = secondaryProjects;
}
