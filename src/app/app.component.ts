import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  public cities= [{
    Id:1, Name:"Ha Noi"},{Id:2, Name:"HCM"
  }]
  onSubmit( value : any){
    console.log(value);
  }
  
} 
