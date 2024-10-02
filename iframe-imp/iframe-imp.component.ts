import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe-imp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iframe-imp.component.html',
  styleUrl: './iframe-imp.component.css'
})
export class IframeImpComponent implements OnInit{
  
  url:SafeResourceUrl="";
  constructor(private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    this.url=this.sanitizer.bypassSecurityTrustResourceUrl("https://en.wikipedia.org/wiki/H-index");
  }
} 
