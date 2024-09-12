import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
    constructor(public counterService:CounterService){

    }

    getCounter(){
      return this.counterService.getCounter();
    }
    incrCounter(){
      this.counterService.incrementCounter();
    }
}
