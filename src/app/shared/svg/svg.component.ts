import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeHtmlPipe } from '../../core/pipes/safe-html/safe-html.pipe';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [SafeHtmlPipe],
  template: `
    @if (svgContent !== null && svgContent !== '') {
      <i class="svg-icon" [innerHTML]="svgContent | safeHtml"></i>
    }
  `,
  styleUrl: './svg.component.scss',
})
export class SvgComponent implements OnChanges {
  @Input() name!: string;
  svgContent: string = '';

  constructor(private http: HttpClient) {}

  ngOnChanges(): void {
    this.getIcon(this.name).subscribe((svg) => (this.svgContent = svg));
  }

  private getIcon(name: string) {
    return this.http
      .get(`/assets/svg/${name}.svg`, { responseType: 'text' })
      .pipe(catchError(() => of('')));
  }
}
