import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Nikhil Raj — Senior Frontend Engineer' },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work').then((page) => page.Work),
    title: 'Work — Nikhil Raj',
  },
  {
    path: 'work/:slug',
    loadComponent: () => import('./pages/case-study/case-study').then((page) => page.CaseStudy),
    title: 'Case Study — Nikhil Raj',
  },
  {
    path: 'writing',
    loadComponent: () => import('./pages/writing/writing').then((page) => page.Writing),
    title: 'Writing — Nikhil Raj',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((page) => page.About),
    title: 'About — Nikhil Raj',
  },
  { path: '**', redirectTo: '' },
];
