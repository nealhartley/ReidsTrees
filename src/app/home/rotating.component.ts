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
    firstMove = true;
    elements: NodeListOf<Element> = document.getElementsByClassName('rotation_body');

    moveLeft(): void {
      console.log('moving_left ' + this.index);
      this.clearClasses(false, true, true);
      this.elements.item(this.index).classList.add('moveLeft');
      if (this.index === 0) {
        this.index = this.services.length - 1;
      } else {
        this.index --;
      }
      this.move();

    }

    moveRight(): void {
      console.log('moving_right ' + this.index)
      this.clearClasses(false, true, true);;
      this.elements.item(this.index).classList.add('moveRight');
      if (this.index === this.services.length - 1) {
        this.index = 0;
      } else {
        this.index ++;
      }
      this.move();
    }

    move(): void {
      console.log('moving ');
      this.clearClasses(true, false, false);
      this.elements.item(this.index).classList.add('active');
    }

    // clear classes removes certain classes depending on the booleans handed to it
    // booleans are named after the classes that will be removed if that bool is true
    clearClasses(active: boolean, moveLeft: boolean, moveRight: boolean): void {
      if (active) {
        console.log(document.getElementsByClassName('active'));
        document.getElementsByClassName('active')[0].classList.remove('active');
      }
      if (!this.firstMove) {
        if (moveLeft) {
          console.log(document.getElementsByClassName('moveLeft'));

          try { document.getElementsByClassName('moveLeft')[0].classList.remove('moveLeft');
          } catch (e) {
            console.log(e);
          }
        }

        if (moveRight) {
          console.log(document.getElementsByClassName('moveRight'));
          try { document.getElementsByClassName('moveRight')[0].classList.remove('moveRight');
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        this.firstMove = false;
      }
    }
}
