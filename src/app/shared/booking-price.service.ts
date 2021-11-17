import { Injectable } from '@angular/core';

import { BookingPrice } from './booking-price.modele';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingPriceService {

  constructor(public http: HttpClient) { }

  readonly baseURL = 'http://localhost:45662/api';
  formData: BookingPrice = new BookingPrice();
  list: BookingPrice[];


  GetBookingPrices(){
    return this.http.get(this.baseURL+'/Price').toPromise();
  }

  getBookingList(){
    return this.http.get(this.baseURL+'/Price').toPromise();
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as BookingPrice[]);
  }

}
