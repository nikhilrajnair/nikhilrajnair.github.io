import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { caseStudies, caseStudyVisuals } from './content/case-study-template';
import { projects } from './content/projects';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
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

  it('should only link published case studies', () => {
    const linkedProjects = projects.filter((project) => project.detailPath);

    expect(linkedProjects.every((project) => caseStudies[project.slug])).toBeTrue();
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
    const covers = projects.flatMap((project) => (project.coverImage ? [project.coverImage] : []));

    expect(covers.length).toBe(4);
    expect(covers.every((cover) => cover.path.startsWith('images/case-studies/'))).toBeTrue();
    expect(covers.every((cover) => !cover.path.includes('public/'))).toBeTrue();
    expect(covers.every((cover) => cover.alt.trim().length > 0)).toBeTrue();
  });
});
