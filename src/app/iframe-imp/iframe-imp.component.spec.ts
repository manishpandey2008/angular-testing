import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeImpComponent } from './iframe-imp.component';

describe('IframeImpComponent', () => {
  let component: IframeImpComponent;
  let fixture: ComponentFixture<IframeImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IframeImpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IframeImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
