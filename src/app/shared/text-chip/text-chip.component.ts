import { Component, Input } from '@angular/core';
import { SvgComponent } from "../svg/svg.component";

@Component({
  selector: 'app-text-chip',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './text-chip.component.html',
  styleUrl: './text-chip.component.scss'
})
export class TextChipComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
}
