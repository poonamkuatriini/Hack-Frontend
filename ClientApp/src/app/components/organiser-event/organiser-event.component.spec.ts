import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiserEventComponent } from './organiser-event.component';

describe('OrganiserEventComponent', () => {
  let component: OrganiserEventComponent;
  let fixture: ComponentFixture<OrganiserEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganiserEventComponent]
    });
    fixture = TestBed.createComponent(OrganiserEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
