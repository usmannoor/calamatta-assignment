import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stock-card-toggle',
  templateUrl: './stock-card-toggle.component.html',
  styleUrls: ['./stock-card-toggle.component.scss']
})
export class StockCardToggleComponent {

  @Input() switchValue = true;

  @Output() toggleChange = new EventEmitter<boolean>();

  constructor() { }

  toggleChanged(value: boolean): void {
    this.toggleChange.emit(value);
  }

}
