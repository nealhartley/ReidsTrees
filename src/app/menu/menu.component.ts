import { Component, OnInit } from '@angular/core';
import { Service } from '../service';
import { SERVICES} from '../services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  services: Service[] = SERVICES;
  constructor() { }

  ngOnInit() {
  }

}
