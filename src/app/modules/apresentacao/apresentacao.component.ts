import { Component, ElementRef, OnInit } from '@angular/core';
import { JanelaRedesComponent } from '../../shared/janela-redes/janela-redes.component';
import { JanelaCertificacoesComponent } from '../../shared/janela-certificacoes/janela-certificacoes.component';
import { PrismicService } from '../../core/services/prismic.service';
import { RichText } from 'prismic-dom';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [JanelaRedesComponent, CardComponent],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss',
})
export class ApresentacaoComponent implements OnInit {
  public listaFormacoes: {tags: string[], titulo: string, descricao: string}[] = [];
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
    if (titulo) titulo.innerHTML = RichText.asHtml(response.data.titulo);
    if (descricao)
      descricao.innerHTML = RichText.asHtml(response.data.descricao);
    console.log(response.data.formacoesacademicas);

    this.listaFormacoes = response.data.formacoesacademicas
        .map((formacoes) => {
          return {
            titulo: formacoes.formacaoacademica[0].text,
            descricao: formacoes.formacaoacademica[1].text,
            tags: [
              formacoes.formacaoacademica[2].text,
              formacoes.formacaoacademica[2].text.includes("Atualmente") ? 'Em andamento' : 'Concluido'
            ]
          }
        });
  }
}
