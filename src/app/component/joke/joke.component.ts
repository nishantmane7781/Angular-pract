import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent {
  constructor(private jokeService:JokeService){

  }
 
  jokes="Loading Data";
  ngOnInit(){
    this.getAnotherJoke();
  }
  getAnotherJoke(){
   /*  this.jokeService.getJokes().subscribe((data:any)=>{
      this.jokes=data.value
    },(error)=>{
      console.log("ERROR OCCURAD",error);
      this.jokes="ERROR OCCURAD"
    }) */
    this.jokeService.getJokes().subscribe({
      next:(data:any)=>this.jokes=data.value,
      error:(error)=>{console.log("ERROR OCCURED")
        this.jokes="ERROR OCCURED";
      }
    })
  }
}
