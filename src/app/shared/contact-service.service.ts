import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ContactModel } from './contact-model.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  readonly baseURL = 'http://localhost:45662/api/ContactForm';
  formData: ContactModel = new ContactModel();

  constructor(private http: HttpClient) { }

  PostContactForm(){
  return this.http.post(this.baseURL, this.formData);
  }

}
