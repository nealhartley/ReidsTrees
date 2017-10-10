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
      this.index --;
      this.indexCheck();
      this.move();
    }

    moveRight(): void {
      this.indexCheck();
      this.index ++;
      this.move();
    }

    indexCheck(): void {
      if (this.index > this.elements.length) { this.index = 0;
      } else if (this.index < 0) { this.index = this.elements.length;
      }
    }

    move(): void {
      console.log(' moving ');
      let indexLeft = 0;
      let indexRight = 0;

      if ( this.index === this.elements.length) {
        indexRight = 0;
      } else {indexRight = this.index + 1; }

      if ( this.index === 0) {
        indexLeft = this.elements.length;
      } else { indexLeft = this.index - 1; }

      this.clearClasses(false, true, true);

      this.elements[indexLeft].classList.add('moveLeft');
      this.elements[indexRight].classList.add('moveRight');
      // set object at index to be active: i,e in the center
      this.clearClasses(true, false, false);
      this.elements[this.index].classList.add('active');

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
