import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGeneralPortfolioPlansComponent } from './all-general-portfolio-plans.component';

describe('AllGeneralPortfolioPlansComponent', () => {
  let component: AllGeneralPortfolioPlansComponent;
  let fixture: ComponentFixture<AllGeneralPortfolioPlansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGeneralPortfolioPlansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGeneralPortfolioPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
