import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http:HttpClient) { 
    
  } 
  //alternate syntax := private http =inject(HttpClient)

  getJokes(){
    return this.http.get("https://api.chucknorris.io/jokes/random?category=dev")
  }

}
