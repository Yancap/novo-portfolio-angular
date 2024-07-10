import { Component, OnInit } from '@angular/core';
import { CardProjetoComponent } from '../../shared/card-projeto/card-projeto.component';
import { PrismicService } from '../../core/services/prismic.service';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CardProjetoComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent implements OnInit {
  public arrayProjeto!: IProjeto[];
  public arrayProjetoSelecionados!: IProjeto[];
  public projetoEsquerda = 0;
  public projetoAtivo = 1;
  public projetoDireita = 2;

  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'projetos',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaProjetos[];
    this.arrayProjeto = response.data.projeto;
    this.arrayProjetoSelecionados = this.arrayProjeto.slice(0, 3)
  }


  public selecionarEsquerda() {
    this.projetoEsquerda =
    this.projetoEsquerda === 0
      ? this.arrayProjeto.length - 1
      : this.projetoEsquerda  - 1;

  this.projetoDireita =
    this.projetoDireita === 0
      ? this.arrayProjeto.length - 1
      : this.projetoDireita  - 1;

  this.projetoAtivo =
    this.projetoAtivo === 0
      ? this.arrayProjeto.length - 1
      : this.projetoAtivo  - 1;

  this.arrayProjetoSelecionados = [
    this.arrayProjeto[this.projetoEsquerda],
    this.arrayProjeto[this.projetoAtivo],
    this.arrayProjeto[this.projetoDireita]
  ]
  }

  public selecionarDireita() {
    this.projetoEsquerda =
      this.projetoEsquerda === this.arrayProjeto.length - 1
        ? 0
        : this.projetoEsquerda  + 1;

    this.projetoDireita =
      this.projetoDireita === this.arrayProjeto.length - 1
        ? 0
        : this.projetoDireita  + 1;

    this.projetoAtivo =
      this.projetoAtivo === this.arrayProjeto.length - 1
        ? 0
        : this.projetoAtivo  + 1;

    this.arrayProjetoSelecionados = [
      this.arrayProjeto[this.projetoEsquerda],
      this.arrayProjeto[this.projetoAtivo],
      this.arrayProjeto[this.projetoDireita]
    ]
  }
}
