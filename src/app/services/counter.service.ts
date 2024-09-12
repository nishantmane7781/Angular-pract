import { Injectable, Signal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  //this one is writable signal
  private count=signal(0);

  doubleCount:Signal<number>=computed(()=>this.count()*2);

  //for debugging use effect its like useEffect render based on changes 
  constructor(){
    effect(()=>{
      console.log("Count: ",this.count()," Double count: ",this.doubleCount());
    })
  }

  getCounter(){
    return this.count();
  }
  incrementCounter(){
    //set use when you want to pass value directly. dont use it when value depends upon previous value
    //this.count.set(5)

    this.count.update((oldValue)=>{
      return oldValue+1;
    })


  }
}
