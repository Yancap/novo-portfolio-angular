import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public cards = [
    {
      title: 'Bacharelado em Engenharia de Software',
      description: 'UNINTER',
      tags: ['2024Q3 - Atualmente'],
    },
    {
      title: 'Técnico em Desenvolvimento de Sistemas',
      description: 'Fundação Bradesco  ',
      tags: ['2022 - 2024Q3', 'Concluido'],
    },
  ];
}
