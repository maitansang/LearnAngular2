import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <h1>Hello{{title}}</h1>
  <img [src]="image"/>
  <my-tutorial></my-tutorial>
  <input type ="text" [value]="welcomeText"/>
  `, 
  styles:['h1{color:green}']
  
})
export class AppComponent {
  //title = 'Mai Tấn Sang I love U';
  public title="TEDU"
  //property binding
  public image ="http://lorempixel.com/300/300";
  public welcomeText="Welcome to Angular 2"
} 
