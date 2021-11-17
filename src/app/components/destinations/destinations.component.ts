import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { BookingRequestService } from 'src/app/shared/booking-request.service';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { MadagascarServiceService } from 'src/app/shared/madagascar-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit { 

  hoveredDate: NgbDate | null = null;
  madagascarList;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(public service: ContactServiceService,
    private calendar: NgbCalendar, 
    public formatter: NgbDateParserFormatter,
    public madagascar: MadagascarServiceService,
    private toastr: ToastrService,) {

      this.fromDate = calendar.getToday();
      this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

     }

  ngOnInit(): void {
    this.refreshList();
   }  
  
   refreshList(){
    this.madagascar.GetmadaPrices().then(res => this.madagascarList = res);    
  }
  

  // @ViewChild('searchInput') searchInput: ElementRef;
  // @ViewChild('fullnameInput') fullnameInput: ElementRef;
  // @ViewChild('emailInput') emailInput: ElementRef;
  // @ViewChild('telInput') telInput: ElementRef;
  // @ViewChild('adultInput') adultInput: ElementRef;
  // @ViewChild('childInput') childInput: ElementRef;
  // @ViewChild('checkinInput') checkinInput: ElementRef;
  // @ViewChild('checkoutInput') checkoutInput: ElementRef;
  // @ViewChild('room_preferenceInput') room_preferenceInput: ElementRef;
  // @ViewChild('messageInput') messageInput: ElementRef;

  @ViewChild('name') inputName; 
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_pbiqmq6', 'template_ld2cvgn', e.target as HTMLFormElement, 'user_HBtVc74M9uD7kZ8NBsk2J')
      .then((result: EmailJSResponseStatus) => { 
        console.log(result.text);
        this.toastr.success("Enquiry Sent", 'Successfull!');   

   

      }, (error) => {console.log(error.text);
        this.toastr.error('Record Not Saved', "UnSuccessfull!")
      });
  }
 

  // clearSearchInput(){
  //    this.searchInput.nativeElement.value = '';

  //    this.searchInput.nativeElement.value = '';
  //    this.fullnameInput.nativeElement.value = '';
  //    this.emailInput.nativeElement.value = '';
  //    this.telInput.nativeElement.value = '';
  //    this.adultInput.nativeElement.value = '';
  //    this.childInput.nativeElement.value = '';
  //    this.checkinInput.nativeElement.value = '';
  //    this.checkoutInput.nativeElement.value = '';
  //    this.room_preferenceInput.nativeElement.value = '';
  //    this.messageInput.nativeElement.value = '';

  // }




  
onDateSelection(date: NgbDate) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}

 



isHovered(date: NgbDate) {
  return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
}

isInside(date: NgbDate) {
  return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
}

isRange(date: NgbDate) {
  return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
}

validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
  const parsed = this.formatter.parse(input);
  return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
}

images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}










