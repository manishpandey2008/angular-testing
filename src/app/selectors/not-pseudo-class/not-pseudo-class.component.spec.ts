import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPseudoClassComponent } from './not-pseudo-class.component';

describe('NotPseudoClassComponent', () => {
  let component: NotPseudoClassComponent;
  let fixture: ComponentFixture<NotPseudoClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotPseudoClassComponent]
    });
    fixture = TestBed.createComponent(NotPseudoClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
