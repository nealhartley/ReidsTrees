import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  powers = ['really smart', 'dumb', 'poop', 'ick'];

  model = new Hero(18, 'Name...', this.powers[2], 'What is your enquiry?');

  message = '';

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.message = 'Thank you for reaching out to Reids Trees';
  }

  // TODO remove
  get diagnostic() { return JSON.stringify(this.model); }

}
