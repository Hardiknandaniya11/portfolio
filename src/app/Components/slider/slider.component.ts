import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {

  slides = [
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1733982900/portfolio/iuphqaylilc5hqzzixca.jpg',
      link: 'https://github.com/Hardiknandaniya11/Node-E-Commerce',
      title: 'E-Commerce',
      text: 'This e-commerce platform is built using Node.js, Express, MongoDB, and microservices architecture. The system is divided into independent services for user management, product catalog, order processing, and payment integration. Each service is deployed and scaled independently, ensuring flexibility and high performance. The platform allows users to browse products, add items to the cart, place orders, and process payments securely. Event-driven communication between services and message brokers ensures smooth data flow and fault tolerance across the platform.'
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1733982851/portfolio/qvhjwfs1n949xr57jb0o.jpg',
      link: 'https://github.com/Hardiknandaniya11/Login-System',
      title: 'Login System',
      text: 'A robust user authentication system built with Node.js, Express, MongoDB, and JWT. It supports user signup and login, The system ensures both security and a smooth user experience.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Swiper.use([EffectFade, Mousewheel, Pagination, Scrollbar]);
    new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      },
      scrollbar: { draggable: true },
    });
  }

}
