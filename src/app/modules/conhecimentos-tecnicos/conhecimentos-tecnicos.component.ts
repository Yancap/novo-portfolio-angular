import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../../core/services/prismic.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-conhecimentos-tecnicos',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './conhecimentos-tecnicos.component.html',
  styleUrl: './conhecimentos-tecnicos.component.scss',
})
export class ConhecimentosTecnicosComponent implements OnInit {
  public tecnologiasSubject: ReplaySubject<ITecnologia[]> = new ReplaySubject(1);
  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'technicalknowledge',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaConhecimentosTecnicos[];
    this.tecnologiasSubject.next(response.data.tecnologias);
  }
}
