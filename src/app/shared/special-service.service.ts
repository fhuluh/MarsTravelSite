import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpecialModel } from './special-model.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialServiceService {


  readonly baseURL = 'http://localhost:45662/api/specialsbook';
  formData: SpecialModel = new SpecialModel();
  constructor(private http: HttpClient) { }

  PostSpecialForm() {
    return this.http.post(this.baseURL, this.formData);
  }
}



