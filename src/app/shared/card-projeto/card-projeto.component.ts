import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.scss'
})
export class CardProjetoComponent {
  @Input() projeto!: IProjeto;
}
