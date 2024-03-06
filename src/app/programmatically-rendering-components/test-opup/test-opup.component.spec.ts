import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOpupComponent } from './test-opup.component';

describe('TestOpupComponent', () => {
  let component: TestOpupComponent;
  let fixture: ComponentFixture<TestOpupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestOpupComponent]
    });
    fixture = TestBed.createComponent(TestOpupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
