import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyServiceService {
baseUrl = environment.apiUrl1
  constructor(private http : HttpClient) { 
    
  }
  // getCurrency
  getAllCurrency (): Observable<any>{
    return this.http.get<any>('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
  }

  convertCurrency(base: any): Observable<any> {
    return this.http.get<any>(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${base}.json`)
  }
  
}
