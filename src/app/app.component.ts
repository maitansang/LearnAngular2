import { Component, ViewChild } from '@angular/core';
import {TutorialComponent} from './tutorial.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <h1>Hello{{title}}</h1>
  Agree: {{agree}}. Disgree: {{disgree}}
  <input type="text" #textName (keyup) = "0"/>
  <br/>
  <button (click) = "changeName()">Change Name</button>
  <my-tutorial *ngFor=" let person of names" [name]="person" (onVote)="parentVote($event)"></my-tutorial>
  `,
  
})
export class AppComponent {
  public title = "Mai Tấn Sang"
  public agree: number = 0;
  public disgree: number = 0;
  public names = ['Mr A','Mr B','Mrs C','Mrs D'];
  
  @ViewChild(TutorialComponent)
  private tutorialComponent: TutorialComponent;

  parentVote(agree: boolean) {
    if(agree) this.agree++;
    else this.disgree++;
  } 
  changeName(){
    this.tutorialComponent.setName('Change name in Parent');
  }

} 
