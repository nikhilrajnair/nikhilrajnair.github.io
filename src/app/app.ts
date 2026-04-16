import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import mixpanel from 'mixpanel-browser';
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
  private readonly destroyRef = inject(DestroyRef);

  protected readonly profile = profile;
  protected readonly skillGroups = skillGroups;
  protected readonly experiences = experiences;
  protected readonly projects = projects;
  protected readonly articles = signal<DevtoArticle[]>([]);
  protected readonly theme = signal<'light' | 'dark'>('dark');
  protected readonly photoLoadError = signal(false);
  protected readonly activeSection = signal<string>('about');
  protected readonly showScrollTop = signal(false);
  protected readonly currentYear = new Date().getFullYear();

  private readonly sectionIds = ['about', 'skills', 'experience', 'projects', 'articles', 'contact'];

  ngOnInit(): void {
    this.initializeMixpanel();
    this.identifyUser();
    this.trackPageView();
    this.initializeTheme();
    void this.loadArticles();
    this.setupScrollSpy();
  }

  protected toggleTheme(): void {
    const nextTheme = this.theme() === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  }

  protected onPhotoError(): void {
    this.photoLoadError.set(true);
  }

  protected trackMenuClick(menuItem: string): void {
    this.trackEvent('Menu Click', {
      menu_item: menuItem,
      page_url: window.location.href,
      user_id: this.getOrCreateUserId(),
    });
  }

  protected trackEmailMeClick(): void {
    this.trackContactConversion('email');
    this.trackEvent('CTA Click', {
      cta_name: 'Email Me',
      destination: `mailto:${this.profile.contact.email}`,
      location: 'hero',
      user_id: this.getOrCreateUserId(),
    });
  }

  protected trackLinkedInClick(location: string): void {
    this.trackEvent('CTA Click', {
      cta_name: 'LinkedIn',
      destination: this.profile.contact.linkedin,
      location,
      user_id: this.getOrCreateUserId(),
    });
  }

  protected trackReadOnDevtoClick(articleUrl: string, articleTitle: string): void {
    this.trackEvent('Article Click', {
      cta_text: 'Read on dev.to',
      article_url: articleUrl,
      article_title: articleTitle,
      user_id: this.getOrCreateUserId(),
    });
  }

  protected trackContactConversion(channel: string): void {
    this.trackEvent('Conversion', {
      'Conversion Type': 'contact_click',
      'Conversion Value': 1,
      channel,
    });
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

  private initializeMixpanel(): void {
    mixpanel.init('b323169855ecb6d28acfb8b93bd4b32f', {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage',
      autocapture: true,
      record_sessions_percent: 100,
      ignore_dnt: true,
    });
  }

  private identifyUser(): void {
    const userId = this.getOrCreateUserId();
    mixpanel.identify(userId);
    mixpanel.people.set({
      $name: 'Portfolio Visitor',
      $email: 'visitor@example.com',
      plan: 'Free',
    });
  }

  private getOrCreateUserId(): string {
    const key = 'portfolio-user-id';
    const existing = localStorage.getItem(key);
    if (existing) {
      return existing;
    }

    const created = `anon_${Date.now()}`;
    localStorage.setItem(key, created);
    return created;
  }

  private trackEvent(eventName: string, properties: Record<string, unknown>): void {
    mixpanel.track(eventName, properties);
  }

  private trackPageView(): void {
    this.trackEvent('Page View', {
      page_url: window.location.href,
      page_title: document.title,
      user_id: this.getOrCreateUserId(),
    });
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private setupScrollSpy(): void {
    const onScroll = (): void => {
      this.showScrollTop.set(window.scrollY > 400);

      const topbarHeight = 80;
      for (const id of [...this.sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= topbarHeight) {
          this.activeSection.set(id);
          return;
        }
      }
      this.activeSection.set('about');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', onScroll));
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
