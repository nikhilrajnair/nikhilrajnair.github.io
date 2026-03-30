import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { DevtoArticle, experiences, profile, projects, skillGroups } from './portfolio.data';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);

  protected readonly profile = profile;
  protected readonly skillGroups = skillGroups;
  protected readonly experiences = experiences;
  protected readonly projects = projects;
  protected readonly articles = signal<DevtoArticle[]>([]);
  protected readonly theme = signal<'light' | 'dark'>('dark');
  protected readonly photoLoadError = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.initializeTheme();
    void this.loadArticles();
  }

  protected toggleTheme(): void {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  protected onPhotoError(): void {
    this.photoLoadError.set(true);
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light' || savedTheme === 'dark') {
      this.applyTheme(savedTheme);
      return;
    }

    this.applyTheme(prefersDark ? 'dark' : 'light');
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.theme.set(theme);
  }

  private async loadArticles(): Promise<void> {
    try {
      const data = await firstValueFrom(this.http.get<DevtoArticle[]>('data/devto-articles.json'));
      this.articles.set(data ?? []);
    } catch {
      this.articles.set([]);
    }
  }
}
