import { Component } from '@angular/core';
import { TextChipComponent } from "../../shared/text-chip/text-chip.component";

@Component({
  selector: 'app-my-functions',
  standalone: true,
  imports: [TextChipComponent],
  templateUrl: './my-functions.component.html',
  styleUrl: './my-functions.component.scss'
})
export class MyFunctionsComponent {

}
