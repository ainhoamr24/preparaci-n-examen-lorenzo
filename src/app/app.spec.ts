import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the dashboard with the expected metric cards', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const subtitles = Array.from(compiled.querySelectorAll('.c-tarjeta__subtitulo'));

    expect(compiled.querySelector('pagina-dashboard')).not.toBeNull();
    expect(compiled.textContent).toContain('MODELS');
    expect(compiled.textContent).toContain('RANGE');
    expect(compiled.textContent).toContain('2.48M');
    expect(compiled.textContent).toContain('$874.19');
    expect(subtitles).toHaveLength(5);
    expect(subtitles.every((subtitle) => subtitle.textContent?.trim() === 'last 30 days')).toBe(
      true,
    );
  });
});
