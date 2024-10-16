import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TabViewModule,
    CommonModule,
    AboutComponent,
    ResumeComponent],
  animations: [
    trigger('slideInOut', [
      state('in', style({ height: '*', opacity: 1 })),
      transition(':enter', [
        style({ height: '0', opacity: 0 }),
        animate('300ms ease-in')
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ height: '0', opacity: 0 }))
      ])
    ]), 
    trigger('fadeInOut', [
      transition(':enter', [  // Fade in
        style({ opacity: 0 }),  // Starting point
        animate('500ms ease-in', style({ opacity: 1 }))  // Fade in effect
      ]),
      // transition(':leave', [  // Fade out
      //   animate('100ms ease-out', style({ opacity: 0 }))  // Fade out effect
      // ])
    ])
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  activeTab: string = 'about';
  isVisible: boolean = true;
  innerWidth: any;
  showDetailContent: any = 'Show Details';
  showButtonFontSize: string = '13px';
  showButtonPadding: string = '10px 20px';

  constructor(private sanitizer: DomSanitizer) {} 

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.changeShowDetailContent()

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.changeShowDetailContent()
  }

  changeShowDetailContent() {
    if(this.innerWidth < 1230) {
      this.isVisible = false;
    }else {
      this.isVisible = true;
    }

    if (this.innerWidth > 630) {
      this.showDetailContent = "Show Details"
      this.showButtonFontSize = '13px';
      this.showButtonPadding = '10px 20px';
    } else {
      let svgContent: string = `<svg fill="#FFDB70" width="15px" height="15px" viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><path d="M8.5 15.313a1.026 1.026 0 0 1-.728-.302l-6.8-6.8a1.03 1.03 0 0 1 1.455-1.456L8.5 12.828l6.073-6.073a1.03 1.03 0 0 1 1.455 1.456l-6.8 6.8a1.026 1.026 0 0 1-.728.302z"/></svg>`;

      this.showDetailContent = this.sanitizer.bypassSecurityTrustHtml(svgContent);
      this.showButtonFontSize = '0px';
      this.showButtonPadding = '6px 12px';
    }
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleProfile() {
    this.isVisible = !this.isVisible;
  }

}
