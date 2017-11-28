import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { SERVICES} from '../services';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('SlideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(140%,0,0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class MenuComponent implements OnInit {
  services: Service[] = SERVICES;
  constructor() { }

  title = 'app';
  menuState: string = 'out';
  toggleMenu() {
    // if statement that toggles the value
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
  }

}
