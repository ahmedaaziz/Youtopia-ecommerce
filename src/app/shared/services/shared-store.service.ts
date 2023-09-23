import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedStoreService {
  currentCartLength$:BehaviorSubject<any> = new BehaviorSubject(null)

  constructor() { }
    getCurrentCarteLength(){
      return this.currentCartLength$;
    }

  setCarteLength(value:number){
    return this.currentCartLength$.next(value);
  }

}
