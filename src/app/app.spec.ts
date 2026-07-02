import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from '@app/app';
import { routes } from '@app/app.routes';
import { caseStudyVisuals } from '@content/case-study-template';
import { projects, secondaryProjects } from '@content/projects';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes, withComponentInputBinding())],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the app shell', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-site-header')).toBeTruthy();
    expect(compiled.querySelector('main')).toBeTruthy();
    expect(compiled.querySelector('app-site-footer')).toBeTruthy();
  });

  it('should link every case study through the existing detail route', () => {
    expect(projects.every((project) => project.detailPath === `/work/${project.slug}`)).toBe(true);
  });

  it('should define all NDA-safe visual presets', () => {
    expect(Object.keys(caseStudyVisuals)).toEqual([
      'erpIntegration',
      'productAnalytics',
      'releaseAutomation',
      'insuranceJourney',
    ]);
    expect(Object.values(caseStudyVisuals).every((visual) => visual.items.length > 0)).toBe(true);
  });

  it('should use accessible public-folder paths for case study covers', () => {
    const covers = [...projects, ...secondaryProjects].filter((project) => project.coverImage);

    expect(covers.length).toBe(9);
    expect(covers.every((project) => project.coverImage?.startsWith('images/'))).toBe(true);
    expect(covers.every((project) => !project.coverImage?.includes('public/'))).toBe(true);
    expect(covers.every((project) => !project.coverImage?.includes('src/assets/'))).toBe(true);
    expect(covers.every((project) => project.coverAlt?.trim())).toBe(true);
  });

  it('should render working case links and honest project availability', async () => {
    const harness = await RouterTestingHarness.create();
    const router = TestBed.inject(Router);
    await harness.navigateByUrl('/work');

    const caseStudyLinks = Array.from(
      harness.routeNativeElement?.querySelectorAll<HTMLAnchorElement>(
        'app-project-card:not(.compact) a',
      ) ?? [],
    );
    const projectLinks = Array.from(
      harness.routeNativeElement?.querySelectorAll<HTMLAnchorElement>(
        'app-project-card.compact a',
      ) ?? [],
    );
    const unavailableProjects = Array.from(
      harness.routeNativeElement?.querySelectorAll<HTMLElement>(
        'app-project-card.compact .unavailable',
      ) ?? [],
    );
    expect(caseStudyLinks.length).toBe(projects.length);
    expect(caseStudyLinks.every((link) => link.textContent?.trim() === 'View case study')).toBe(
      true,
    );
    expect(projectLinks.every((link) => link.textContent?.trim().startsWith('View project'))).toBe(
      true,
    );
    expect(projectLinks.every((link) => link.getAttribute('href'))).toBe(true);
    expect(unavailableProjects.length).toBe(secondaryProjects.length - projectLinks.length);
    expect(
      unavailableProjects.every((project) => project.textContent?.trim() === 'Details coming soon'),
    ).toBe(true);

    for (const project of projects) {
      await harness.navigateByUrl(project.detailPath!);
      expect(router.url).toBe(project.detailPath!);
    }
  });
});
