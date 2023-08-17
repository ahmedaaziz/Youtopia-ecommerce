import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-products',
  templateUrl: './sort-products.component.html',
  styleUrls: ['./sort-products.component.scss']
})
export class SortProductsComponent {
@Output() selectedValue = new EventEmitter();;



detectChanges(event:any){
  this.selectedValue.emit(event);
}

}
