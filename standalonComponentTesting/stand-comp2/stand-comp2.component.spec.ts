import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandComp2Component } from './stand-comp2.component';

describe('StandComp2Component', () => {
  let component: StandComp2Component;
  let fixture: ComponentFixture<StandComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
