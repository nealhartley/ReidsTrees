import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name : 'Jeanne and John',
      image: 'jeanne_john.jpg',
      content: 'We called Reid\'s Trees when our eucalyptus tree started to knock on our neighbours house.  ' +
      'Reid was very pleasant to deal with listening carefully to what we needed and providing us with a tree that' +
      ' looks healthy and is now not dangerous in a storm.  We would be very keen to recommend Reid if you are looking' +
      ' for a professional arborist who is a pleasure to deal with.'
    },
    {
      name: 'Jenny and Robin',
      image: 'jenny_robin.jpg',
      content: 'Our home is our paradise and we needed someone who cared as much for our plants as we do. ' +
      'The best part about using Reids Trees was that they listened to all our needs and delivered 100%' +
      ' I recommend Reids Trees to all of my friends and I would definitely recommend Reids trees to you.'
    },
    ];

  constructor() { }

  ngOnInit() {
  }




}
