import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandComp1Component } from './stand-comp1.component';

describe('StandComp1Component', () => {
  let component: StandComp1Component;
  let fixture: ComponentFixture<StandComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
