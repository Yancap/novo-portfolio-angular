import { Component } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { SvgComponent } from "../../shared/svg/svg.component";

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [ButtonComponent, SvgComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}
