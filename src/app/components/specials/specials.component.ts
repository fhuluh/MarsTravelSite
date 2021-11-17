import { Component, OnInit } from '@angular/core';
import { SpecialPriceService } from 'src/app/shared/special-price.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {


  PriceList;

  constructor(private http: HttpClient,
    public service: SpecialPriceService,
    private router:Router){}

  GetuserDetails()
  {
    return this.http.get('http://localhost:5252/api/employee');
  }
  title = "1+1";
 

  refreshList(){
    this.service.GetBookingPrices().then(res => this.PriceList = res);
  }

  
  ngOnInit(): void {
    
    this.refreshList();
  }

  
  onSelect(edit: any){
    this.router.navigate(['/admin/edit', edit.id])
  }


}


