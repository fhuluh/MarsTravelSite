import { Component, OnInit } from '@angular/core';


import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public service: ContactServiceService) { }

  ngOnInit(): void {
  }

 insertRecord() {
   this.service.PostContactForm().subscribe(
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
        this.insertRecord();
        console.log(result.text);
      },(error) => {
        console.log(error.text);
      });
  }

}


