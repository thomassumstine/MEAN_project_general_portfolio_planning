import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-general-portfolio-plan',
  templateUrl: './edit-general-portfolio-plan.component.html',
  styleUrls: ['./edit-general-portfolio-plan.component.css']
})
export class EditGeneralPortfolioPlanComponent implements OnInit {

  general_portfolio_planToEdit = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.getGeneral_Portfolio_Plan(params.id)
          .subscribe((data: any) => {

            this.general_portfolio_planToEdit = data.general_portfolio_plan;
          });
      });
  }

  handleSubmit() {
    this._httpService.updateGeneral_Portfolio_Plan(this.general_portfolio_planToEdit._id, this.general_portfolio_planToEdit)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/']);
        }
      });
  }

  handleCancel() {
    this._router.navigate(['/']);
  }

}