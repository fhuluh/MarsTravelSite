import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/shared/contact-service.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MauritiusServiceService } from 'src/app/shared/mauritius-service.service';

@Component({
  selector: 'app-mauritius',
  templateUrl: './mauritius.component.html',
  styleUrls: ['./mauritius.component.css']
})
export class MauritiusComponent implements OnInit {

  mauritiusList;

  constructor(public service: ContactServiceService,
    public mauritius: MauritiusServiceService) { }

  ngOnInit(): void {
    this.refreshList();
  }

  
refreshList(){
  this.mauritius.GetmauritiusPrices().then(res => this.mauritiusList = res);
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





