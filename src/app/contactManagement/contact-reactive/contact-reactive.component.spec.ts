import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReactiveComponent } from './contact-reactive.component';

describe('ContactReactiveComponent', () => {
  let component: ContactReactiveComponent;
  let fixture: ComponentFixture<ContactReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactReactiveComponent]
    });
    fixture = TestBed.createComponent(ContactReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
