import { Component, Input, OnInit } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjetoComponent implements OnInit {
  @Input() projeto!: IProjeto;

  ngOnInit(): void {
    console.log(this.projeto);
  }
}
