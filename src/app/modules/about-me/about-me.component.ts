import { Component, ElementRef } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CardComponent } from '../../shared/card/card.component';
import { PrismicService } from '../../core/services/prismic.service';
import { RichText } from 'prismic-dom';
import { SafeHtmlPipe } from '../../core/pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ButtonComponent, CardComponent, SafeHtmlPipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  
  public richTextHtmlAboutMe: IRichTextHtmlAboutMe = {
    titleOcupation: '',
    description: [],
    academicBackgrounds: [],
  };

  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'apresentacao',
      { fetch: [], pageSize: 50 },
    )) as unknown as IRespostaApresentacao[];

    this.richTextHtmlAboutMe.titleOcupation = response.data.ocupacao_atual;
    this.richTextHtmlAboutMe.description = response.data.descricao.map((desc) =>
      RichText.asHtml([desc]),
    );

    this.richTextHtmlAboutMe.academicBackgrounds =
      response.data.formacoesacademicas.map((formacoes) => {
        return {
          title: formacoes.formacaoacademica[0].text,
          description: formacoes.formacaoacademica[1].text,
          tags: formacoes.formacaoacademica
            .filter((data) => data.type === 'list-item')
            .map((data) => data.text),
        };
      });
  }
}
