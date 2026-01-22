import { Component, OnInit } from '@angular/core';
import { CardProjetoComponent } from '../../shared/card-project/card-project.component';
import { PrismicService } from '../../core/services/prismic.service';

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [CardProjetoComponent],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss',
})
export class StudiesComponent implements OnInit {
  public projectList!: IProjeto[];
  public projectListSelected!: IProjeto[];
  public leftProject = 0;
  public activeProject = 1;
  public rightProject = 2;

  constructor(private prismicService: PrismicService) {
  }

  async ngOnInit() {
    const [response] = (await this.prismicService.prismic.getAllByType(
      'projetos',
      { fetch: [], pageSize: 50 }
    )) as unknown as IRespostaProjetos[];
    console.log(response.data.projeto);
    
    this.projectList = response.data.projeto;
    this.projectListSelected = this.projectList.slice(0, 3);
  }

  public selectLeft() {
    this.leftProject =
      this.leftProject === 0
        ? this.projectList.length - 1
        : this.leftProject - 1;

    this.rightProject =
      this.rightProject === 0
        ? this.projectList.length - 1
        : this.rightProject - 1;

    this.activeProject =
      this.activeProject === 0
        ? this.projectList.length - 1
        : this.activeProject - 1;

    this.projectListSelected = [
      this.projectList[this.leftProject],
      this.projectList[this.activeProject],
      this.projectList[this.rightProject],
    ];
  }

  public selectRight() {
    this.leftProject =
      this.leftProject === this.projectList.length - 1
        ? 0
        : this.leftProject + 1;

    this.rightProject =
      this.rightProject === this.projectList.length - 1
        ? 0
        : this.rightProject + 1;

    this.activeProject =
      this.activeProject === this.projectList.length - 1
        ? 0
        : this.activeProject + 1;

    this.projectListSelected = [
      this.projectList[this.leftProject],
      this.projectList[this.activeProject],
      this.projectList[this.rightProject],
    ];
  }
}
