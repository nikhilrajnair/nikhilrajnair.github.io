import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-case-study',
  imports: [PageLayout, RouterLink],
  templateUrl: './case-study.html',
})
export class CaseStudy {}
