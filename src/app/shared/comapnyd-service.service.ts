import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { companydModel } from './companyd-model.model';

@Injectable({
  providedIn: 'root'
})
export class ComapnydServiceService {

  constructor(public http: HttpClient) { }
  readonly baseURL = 'http://localhost:45662/api';
  

  formData: companydModel = new companydModel();
  list: companydModel[];


  GetcompanyDetails(){
    return this.http.get(this.baseURL+'/companyd').toPromise();
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