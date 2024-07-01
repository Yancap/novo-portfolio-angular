import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApresentacaoComponent } from './modules/apresentacao/apresentacao.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApresentacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'novo-portfolio-angular';
}
