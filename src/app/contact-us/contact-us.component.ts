import { Component } from '@angular/core';
import { MailService, IMessage } from './mail.service';
import { Hero } from './hero';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  powers = ['really smart', 'dumb', 'poop', 'ick'];

  model = new Hero(18, 'Name...', 'Phone...', 'Email...', this.powers[2], 'What is your enquiry?');

  completionMessage = '';

  message: IMessage = {};

  submitted = false;
  constructor(private mailService: MailService) {

  }

  onSubmit(message: IMessage) {
    this.submitted = true;
    this.completionMessage = 'Thank you for reaching out to Reids Trees';
    this.mailService.sendEmail(this.message).subscribe(res => {
     console.log('success', res);
    }, error => {
      console.log('error', error);
    });
  }

  // TODO remove
  get diagnostic() { return JSON.stringify(this.model); }

}
