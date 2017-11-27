import { Component, OnInit } from '@angular/core';
import { RotatingComponent } from './rotating.component';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('SlideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(120%,0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  menuState: string = 'out';
  toggleMenu() {
    // if statement that toggles the value
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
  }

}
