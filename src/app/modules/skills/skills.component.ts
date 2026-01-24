import { Component, OnInit } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { ReplaySubject } from 'rxjs';
import { PrismicService } from '../../core/services/prismic.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit{
  public skills: ITecnologia[] = [
    // {icon: 'angular', tech: 'Angular'},
    // {icon: 'typescript', tech: 'typescript'},
    // {icon: 'java', tech: 'java'},
    // {icon: 'quarkus', tech: 'quarkus'},
    // {icon: 'docker', tech: 'docker'},
    // {icon: 'kubernetes', tech: 'kubernetes'},
    // {icon: 'openshift', tech: 'openshift'},
    // {icon: 'cloud', tech: 'cloud'},
    // {icon: 'kafka', tech: 'kafka'},
    // {icon: 'redis', tech: 'redis'},
    // {icon: 'sql', tech: 'sql'},
    // {icon: 'javascript', tech: 'javascript'},
    // {icon: 'node', tech: 'node'},
    // {icon: 'nestjs', tech: 'nest'},
    // {icon: 'spring', tech: 'spring'},
    // {icon: 'html-css', tech: 'html/css'},
    // {icon: 'sass', tech: 'sass'},
    // {icon: 'git', tech: 'git'},
    // {icon: 'figma', tech: 'figma'},
    // {icon: 'tailwind', tech: 'tailwind'},
    // {icon: 'react', tech: 'react'},
  ];

  public tecnologiasSubject: ReplaySubject<ITecnologia[]> = new ReplaySubject(1);
  constructor(private prismicService: PrismicService) {}

  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'technicalknowledge',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaConhecimentosTecnicos[];
    this.skills = response.data.tecnologias;
  }
}
