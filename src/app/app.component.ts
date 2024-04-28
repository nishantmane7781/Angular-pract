import { Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { UserData } from '../model/Userdata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserProfileComponent,CommonModule],
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
