import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ContainerExperienceComponent } from '../../shared/container-experience/container-experience.component';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-professional-career',
  standalone: true,
  imports: [ContainerExperienceComponent],
  templateUrl: './professional-career.component.html',
  styleUrl: './professional-career.component.scss',
})
export class ProfessionalCareerComponent {

  public projects: JobProjects[] = [
    {
      name: 'Tesouro Reserva',
      description: `O Tesouro Reserva é um projeto do Tesouro Nacional que permitirá a compra e venda de títulos públicos 
      24 horas por dia, sete dias por semana.`,
      myActing: `Sou o desenvolvedor responsável pelo ciclo completo de desenvolvimento dos microserviços desse projeto, 
      incluindo codificação, testes, implantação e configuração da infraestrutura no OpenShift. 
      O projeto é composto por duas APIs principais: a API core, que integra com os serviços da B3, concentra boa parte 
      das regras de negócio e será consumida pelo aplicativo mobile; a API de mensageria, integrada ao Kafka, responsável 
      por receber eventos de pagamento, executar transações via PIX, validar dados e controlar o fluxo de mensagens. Todos os 
      serviços são desenvolvidos em Java com Quarkus, utilizando DB2 e Redis para cache e controle de mensageria. 
      Minha atuação reúne domínio técnico, autonomia e responsabilidade sobre serviços críticos e de alta disponibilidade.`,
      techs: [
        'java',
        'quarkus',
        'docker',
        'kubernetes',
        'openshift',
        'kafka',
        'redis',
        'cloud'
      ],
      links: [
        {
          name: 'Estadão - Tesouro Direto funcionará 24 horas e terá nova opção para reserva de emergência',
          url: 'https://einvestidor.estadao.com.br/educacao-financeira/tesouro-direto-operacao-24h-por-dia-2026-titulo-reserva-emergencia/',
        },
      ],
    },
    {
      name: 'Cad&Pag',
      description: `O Cad&Pag permite a abertura facilitada de contas na plataforma do Tesouro Direto. 
    Ao invés de abrir conta num banco ou corretora, o investidor pode acessar diretamente o site do 
    Tesouro e começar a investir. O pagamento do montante referente às cotas dos títulos do Tesouro escolhidos é 
    feito via Pix, por meio de conta vinculada ao CPF do investidor.`,
      myActing: `Nessa projeto, fui responsável pela criação do microserviço que realiza o cadastro rápido do 
    cliente que o integra ao sistema do banco, com essa API sendo disponibilizada para a B3. Além disso, 
    implementei operações (SELECT , INSERT, UPDATE e DELETE) no banco de dados.`,
      techs: [
        'java',
        'quarkus',
        'docker',
        'kubernetes',
        'openshift',
        'cloud',
        'sql',
      ],
      links: [
        {
          name: 'Exame - Banco do Brasil se torna agente custodiante do Tesouro por meio do Cadastro Rápido',
          url: 'https://exame.com/invest/onde-investir/banco-do-brasil-se-torna-agente-custodiante-do-tesouro-por-meio-do-cadastro-rapido/',
        },
        {
          name: 'Conheça o Cad&Pag do Tesouro Direto',
          url: 'https://www.tesourodireto.com.br/b/conheca-o-cad-pag-do-tesouro-direto#:~:text=O%20Cad%26Pag%2C%20que%20combina%20um,financeiro%20e%20pensando%20no%20futuro.',
        },
      ],
    },
  ];

  
  public dataJobList = [
    {
      company: 'IBM',
      period: 'Nov 2023 - Atualmente',
      role: 'Application Developer',
      text: [
        `Sou <strong>Desenvolvedor Fullstack</strong> na area de <strong>Consulting</strong> para o <strong>Banco do Brasil</strong>, responsável pelo 
        desenvolvimento de features para a <strong>Plataforma Interna do Tesouro Direto</strong>. Também, participo diretamente no 
        desenvolvimento de projetos de <strong>grande relevância</strong> para o banco. Realizo trabalho de 
        <strong>prototipação</strong>, <strong>codificação</strong>, <strong>testes</strong>, <strong>documentação</strong> e <strong>implementação</strong>.`,
        `Além disso, tive o mérito de conquistar minhas certificações de <strong>Cloud</strong> e <strong>IA</strong> pela IBM, com <strong>reconhecimentos</strong>.`,
      ],
      technologies:
        'Angular, Typescript, Javascript, Java, Quarkus, Docker, Openshift, Kafka, Redis, Oracle DB, DB2, Figma e Git.',
      // action: (projectsSub: ReplaySubject<JobProjects[]>) => {
      //   projectsSub.next(this.projects);
      // },
      jobProjects: this.projects
    },
    {
      company: 'IBM',
      period: 'Set 2023 - Nov 2023 ',
      role: 'Technical Intern of Development',
      text: [
        `Entrei na <strong>IBM</strong> pelo <strong>estágio técnico</strong>, onde participei de uma <strong>escola de desenvolvimento</strong>, 
        realizei miniprojetos, bem como realizei cursos e trilhas de estudos na plataforma de ensino da <strong>IBM</strong> chamado 
        <strong>YourLeaning</strong>, onde <strong>atingi + de 200 horas de estudos</strong>, ganhei o <strong>selo de Aluno Ouro</strong>, 
        o <strong>mais alto da categoria</strong>, e rapidamente fui <strong>efetivado</strong>.`,
      ],
      technologies:
        'Angular, Typescript, Javascript, Java, Quarkus, React Native, NestJS e Git.',
    },
  ];
}
