import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'highlightedPipe'
})
export class HighlightedPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: unknown, ...args: any[]): any {

    let x= 'This is  <span class="highlight">highlighted</span> text.'

    const highlightedText = x.replace(
      /highlighted/g, 
      `<span class="highlight">highlighted</span>`
    );

    // Bypass security for trusted HTML

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }
}
