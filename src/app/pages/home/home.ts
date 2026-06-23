import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageLayout } from '../../layout/page-layout/page-layout';

@Component({
  selector: 'app-home',
  imports: [PageLayout, RouterLink],
  templateUrl: './home.html',
})
export class Home {}
