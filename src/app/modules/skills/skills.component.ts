import { Component } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public skills: { icon: string; tech: string }[] = [];
}
