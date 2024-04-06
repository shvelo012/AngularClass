import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePlaygroundComponent } from './directive-playground.component';

describe('DirectivePlaygroundComponent', () => {
  let component: DirectivePlaygroundComponent;
  let fixture: ComponentFixture<DirectivePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivePlaygroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectivePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
