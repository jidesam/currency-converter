import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../serivce/currency-service.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.scss']
})
export class CurrencyConvertComponent implements OnInit {
  allCurrency : any
  constructor( private currency: CurrencyServiceService) { }

  ngOnInit(): void {
    this.currency.getAllCurrency().subscribe((data)=>{
        console.log(data)
        this.allCurrency = data
    })

  }
  

}
