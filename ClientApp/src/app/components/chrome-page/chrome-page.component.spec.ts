import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromePageComponent } from './chrome-page.component';

describe('ChromePageComponent', () => {
  let component: ChromePageComponent;
  let fixture: ComponentFixture<ChromePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChromePageComponent]
    });
    fixture = TestBed.createComponent(ChromePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
