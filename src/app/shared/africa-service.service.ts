import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AfricaModel } from './africa-model.model';

@Injectable({
  providedIn: 'root'
})
export class AfricaServiceService {



  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:45662/api';
  
  formData: AfricaModel = new AfricaModel();

  list: AfricaModel[];


  GetAfricaPrices(){
    return this.http.get(this.baseURL+'/afri').toPromise();
  }

  
  getPriceList(){
    return this.http.get(this.baseURL+'/Price').toPromise();
  }  
  
  refreshList() {
    this.http.get(this.baseURL).toPromise()
      .then(res =>this.list = res as AfricaModel[]);
  }
}


