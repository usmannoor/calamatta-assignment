import { Component, OnInit, Input } from '@angular/core';
import { StockInterface } from '../../interfaces/stock.interface';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss'],
})

export class StockCardComponent implements OnInit {

  @Input() stockDetail: StockInterface;

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onToggleValueChanged(value: boolean): void {
    this.stockDetail.isActive = value;
  }
}
