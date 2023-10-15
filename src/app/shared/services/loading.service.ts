import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() {}

  getLoader(){
    return this.loadingSubject.asObservable();
  }

  setLoader(value: boolean){
    this.loadingSubject.next(value)
  }
}
