import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-prices',
  templateUrl: './filter-prices.component.html',
  styleUrls: ['./filter-prices.component.scss']
})
export class FiterPricesComponent {
// pricesRange = [
//   '100 - 200'
// ]
@Output('selectedPrice') selectedPrice:EventEmitter<string> = new EventEmitter();



detectChanges(value:any){
  this.selectedPrice.emit(value)
}

}
