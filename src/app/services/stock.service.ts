import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { QuoteResponse } from '../interfaces/stock.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {

  constructor(
    private http: HttpClient
  ) {}

  getStockExchangeDetails(symbols: string): Promise<QuoteResponse> {
    const url = `${environment.baseUrl}market/v2/get-quotes`;
    const params = new HttpParams()
      .set('symbols', symbols)
      .set('region', 'US');
    return this.http.get<QuoteResponse>(url, {params}).toPromise();
  }
}
