import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  countryName:string='';
  constructor() { }
  dataEmitter=new Subject<string>;
  //   dataEmitter=new EventEmitter<string>();
    DataEmitterEvent(data:string) {
  // this.dataEmitter.emit(data);
  this.dataEmitter.next(data);
    }
}
