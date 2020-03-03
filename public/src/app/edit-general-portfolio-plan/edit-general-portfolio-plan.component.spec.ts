import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeneralPortfolioPlanComponent } from './edit-general-portfolio-plan.component';

describe('EditGeneralPortfolioPlanComponent', () => {
  let component: EditGeneralPortfolioPlanComponent;
  let fixture: ComponentFixture<EditGeneralPortfolioPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeneralPortfolioPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeneralPortfolioPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
