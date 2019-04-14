import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template:`
     <h4>{{title}}</h4>
     <button (mouseover)="OnClick($event)">Click me </button>
     <input type="text" #name />
     `
})
export class TutorialComponent{
    public title="This Tutorial conponent";
  
    OnClick(value){
        console.log(value);
    }
}