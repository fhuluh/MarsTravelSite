import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MauritiusModel } from './mauritius-model.model';

@Injectable({
  providedIn: 'root'
})
export class MauritiusServiceService {

  constructor(public http: HttpClient) { }



  readonly baseURL = 'http://localhost:45662/api';

  formData: MauritiusModel = new MauritiusModel();
  
  list: MauritiusModel[];



  GetmauritiusPrices(){
    return this.http.get(this.baseURL+'/mauri').toPromise();
  }
}


/*


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecyhellesModel } from './secyhelles-model.model';

@Injectable({
  providedIn: 'root'
})
export class SecyhellesServiceService {
  
  constructor(public http: HttpClient) { }

  readonly baseURL = 'http://localhost:5252/api';
  formData: SecyhellesModel = new SecyhellesModel();
  list: SecyhellesModel[];

  GetSeychellesPrices(){
    return this.http.get(this.baseURL+'/secyh').toPromise();
  }
}



*/