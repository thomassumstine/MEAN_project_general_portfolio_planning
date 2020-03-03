import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGeneralPortfolioPlanComponent } from './new-general-portfolio-plan/new-general-portfolio-plan.component';
import { EditGeneralPortfolioPlanComponent } from './edit-general-portfolio-plan/edit-general-portfolio-plan.component';
import { AllGeneralPortfolioPlansComponent } from './all-general-portfolio-plans/all-general-portfolio-plans.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    NewGeneralPortfolioPlanComponent,
    EditGeneralPortfolioPlanComponent,
    AllGeneralPortfolioPlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
