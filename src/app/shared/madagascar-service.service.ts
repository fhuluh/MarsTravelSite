import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MadagascarModel } from './madagascar-model.model';

@Injectable({
  providedIn: 'root'
})
export class MadagascarServiceService {

  constructor(public http: HttpClient) { }

  readonly baseURL = 'http://localhost:45662/api';
  formData: MadagascarModel = new MadagascarModel();
  list: MadagascarModel[];



  GetmadaPrices(){
    return this.http.get(this.baseURL+'/madag').toPromise();
  }

}


/*

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MaldivesModel } from './maldives-model.model';


@Injectable({
  providedIn: 'root'
})
export class MaldivesServiceService {

  constructor(public http: HttpClient) { }


  readonly baseURL = 'http://localhost:5252/api';
  formData: MaldivesModel = new MaldivesModel();
  list: MaldivesModel[];


  GetmaldivesPrices(){
    return this.http.get(this.baseURL+'/mald').toPromise();
  }



  refrshMald() {
    this.http.get(this.baseURL).toPromise()
      .then(res =>this.list = res as MaldivesModel[]);
  }


}
*/