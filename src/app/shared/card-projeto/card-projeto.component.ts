import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {
  @Input() projeto!: IProjeto;
}
