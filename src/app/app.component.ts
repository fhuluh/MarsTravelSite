import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
 {
  title = 'MarsTravelSite';

  formattedaddress=" ";
  options=
    {
      componentRestrictions:
      {
        country:["AU"]
      }
    }
    public AddressChange(address: any) 
    {
     //setting address from API to local variable
     this.formattedaddress=address.formatted_address
    }
}
