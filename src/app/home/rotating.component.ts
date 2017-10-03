import { Component } from '@angular/core';
import { Service } from '../service';
import { SERVICES} from '../services';

@Component({
  selector: 'app-rotating',
  templateUrl: './rotating.component.html',
  styleUrls: ['./rotating.component.css']
})

export class RotatingComponent {
    services: Service[] = SERVICES;
    index = 0;
    elements: NodeListOf<Element> = document.getElementsByClassName('rotation_body');

    moveLeft(): void {
      console.log('moving_left ' + this.index);
      this.elements.item(this.index).classList.add('moveLeft');
      this.index --;
      this.move();

    }

    moveRight(): void {
      console.log('moving_right ' + this.index);
      this.elements.item(this.index).classList.add('moveRight');
      this.index ++;
      this.move();
    }

    move(): void {
      console.log('moving ');
      this.elements.item(this.index).classList.add('active');
    }
}
