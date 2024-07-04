import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [HttpClientModule],
  template: `<i [innerHTML]="svgIcon"></i>`,
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input()
  public icon?: string;

  public svgIcon!: SafeHtml;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  public ngOnChanges(): void {
    if (!this.icon) {
      this.svgIcon = '';
      return;
    }
    this.httpClient
      .get(`/assets/techs/${this.icon}.svg`, { responseType: 'text' })
      .subscribe((value) => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value);
      });
  }
}
