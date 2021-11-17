import { Component, Injectable, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpecialPriceService } from 'src/app/shared/special-price.service';
import { SpecialServiceService } from 'src/app/shared/special-service.service';

import {FormBuilder, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, retry } from 'rxjs/operators';
@Injectable({
providedIn: 'root'
})

@Component({
  selector: 'app-ospecial',
  templateUrl: './ospecial.component.html',
  styleUrls: ['./ospecial.component.css']
})
export class OspecialComponent implements OnInit {
  
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required]
  });
  stepperOrientation: Observable<StepperOrientation>;
    
  
  PriceList;

  constructor(private http: HttpClient,
    public service: SpecialPriceService,
    public servicePut: SpecialServiceService,
    private toastr: ToastrService,
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver
    )
    {
      this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
    .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
    }
  
    GetuserDetails()
    {
    return this.http.get('http://localhost:5252/api/employee');
    }


  title = "1+1";

  ngOnInit(): void {  
    this.refreshList();
  }
  
  refreshList(){
    this.service.GetBookingPrices().then(res => this.PriceList = res);
  }


  insertRecord() 
  {
    this.servicePut.PostSpecialForm().subscribe
    (
     res => 
     {
        this.service.refreshList();        
        this.toastr.success(res.toString(), 'Successfull!');        
        this.refreshList();
     },
     err => {
              this.toastr.error('Record Not Saved', "UnSuccessfull!")
            }
    );
  }



  showSuccess()
  {
    // this.toastr.error('fhulu','Hanyahanya');
  }

  
 

   people: number;
   onSubmit()
   {
     return this.people;  
   }            

   Totadults: number;
   AdultonSubmit()
   {
     return this.Totadults;  
   }  

   Totkids: number;
   KidsonSubmit()
   {
     return this.Totkids;  
   }  

   Totdays: number;
   daysSubmit()
   {
     return this.Totdays;
   }

   name: string = '';
   setValue() {
    this.name = ""+this.name;
    //console.log(this.name);
    alert(this.name);
  }


}








