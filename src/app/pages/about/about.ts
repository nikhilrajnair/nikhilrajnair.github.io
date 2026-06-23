import { Component } from '@angular/core';
import { skillGroups } from '../../content/skills';
import { Container } from '../../ui/container/container';
import { CtaSection } from '../../ui/cta-section/cta-section';
import { Section } from '../../ui/section/section';
import { SkillGroup } from '../../ui/skill-group/skill-group';

@Component({
  selector: 'app-about',
  imports: [Container, CtaSection, Section, SkillGroup],
  templateUrl: './about.html',
})
export class About {
  protected readonly skillGroups = skillGroups;
}
