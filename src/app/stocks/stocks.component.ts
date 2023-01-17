import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { QuoteResponse, StockInterface } from '../interfaces/stock.interface';
import { LoaderService } from '../services/loader.service';
import { POLLING_TIMER, stocksSymbols } from '../shared/shared.consts';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StocksComponent implements OnInit {

  stocks: StockInterface[] = [];
  stocksListSymbols: string[] = stocksSymbols;
  stockListMap: object = {};
  stocksList: StockInterface[] = [];
  isLoading = false;

  loaderSubscription: Subscription;
  interval: Observable<number>;
  timerSubject = new Subject();

  constructor(
    private stockService: StockService,
    private loaderService: LoaderService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initialize();
    this.initializeStockPolling();
    this.fetchStockUpdates();
    this.subscribeToLoader();
  }

  private getActiveStocksList(): string[] {
    return this.stocksList
      .filter((x: StockInterface) => x.isActive)
      .map((y: StockInterface) => y.symbol);
  }

  private initialize(): void {
    this.stocksListSymbols.forEach((symbol, index) => {
      this.stockListMap[symbol] = index;
    });
  }

  private async fetchStockUpdates(): Promise<void> {
    try {
      this.loaderService.toggleLoader(true);
      const symbol = this.stocksList.length ? this.getActiveStocksList() : this.stocksListSymbols;
      const response: QuoteResponse = await this.stockService.getStockExchangeDetails(symbol.join(','));
      this.updateStockList(response.quoteResponse.result);
    } catch ( e ) {
    } finally {
      this.loaderService.toggleLoader(false);
      this.changeDetection.detectChanges();
    }
  }

  trackStock(): StockInterface[] {
    return this.stocksList ? this.stocksList : undefined;
  }

  private initializeStockPolling(): void {
    if (!this.interval) {
      this.interval = interval(POLLING_TIMER);
      this.interval
        .pipe(
          takeUntil(this.timerSubject)
        )
        .subscribe(async () => {
          await this.fetchStockUpdates();
        });
    }
  }

  private subscribeToLoader(): void {
    this.loaderSubscription = this.loaderService.loader
      .subscribe(value => {
        this.isLoading = value;
      });
  }

  private updateStockList(result: StockInterface[]): void {
    // maintain original array
    this.stocksList = this.stocksList.length ?
      this.stocksList.map(obj => result.find(res => res.symbol === obj.symbol) || obj) : result;
    this.stocksList = this.stocksList.map(stock => {
      stock.isActive = stock.isActive === false ? stock.isActive : true;
      return stock;
    });
  }
}
