import { Component } from '@angular/core';
import { PageloaderComponent } from "../../Components/pageloader/pageloader.component";
import { SliderComponent } from "../../Components/slider/slider.component";
import { CertificateSliderComponent  } from "../../Components/certificate-slider/certificate-slider.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [PageloaderComponent, SliderComponent, CertificateSliderComponent ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
