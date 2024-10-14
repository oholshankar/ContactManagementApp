import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAddReactiveComponent } from './contact-add-reactive.component';

describe('ContactAddReactiveComponent', () => {
  let component: ContactAddReactiveComponent;
  let fixture: ComponentFixture<ContactAddReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactAddReactiveComponent]
    });
    fixture = TestBed.createComponent(ContactAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
