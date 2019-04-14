import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template:`
     <h4>h4 TutorialComponent</h4>
     <h3 [class.redColor]="applyClass">ApplyClass</h3> 
     <h4 [style.color]="blueColor?'blue':'orange'">Apply style</h4>
     `,
    styles:[`.redColor{
        color: red;
    }`]
})
export class TutorialComponent{
    public applyClass=true;
    public blueColor =true;
}