import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecyhellesModel } from './secyhelles-model.model';

@Injectable({
  providedIn: 'root'
})
export class SecyhellesServiceService {
  
  constructor(public http: HttpClient) { }


  


  readonly baseURL = 'http://localhost:45662/api';
  formData: SecyhellesModel = new SecyhellesModel();
  list: SecyhellesModel[];



  GetSeychellesPrices(){
    return this.http.get(this.baseURL+'/secyh').toPromise();
  }
}


/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MadagascarModel } from './madagascar-model.model';

@Injectable({
  providedIn: 'root'
})
export class MadagascarServiceService {

  constructor(public http: HttpClient) { }

  readonly baseURL = 'http://localhost:5252/api';
  formData: MadagascarModel = new MadagascarModel();
  list: MadagascarModel[];



  GetmadaPrices(){
    return this.http.get(this.baseURL+'/madag').toPromise();
  }



}

*/ 