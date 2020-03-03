import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-general-portfolio-plans',
  templateUrl: './all-general-portfolio-plans.component.html',
  styleUrls: ['./all-general-portfolio-plans.component.css']
})
export class AllGeneralPortfolioPlansComponent implements OnInit {

  general_portfolio_plans: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getGeneral_Portfolio_Plans()
      .subscribe((data: any) => {
        this.general_portfolio_plans = data.general_portfolio_plans;
      });
  }

  editGeneral_Portfolio_Plan(general_portfolio_planId: string) {
    this._router.navigate(['/edit/', general_portfolio_planId]);
  }

  deleteGeneral_Portfolio_Plan(general_portfolio_planId: string) {
    this._httpService.deleteGeneral_Portfolio_Plan(general_portfolio_planId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.general_portfolio_plans.length; i++) {
          if (this.general_portfolio_plans[i]._id === general_portfolio_planId) {
            return this.general_portfolio_plans.splice(i, 1);
          }
        }
      });
  }
}