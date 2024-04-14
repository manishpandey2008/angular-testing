import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiStateHandleComponent } from './api-state-handle.component';

describe('ApiStateHandleComponent', () => {
  let component: ApiStateHandleComponent;
  let fixture: ComponentFixture<ApiStateHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiStateHandleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiStateHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
