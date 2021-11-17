import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { AfricaServiceService } from 'src/app/shared/africa-service.service';

@Component({
  selector: 'app-africa',
  templateUrl: './africa.component.html',
  styleUrls: ['./africa.component.css']
})
export class AfricaComponent implements OnInit {


  africalist;
  constructor(public service: ContactServiceService,
             public africa: AfricaServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  
  refreshList(){
    this.africa.GetAfricaPrices().then(res => this.africalist = res);  
   }



   
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_pbiqmq6', 'template_ld2cvgn', e.target as HTMLFormElement, 'user_HBtVc74M9uD7kZ8NBsk2J')
      .then((result: EmailJSResponseStatus) => { 
        console.log(result.text);
      }, (error) => {console.log(error.text);
      });
  }


}




