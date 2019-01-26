import { TestBed, async } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';

describe('page-not-found', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageNotFoundComponent
      ],
    }).compileComponents();
  }));

  it('should create the dashboard', () => {
    const fixture = TestBed.createComponent(PageNotFoundComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
