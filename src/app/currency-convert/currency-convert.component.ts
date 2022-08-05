import { Component, OnInit } from '@angular/core';
import { CurrencyServiceService } from '../serivce/currency-service.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.scss']
})
export class CurrencyConvertComponent implements OnInit {
  allCurrency : any
  exchangeVal! : number 
  constructor( private currency: CurrencyServiceService) { }

  ngOnInit(): void {
    this.currency.getAllCurrency().subscribe((data)=>{
        console.log(data)
        this.allCurrency = data
    })
  }
  
  convertMoney() {
    let base = document.getElementById("base") as any
   let  baseValue = base.value

   let quote = document.getElementById("quote") as any
   let  quoteValue = quote.value

   console.log(baseValue)
   console.log(quoteValue)
   this.currency.convertCurrency(baseValue).subscribe((data)=>{
      console.log(data[baseValue][quoteValue])
      const exchange = data[baseValue][quoteValue]

      let num = document.getElementById("num") as any
      let  numValue = num.value

      console.log(exchange*numValue)
      this.exchangeVal = exchange*numValue


   })
  }

}
