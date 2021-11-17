import { Component, OnInit } from '@angular/core';
import { BookingPriceService } from 'src/app/shared/booking-price.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';
import { AfricaServiceService } from 'src/app/shared/africa-service.service';
import { MaldivesServiceService } from 'src/app/shared/maldives-service.service';
import { MadagascarServiceService } from 'src/app/shared/madagascar-service.service';
import { SecyhellesServiceService } from 'src/app/shared/secyhelles-service.service';
import { MauritiusServiceService } from 'src/app/shared/mauritius-service.service';
import { ComapnydServiceService } from 'src/app/shared/comapnyd-service.service';
import { ContactComponent } from './../contact/contact.component';
import { ContactServiceService } from 'src/app/shared/contact-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bookingList;
  pricelist;
  maldiveslist;
  madagascarList;
  secyhellesList;
  mauritiusList;
  runninghh;

  companydList;

  

  constructor(public service: AfricaServiceService,
              public maldives: MaldivesServiceService, 
              public madagascar: MadagascarServiceService, 
              public secyhelles: SecyhellesServiceService,
              public mauritius: MauritiusServiceService,
              public compaanyd: ComapnydServiceService,
              public enqu: ContactServiceService, 
              private toastr: ToastrService) { }

  ngOnInit(): void {
    //this.service.getBookingList();
    this.refreshList();
  }

  refreshList()
  {
    this.service.GetAfricaPrices().then(res => this.pricelist = res);   
    this.maldives.GetmaldivesPrices().then(res => this.maldiveslist = res);
    this.madagascar.GetmadaPrices().then(res => this.madagascarList = res);
    this.secyhelles.GetSeychellesPrices().then(res => this.secyhellesList = res);    
    this.mauritius.GetmauritiusPrices().then(res => this.mauritiusList = res);    
    this.compaanyd.GetcompanyDetails().then(res=> this.companydList = res);   
  }

  // showSuccess()
  // {
  //   this.toastr.success('fhulu','Hanyahanya');
  // }


  // refreshList(){
  //   this.service.GetBookingPrices().then(res => this.bookingList = res);
  // }

  insertRecord() {
    this.enqu.PostContactForm().subscribe(
      res => {
         //this.resetForm(form);
         //this.service.refreshList();
      //this.toastr.success('Submitted successfully', 'Doctor Register')
         console.log("Submitted successfully");
       },
       err => { console.log(err); }
     );
   }


  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_pbiqmq6', 'template_5yligzg', e.target as HTMLFormElement, 'user_HBtVc74M9uD7kZ8NBsk2J')
      .then((result: EmailJSResponseStatus) => {
       this.toastr.success('Enquiry Submitted successfully', 'Message Sent');
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  adsd()
  {
    alert("ss");
  }

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
    alert(this.clickMessage);
  }
 

}
