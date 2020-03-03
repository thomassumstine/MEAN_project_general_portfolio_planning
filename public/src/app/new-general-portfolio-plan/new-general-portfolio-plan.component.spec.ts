import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGeneralPortfolioPlanComponent } from './new-general-portfolio-plan.component';

describe('NewGeneralPortfolioPlanComponent', () => {
  let component: NewGeneralPortfolioPlanComponent;
  let fixture: ComponentFixture<NewGeneralPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGeneralPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGeneralPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
