import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [SvgComponent],
  template: `
    <button [disabled]="disabled" [class]="'btn-' + size" >
      @if (icon) {
        <app-svg [name]="icon" />
      }
      <ng-content />
    </button>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public size: 'sm' | 'md' | 'lg' | 'xs' = 'md';
  @Input() public icon!: string;
  @Input() public disabled!: boolean;

}
