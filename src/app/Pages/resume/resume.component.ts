import { Component } from '@angular/core';
import { PageloaderComponent } from "../../Components/pageloader/pageloader.component";
import { SliderComponent } from "../../Components/slider/slider.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [PageloaderComponent, SliderComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

}
