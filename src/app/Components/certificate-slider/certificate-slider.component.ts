import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import Swiper from 'swiper';
import { EffectCoverflow, Pagination, Navigation, Keyboard } from 'swiper/modules';

interface Certificate {
  image: string;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-certificate-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate-slider.component.html',
  styleUrl: './certificate-slider.component.scss'
})
export class CertificateSliderComponent implements AfterViewInit {
  selectedCertificate: Certificate | null = null;

  certificates: Certificate[] = [
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1781126106/explorre_machine_learning_using_python_xzxa7p.png',
      title: 'Explore Machine Learning Using Python'
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1781126106/ml-skl-tf_aqli0r.png',
      title: 'Hands-on Machine Learning with Scikit-learn and TensorFlow 2.0',
      link:'#'
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1781126105/AS_DMT_CERTIFICATE_usrjdy.jpg',
      title: 'Advance Statistics And Data Mining for Data Science',
      link:'#'
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1781126106/DM-with-python-cl-rs_k07lqs.png',
      title: 'Data Mining with Python: Implementing Classification and Regression',
      link:'#'
    },
    {
      image: 'https://res.cloudinary.com/drhnas8um/image/upload/v1781126105/degree_certificate_bt23ih.jpg',
      title: 'Bachelors Degree',
      link:'#'
    }
  ];

  ngAfterViewInit(): void {

    // new Swiper('.certificateSwiper', {

    //   modules: [EffectCoverflow, Pagination, Navigation, Keyboard],
    //   effect: 'coverflow',
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: 'auto',
    //   loop: true,

    //   coverflowEffect: {
    //     rotate: 0,
    //     stretch: 25,
    //     depth: 400,
    //     modifier: 1,
    //     slideShadows: false
    //   },

    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //     dynamicBullets: true,
    //   },

    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },

    //   keyboard: {
    //     enabled: true,
    //     onlyInViewport: false,
    //   },

    // });

    new Swiper('.certificateSwiper', {
      modules: [EffectCoverflow, Pagination, Navigation, Keyboard],
      effect: 'coverflow',
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 12,
      observer: true,
      observeParents: true,
      updateOnWindowResize: true,

      coverflowEffect: {
        rotate: 0,
        stretch: 86,
        depth: 340,
        modifier: 1.55,
        slideShadows: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });

  }

  openCertificate(certificate: Certificate): void {
    this.selectedCertificate = certificate;
  }

  closeCertificate(): void {
    this.selectedCertificate = null;
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    this.closeCertificate();
  }

}
