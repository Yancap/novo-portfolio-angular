import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../../core/services/prismic.service';
import { ReplaySubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.scss',
})
export class ExperienciasComponent implements OnInit {
  public experienciasSubject: ReplaySubject<IExperiencias[]> =
    new ReplaySubject(1);
  public empresaSelecionada = 0;
  public cargoSelecionado = 0;
  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const response = (await this.prismicService.prismic.getAllByType(
      'experiences',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaExperiencias[];
    const experienciasOrdenadas = response
      .map((res) => res.data)
      .sort((a, b) => {
        let aTimestamp = 0;
        let bTimestamp = 0;
        if (a.data_saida === null) {
          aTimestamp = Date.now();
        } else {
          aTimestamp = new Date(a.data_saida).getTime();
        }
        if (b.data_saida === null) {
          bTimestamp = Date.now();
        } else {
          bTimestamp = new Date(b.data_saida).getTime();
        }
        return bTimestamp - aTimestamp;
      });
    this.experienciasSubject.next(experienciasOrdenadas);
  }

  public selecionarCargo(idEmpresa: number, idCargo: number) {
    this.empresaSelecionada = idEmpresa;
    this.cargoSelecionado = idCargo;
  }
}
