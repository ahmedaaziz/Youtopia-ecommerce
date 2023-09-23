import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedStoreService {
  currentCartLength$ :BehaviorSubject<number> = new BehaviorSubject(0)

  constructor() { }
    getCurrentCarteLength(){
      return this.currentCartLength$.asObservable();
    }

  setCarteLength(value:number){
    return this.currentCartLength$.next(value);
  }

}
