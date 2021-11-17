import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { SecyhellesServiceService } from 'src/app/shared/secyhelles-service.service';

@Component({
  selector: 'app-secyhelles',
  templateUrl: './secyhelles.component.html',
  styleUrls: ['./secyhelles.component.css']
})
export class SecyhellesComponent implements OnInit {
  secyhellesList;

  constructor(public service: ContactServiceService,
              public secyhelles: SecyhellesServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }



  refreshList(){  
    this.secyhelles.GetSeychellesPrices().then(res => this.secyhellesList = res);
        
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





