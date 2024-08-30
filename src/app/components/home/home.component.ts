import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  carouselItems = [
    {
      image: '../../assets/images/new-deal/deal3.jpg',
      location: 'Italy',
      title: 'Rome Historical',
      stars: [1, 1, 1, 1, 1], // This can be used to show the number of stars
      reviews: 18,
      price: '$190.00',
      duration: '9 Days Tours'
    },
    // Add more items as needed
  ];

  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

}
