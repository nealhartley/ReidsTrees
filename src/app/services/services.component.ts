import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../services';
import { Service} from '../service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services: Service[] = SERVICES;
}
