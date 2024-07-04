import { Component } from '@angular/core';
import { CardProjetoComponent } from '../../shared/card-projeto/card-projeto.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardProjetoComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

}
