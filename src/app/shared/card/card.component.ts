import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() data: {
    title: string;
    description: string;
    tags: string[];
  } = {
    title: '',
    description: '',
    tags: []
  };
}
