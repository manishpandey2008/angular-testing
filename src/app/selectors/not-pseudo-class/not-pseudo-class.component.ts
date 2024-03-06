import { Component } from '@angular/core';

@Component({
  // selector: '[test]:not(p)',
  selector:'button[type="reset"]',
  templateUrl: './not-pseudo-class.component.html',
  styleUrls: ['./not-pseudo-class.component.css'],
  inputs:['inputTest']
})
export class NotPseudoClassComponent {
}
