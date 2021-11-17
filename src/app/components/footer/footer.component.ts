import { Component, OnInit } from '@angular/core';
import { AfricaServiceService } from 'src/app/shared/africa-service.service';
import { ComapnydServiceService } from 'src/app/shared/comapnyd-service.service';
import { MadagascarServiceService } from 'src/app/shared/madagascar-service.service';
import { MaldivesServiceService } from 'src/app/shared/maldives-service.service';
import { MauritiusServiceService } from 'src/app/shared/mauritius-service.service';
import { SecyhellesServiceService } from 'src/app/shared/secyhelles-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
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
              public compaanyd: ComapnydServiceService) { }

  ngOnInit(): void {
    //this.service.getBookingList();
    this.refreshList();
  }

  refreshList(){
    this.service.GetAfricaPrices().then(res => this.pricelist = res);   

    this.maldives.GetmaldivesPrices().then(res => this.maldiveslist = res);

    this.madagascar.GetmadaPrices().then(res => this.madagascarList = res);

    this.secyhelles.GetSeychellesPrices().then(res => this.secyhellesList = res);
    
    this.mauritius.GetmauritiusPrices().then(res => this.mauritiusList = res);
    
    this.compaanyd.GetcompanyDetails().then(res=> this.companydList = res);    
    
  }
}
