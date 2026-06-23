import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';
import { caseStudyVisuals } from './content/case-study-template';
import { projects, secondaryProjects } from './content/projects';

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
    expect(projects.every((project) => project.detailPath === `/work/${project.slug}`)).toBeTrue();
  });

  it('should define all NDA-safe visual presets', () => {
    expect(Object.keys(caseStudyVisuals)).toEqual([
      'erpIntegration',
      'productAnalytics',
      'releaseAutomation',
      'insuranceJourney',
    ]);
    expect(Object.values(caseStudyVisuals).every((visual) => visual.items.length > 0)).toBeTrue();
  });

  it('should use accessible public-folder paths for case study covers', () => {
    const covers = [...projects, ...secondaryProjects].filter((project) => project.coverImage);

    expect(covers.length).toBe(9);
    expect(covers.every((project) => project.coverImage?.startsWith('images/'))).toBeTrue();
    expect(covers.every((project) => !project.coverImage?.includes('public/'))).toBeTrue();
    expect(covers.every((project) => !project.coverImage?.includes('src/assets/'))).toBeTrue();
    expect(covers.every((project) => project.coverAlt?.trim())).toBeTrue();
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
        'app-project-card.compact .unavailable-action',
      ) ?? [],
    );
    expect(caseStudyLinks.length).toBe(projects.length);
    expect(
      caseStudyLinks.every((link) => link.textContent?.trim() === 'View case study'),
    ).toBeTrue();
    expect(
      projectLinks.every((link) => link.textContent?.trim().startsWith('View project')),
    ).toBeTrue();
    expect(projectLinks.every((link) => link.getAttribute('href'))).toBeTrue();
    expect(unavailableProjects.length).toBe(secondaryProjects.length - projectLinks.length);
    expect(
      unavailableProjects.every((project) => project.textContent?.trim() === 'Details coming soon'),
    ).toBeTrue();

    for (const project of projects) {
      await harness.navigateByUrl(project.detailPath!);
      expect(router.url).toBe(project.detailPath!);
    }
  });
});
