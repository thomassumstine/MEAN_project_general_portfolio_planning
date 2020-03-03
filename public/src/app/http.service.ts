import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getGeneral_Portfolio_Plans() {
    // longform
    const observable = this._http.get('/api/general_portfolio_plans');
    return observable;
  }

  getGeneral_Portfolio_Plan(id) {
    return this._http.get('/api/general_portfolio_plans/' + id);
  }

  createGeneral_Portfolio_Plan(newGeneral_Portfolio_Plan) {
    return this._http.post('/api/general_portfolio_plans', newGeneral_Portfolio_Plan);
  }

  updateGeneral_Portfolio_Plan(id, editedGeneral_Portfolio_Plan) {
    return this._http.put('/api/general_portfolio_plans/' + id, editedGeneral_Portfolio_Plan);
  }

  deleteGeneral_Portfolio_Plan(id) {
    return this._http.delete('/api/general_portfolio_plans/' + id);
  }
}