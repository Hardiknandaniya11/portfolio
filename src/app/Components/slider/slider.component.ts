import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { EffectFade, Mousewheel, Pagination, Scrollbar, Keyboard } from 'swiper/modules';
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
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1780549111/Aurum_AI_Logo_xf35en.png',
      link: 'https://github.com/Hardiknandaniya11/AurumAI',
      title: 'Aurum AI',
      text: `AurumAI is an AI-powered jewellery visual search and retrieval platform designed to help users discover visually similar jewellery designs using image-based search. The system leverages deep learning-based image embeddings and vector similarity search to identify matching products from large jewellery catalogs with high accuracy.

      The platform combines computer vision, feature extraction, and efficient retrieval techniques to deliver fast and scalable search experiences. AurumAI is being developed as a foundation for future multimodal search capabilities, enabling users to search using images, text descriptions, or a combination of both.`,
      techstack: "Python • PyTorch • ResNet50 • FAISS • FastAPI"
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1780551001/DemandIQ_Logo_hvxhtx.png',
      link: 'https://github.com/Hardiknandaniya11/zone_wise_food_delivery_demand_forecasting',
      title: 'DemandIQ',
      text: `DemandIQ is a machine learning-powered demand forecasting platform designed to predict food delivery demand at the zone level. The system analyzes historical order patterns, temporal trends, weather conditions, and operational factors to generate accurate demand forecasts that support better resource allocation and delivery planning.

      Built on a dataset of 20,000+ records with 30+ engineered features, DemandIQ leverages multiple forecasting approaches including ARIMA, Random Forest, XGBoost, and LightGBM. An ensemble forecasting strategy was developed to improve prediction accuracy and capture complex demand patterns across different geographic zones.`,
      techstack: "Python • Scikit-Learn • XGBoost • Random Forest • FastAPI "
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1780551738/CommerceCore_Logo_wthxmi.png',
      link: 'https://github.com/Hardiknandaniya11/Node-E-Commerce',
      title: 'CommerceCore',
      text: `CommerceCore is a production-inspired e-commerce backend system designed to support essential online shopping operations through a scalable and maintainable architecture. The platform provides secure user authentication, product management, category management, and shopping cart functionality.

      Built using Node.js, TypeScript, Express.js, and MongoDB, the project follows a layered architecture with repository and service patterns, demonstrating best practices in API design, authentication, database management, validation, and backend system development.`,
      techstack: "Node.js • TypeScript • Express.js • MongoDB • Mongoose • JWT • Winston"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Swiper.use([EffectFade, Mousewheel, Pagination, Scrollbar, Keyboard]);
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
        keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
    });
  }

}
