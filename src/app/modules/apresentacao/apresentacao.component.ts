import { Component, ElementRef, OnInit } from '@angular/core';
import { JanelaRedesComponent } from '../../shared/janela-redes/janela-redes.component';
import { JanelaCertificacoesComponent } from '../../shared/janela-certificacoes/janela-certificacoes.component';
import { PrismicService } from '../../core/services/prismic.service';
import { RichText } from 'prismic-dom';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [JanelaRedesComponent, JanelaCertificacoesComponent],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss',
})
export class ApresentacaoComponent implements OnInit {
  constructor(
    private prismicService: PrismicService,
    private _elementRef: ElementRef<HTMLElement>
  ) {}
  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'apresentacao',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaApresentacao[];
    const titulo = this._elementRef.nativeElement.querySelector('h1');
    const descricao =
      this._elementRef.nativeElement.querySelector('p.descricao');
    const listaFormacoes =
      this._elementRef.nativeElement.querySelector('ul.formacoes');
    if (titulo) titulo.innerHTML = RichText.asHtml(response.data.titulo);
    if (descricao)
      descricao.innerHTML = RichText.asHtml(response.data.descricao);
    if (listaFormacoes)
      response.data.formacoesacademicas
        .forEach((formacoes) => {
          listaFormacoes.innerHTML += `<li>${RichText.asHtml(
            formacoes.formacaoacademica
          )}</li>`;
        });
  }
}
