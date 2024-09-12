import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { UserData } from '../model/Userdata';
import { JokeComponent } from './component/joke/joke.component';
import { AComponent } from './component/a/a.component';
import { B1Component } from './component/b1/b1.component';
import { B2Component } from './component/b2/b2.component';
import { WidgetComponent } from './component/widget/widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule,JokeComponent,AComponent,B1Component,B2Component,WidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'First APP';
  udata=[
    {name:'Nishant gaga',desig:'Engineer',salary:50000},
    {name:'Fantom',desig:'Sr.Engineer',salary:51000},
    {name:'Ronin',desig:'Jr.Engineer',salary:30000}]

    receiveData(value:UserData){
      console.log("--------------->",value)
    }

    
}
