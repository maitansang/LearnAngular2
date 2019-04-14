import {Component} from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
    selector: 'my-tutorial',
    template:`
    <h2>{{title}}</h2>
    <p [ngClass]="{classOne:cone,classTwo:ctwo}">This ngClass apply style</p>
    <button (click)="taggle()">taggle</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">This paragraph will be apply to ngStyle</p>
    `,

    styles:[
        `
        .classOne{
            color: white;
        }
        .classTwo{
            background-color:black;
        }
        `
    ]
})
export class TutorialComponent{
    public cone = true;
    public ctwo=true;
    public style="italic";
    public size="30px";
  taggle(){
     this.cone = !this.cone;
     this.ctwo = !this.ctwo;
  }

}