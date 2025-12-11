import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { SvgComponent } from './shared/svg/svg.component';
import { PresentationComponent } from './modules/presentation/presentation.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { MyFunctionsComponent } from './modules/my-functions/my-functions.component';
import { ProfessionalCareerComponent } from './modules/professional-career/professional-career.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SvgComponent,
    PresentationComponent,
    AboutMeComponent,
    MyFunctionsComponent,
    ProfessionalCareerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'novo-portfolio-angular';
  menuIsOpen = false;
  tabMenuSelected = 'presentation';

  @ViewChild('presentationRef')
  presentationRef!: ElementRef<HTMLDivElement>;

  @ViewChild('aboutRef')
  aboutRef!: ElementRef<HTMLDivElement>;

  @ViewChild('functionsRef')
  functionsRef!: ElementRef<HTMLDivElement>;

  @ViewChild('careerRef')
  careerRef!: ElementRef<HTMLDivElement>;

  @ViewChild('techniquesRef')
  techniquesRef!: ElementRef<HTMLDivElement>;

  @ViewChild('studiesRef')
  studiesRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    document.addEventListener('scroll', () => {
      this.validationOffsetScroll();
    });
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.validationOffsetScroll();
        this.menuIsOpen = false;
      }
    });
  }

  validationOffsetScroll() {
    const presentationOffsetTop = this.presentationRef.nativeElement.offsetTop;
    const aboutOffsetTop = this.aboutRef.nativeElement.offsetTop;
    const functionsOffsetTop = this.functionsRef.nativeElement.offsetTop;
    const careerOffsetTop = this.careerRef.nativeElement.offsetTop;
    const techniquesOffsetTop = this.techniquesRef.nativeElement.offsetTop;
    const studiesOffsetTop = this.studiesRef.nativeElement.offsetTop;

    if (
      window.scrollY >= presentationOffsetTop &&
      window.scrollY < aboutOffsetTop
    ) {
      this.tabMenuSelected = 'presentation';
    } else if (window.scrollY < functionsOffsetTop) {
      this.tabMenuSelected = 'about';
    } else if (window.scrollY < careerOffsetTop) {
      this.tabMenuSelected = 'functions';
    } else if (window.scrollY < techniquesOffsetTop) {
      this.tabMenuSelected = 'career';
    } else if (window.scrollY < studiesOffsetTop) {
      this.tabMenuSelected = 'techniques';
    } else {
      this.tabMenuSelected = 'studies';
    }
  }
  toggleMenu() {
    this.validationOffsetScroll();
    this.menuIsOpen = !this.menuIsOpen;
  }
}
