import { Component } from '@angular/core';
import { MailService, IMessage } from './mail.service';
import { Hero } from './hero';
import { LifecycleHooks} from '@angular/compiler/src/lifecycle_reflector';

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
  confirmationMessageColor;

  submitted = false;
  messageColor = 'white';
  constructor(private mailService: MailService) {

  }


  onSubmit(message: IMessage) {
    if (this.message.message !== undefined &&
        this.message.email !== undefined &&
        this.message.name !== undefined &&
        this.message.phone !== undefined) {

      console.log(this.message.message);
      this.submitted = true;
      this.messageColor = 'green';
      this.completionMessage = 'Thank you for reaching out to Reids Trees!';
      window.alert('your message has been sent. Reids trees will get back to you shortly.');
      this.mailService.sendEmail(this.message).subscribe(res => {
        console.log('success', res);
      }, error => {
        console.log('error', error);
      });

     } else {

      this.completionMessage = 'Please fill in all your details';
      this.messageColor = 'red';

    }

  }

  // TODO remove
  get diagnostic() { return JSON.stringify(this.model); }

}
