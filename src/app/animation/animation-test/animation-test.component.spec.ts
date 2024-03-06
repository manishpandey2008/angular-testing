import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTestComponent } from './animation-test.component';

describe('AnimationTestComponent', () => {
  let component: AnimationTestComponent;
  let fixture: ComponentFixture<AnimationTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationTestComponent]
    });
    fixture = TestBed.createComponent(AnimationTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
