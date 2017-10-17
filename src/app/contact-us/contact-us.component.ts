import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  powers = ['really smart', 'dumb', 'poop', 'ick'];

  model = new Hero(18, 'DR DRE', this.powers[2], 'RipperRoo');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO remove
  get diagnostic() { return JSON.stringify(this.model); }

}
