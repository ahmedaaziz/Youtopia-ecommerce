import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {faChevronUp} from '@fortawesome/free-solid-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input() data:any = {};
favorite = faHeart;
up = faChevronUp;
down = faChevronDown;

}
