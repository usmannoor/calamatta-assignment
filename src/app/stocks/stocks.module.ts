import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { SharedService } from '../shared/shared.service';
import { StockService } from '../services/stock.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { StockCardToggleComponent } from './stock-card-toggle/stock-card-toggle.component';
import { LoaderService } from '../services/loader.service';

@NgModule({
  declarations: [
    StocksComponent,
    StockCardComponent,
    StockCardToggleComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    StocksRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    SharedService,
    StockService,
    LoaderService
  ],
})
export class StocksModule { }
