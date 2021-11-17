import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialPrice } from './special-price.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialPriceService {

  constructor(public http: HttpClient) { }

  readonly baseURL = 'http://localhost:45662/api';
  formData: SpecialPrice = new SpecialPrice();
  list: SpecialPrice[];

  GetBookingPrices(){
    return this.http.get(this.baseURL+'/special').toPromise();
  }

  getPriceList(){
    return this.http.get(this.baseURL+'/Price').toPromise();
  }

  refreshList() {
    this.http.get(this.baseURL).toPromise().then(res =>this.list = res as SpecialPrice[]);
  }

}



