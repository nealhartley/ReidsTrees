import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name : 'Jeannie and John',
      image: 'jeannie_john.jpg',
      content: 'Reids Trees provides fantastic service and work. We are happy to say we have found the arborists of our dreams.' +
      ' We know ouor trees are going to be well looked after for many years to come.'
    },
    {
      name: 'Jenny and Robin',
      image: 'jenny_robin.jpg',
      content: 'Our home is our paradise and we needed someone who cared as much for our plants as we do. ' +
      'Reids Trees has always come through. They leave our property looking one hundred times better every time they leave.'
    },{
      name : 'Jeannie and John',
      image: 'jeannie_john.jpg',
      content: 'Reids Trees provides fantastic service and work. We are happy to say we have found the arborists of our dreams.' +
      ' We know ouor trees are going to be well looked after for many years to come.'
    },
    {
      name : 'Jeannie and John',
      image: 'jeannie_john.jpg',
      content: 'Reids Trees provides fantastic service and work. We are happy to say we have found the arborists of our dreams.' +
      ' We know ouor trees are going to be well looked after for many years to come.'
    },
    ];

  constructor() { }

  ngOnInit() {
  }




}
