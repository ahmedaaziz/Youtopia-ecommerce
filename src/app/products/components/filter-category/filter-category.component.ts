import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrls: ['./filter-category.component.scss']
})
export class FilterCategoryComponent {
@Input('data') category:string = '';
@Input('index') index!:number;
@Output('selectedCategory') selectedCategory:EventEmitter<'string'> = new EventEmitter();



detectChanges(event:any){
  this.selectedCategory.emit(event)
}

}
