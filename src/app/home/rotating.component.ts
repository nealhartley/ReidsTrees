import { Component, AfterViewInit } from '@angular/core';
import { Service } from '../service';
import { SERVICES} from '../services';


@Component({
  selector: 'app-rotating',
  templateUrl: './rotating.component.html',
  styleUrls: ['./rotating.component.css']
})

export class RotatingComponent implements AfterViewInit {
    services: Service[] = SERVICES;
    index = 0;
    firstMove = true;
    elements: NodeListOf<Element> = document.getElementsByClassName('rotation_body');

    ngAfterViewInit(): void {
      this.elements[1].classList.add('moveRight');
      this.firstMove = false;
    }

    moveLeft(): void {
      this.log('starting moveleft');
      this.index --;
      this.indexCheck();
      this.log('index check complete');
      this.move();
      this.log('movement complete');
    }

    moveRight(): void {
      this.log('starting moveright');
      this.index ++;
      this.indexCheck();
      this.log('index check complete');
      this.move();
      this.log('movement complete');
    }

    indexCheck(): void {
      this.log('checking index');
      if (this.index >= this.elements.length) { this.index = 0;
      } else if (this.index < 0) { this.index = this.elements.length;
      }
    }

    move(): void {
      this.log('moving');
      let indexLeft = 0;
      let indexRight = 0;

      if ( this.index === this.elements.length - 1 ) {
        indexRight = 0;
        this.log('right index set at: 0');
      } else {
        indexRight = this.index + 1;
        this.log('right index set at: ' + indexRight);
      }

      if ( this.index === 0) {
        indexLeft = this.elements.length - 1;
        this.log('index left set at: ' + indexLeft);
      } else {
        indexLeft = this.index - 1;
        this.log('index left set at: ' + indexLeft);
      }

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
        console.log('removing active');
        document.getElementsByClassName('active')[0].classList.remove('active');
      }

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
    }

    log(message: string): void {
      console.log(message);
    }
}
