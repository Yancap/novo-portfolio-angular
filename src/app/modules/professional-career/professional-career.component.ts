import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ContainerExperienceComponent } from '../../shared/container-experience/container-experience.component';
import { ReplaySubject } from 'rxjs';
import { PrismicService } from '../../core/services/prismic.service';
import { RichText } from 'prismic-dom';

@Component({
  selector: 'app-professional-career',
  standalone: true,
  imports: [ContainerExperienceComponent],
  templateUrl: './professional-career.component.html',
  styleUrl: './professional-career.component.scss',
})
export class ProfessionalCareerComponent implements OnInit {
  // public projects: JobProjects[] = [
  //   {
  //     name: 'Tesouro Reserva',
  //     description: `O Tesouro Reserva é um projeto do Tesouro Nacional que permitirá a compra e venda de títulos públicos
  //     24 horas por dia, sete dias por semana.`,
  //     myActing: `Sou o desenvolvedor responsável pelo ciclo completo de desenvolvimento dos microserviços desse projeto,
  //     incluindo codificação, testes, implantação e configuração da infraestrutura no OpenShift.
  //     O projeto é composto por duas APIs principais: a API core, que integra com os serviços da B3, concentra boa parte
  //     das regras de negócio e será consumida pelo aplicativo mobile; a API de mensageria, integrada ao Kafka, responsável
  //     por receber eventos de pagamento, executar transações via PIX, validar dados e controlar o fluxo de mensagens. Todos os
  //     serviços são desenvolvidos em Java com Quarkus, utilizando DB2 e Redis para cache e controle de mensageria.
  //     Minha atuação reúne domínio técnico, autonomia e responsabilidade sobre serviços críticos e de alta disponibilidade.`,
  //     techs: [
  //       'java',
  //       'quarkus',
  //       'docker',
  //       'kubernetes',
  //       'openshift',
  //       'kafka',
  //       'redis',
  //       'cloud'
  //     ],
  //     links: [
  //       {
  //         name: 'Estadão - Tesouro Direto funcionará 24 horas e terá nova opção para reserva de emergência',
  //         url: 'https://einvestidor.estadao.com.br/educacao-financeira/tesouro-direto-operacao-24h-por-dia-2026-titulo-reserva-emergencia/',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'Cad&Pag',
  //     description: `O Cad&Pag permite a abertura facilitada de contas na plataforma do Tesouro Direto.
  //   Ao invés de abrir conta num banco ou corretora, o investidor pode acessar diretamente o site do
  //   Tesouro e começar a investir. O pagamento do montante referente às cotas dos títulos do Tesouro escolhidos é
  //   feito via Pix, por meio de conta vinculada ao CPF do investidor.`,
  //     myActing: `Nessa projeto, fui responsável pela criação do microserviço que realiza o cadastro rápido do
  //   cliente que o integra ao sistema do banco, com essa API sendo disponibilizada para a B3. Além disso,
  //   implementei operações (SELECT , INSERT, UPDATE e DELETE) no banco de dados.`,
  //     techs: [
  //       'java',
  //       'quarkus',
  //       'docker',
  //       'kubernetes',
  //       'openshift',
  //       'cloud',
  //       'sql',
  //     ],
  //     links: [
  //       {
  //         name: 'Exame - Banco do Brasil se torna agente custodiante do Tesouro por meio do Cadastro Rápido',
  //         url: 'https://exame.com/invest/onde-investir/banco-do-brasil-se-torna-agente-custodiante-do-tesouro-por-meio-do-cadastro-rapido/',
  //       },
  //       {
  //         name: 'Conheça o Cad&Pag do Tesouro Direto',
  //         url: 'https://www.tesourodireto.com.br/b/conheca-o-cad-pag-do-tesouro-direto#:~:text=O%20Cad%26Pag%2C%20que%20combina%20um,financeiro%20e%20pensando%20no%20futuro.',
  //       },
  //     ],
  //   },
  // ];

  public dataJobList: DataJobs[] = [];

  public dataJobSubject: ReplaySubject<IExperiencias[]> = new ReplaySubject(1);
  public empresaSelecionada = 0;
  public cargoSelecionado = 0;
  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const response = (await this.prismicService.prismic.getAllByType(
      'experienciasv2',
      { fetch: [], pageSize: 50 },
    )) as unknown as IRespostaExperiencias[];
    console.log(response);

    const dataJobOrdened = response
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

    dataJobOrdened.forEach((dataJob) => {
      
      const dataJobListFormated = dataJob.cargos.map((cargo) => ({
        company: dataJob.empresa,
        startDate: cargo.datainicio,
        endDate: cargo.datafinal,
        role: cargo.nomecargo,
        text: cargo.descricao.map((desc) => RichText.asHtml([desc])),
        technologies: cargo.tecnologias,
        jobProjects: dataJob.projetoscargo ? dataJob.projetoscargo
          .filter((projeto) => projeto.idcargo === cargo.idcargo)
          .map((projeto) => ({
            name: projeto.nomeprojeto,
            description: projeto.descricaoprojeto,
            myActing: projeto.minhafuncaoprojeto,
            techs: projeto.tecnologiasicon.split(','),
            links: projeto.links.map((link) => RichText.asHtml([link])),
          })) : null,
      }));
      this.dataJobList = dataJobListFormated;
    });
    
    console.log(this.dataJobList );
    this.dataJobSubject.next(dataJobOrdened);
  }

  public selecionarCargo(idEmpresa: number, idCargo: number) {
    this.empresaSelecionada = idEmpresa;
    this.cargoSelecionado = idCargo;
  }
}
