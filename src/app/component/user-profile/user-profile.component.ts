import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, isSignal, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../../../model/Userdata';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function formatName(value:string){
return "Hi "+value 
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,CountrycodePipe,HighlightDirective],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnChanges,OnInit,AfterViewInit {
   @Input({transform:formatName}) name!:string
   @Input({}) desig!:string
   @Input({transform:numberAttribute}) salary!:number

   //from chield to parent
   @Output() myEvent=new EventEmitter<UserData>()


  phoneNumber=8484003880
   sendData(){
    this.myEvent.emit({name:"Mane Nishant",salary:3000000})
   }
    namee="nishant"
    status="Unmarried"
    age=40
    
    isButtonDisabled=false
    twoWayBindingValue="Nishant Mane" 
  
    onChange(e:Event){
      const value=(e.target as HTMLInputElement).value
      this.twoWayBindingValue=value
    }

    /** display array object on ui */
     userData=[
      {name:"ramesh",isSingal:true,age:30},
      {name:"suresh",isSingal:false,age:31},
      {name:"ghanesh",isSingal:true,age:32},
    ]


//how to pick html elemnt like query-selector
@ViewChild("myHeading")heading?:ElementRef

    // life cycle methods
    constructor(){
      console.log("constructor called", this.name,this.heading?.nativeElement.textContent)
    }

    ngAfterViewInit(): void {
      console.log("Inside NgAfter view Init",this.name,this.heading?.nativeElement.textContent)
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log("On changes callled ",changes,this.heading?.nativeElement.textContent)
    }

    ngOnInit(){
      console.log("onInit called", this.name,this.heading?.nativeElement.textContent)
    }

    ngOnDestroy(): void {
      console.log("destroy called", this.name,this.heading?.nativeElement.textContent)
    }


    
}
