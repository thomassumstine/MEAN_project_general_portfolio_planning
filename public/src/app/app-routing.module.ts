import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGeneralPortfolioPlanComponent } from './new-general-portfolio-plan/new-general-portfolio-plan.component';
import { EditGeneralPortfolioPlanComponent } from './edit-general-portfolio-plan/edit-general-portfolio-plan.component';
import { AllGeneralPortfolioPlansComponent } from './all-general-portfolio-plans/all-general-portfolio-plans.component';


const routes: Routes = [
  {
    path: 'edit/:id',
    component: EditGeneralPortfolioPlanComponent
  },
  {
    path: 'new',
    component: NewGeneralPortfolioPlanComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: AllGeneralPortfolioPlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }