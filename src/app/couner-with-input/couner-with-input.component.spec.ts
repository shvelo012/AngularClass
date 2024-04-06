import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounerWithInputComponent } from './couner-with-input.component';

describe('CounerWithInputComponent', () => {
  let component: CounerWithInputComponent;
  let fixture: ComponentFixture<CounerWithInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounerWithInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounerWithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
