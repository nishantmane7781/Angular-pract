import { Component, OnInit } from '@angular/core';
import { HtmlFetcherService } from '../../html-fetcher.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})


export class WidgetComponent implements OnInit {
  private iframeId = 'chatbotFrame';

  constructor(private iframeService: HtmlFetcherService) { }

  ngOnInit(): void {
    this.iframeService.initializeIframe(this.iframeId);
  }

  ngOnDestroy(): void {
    this.iframeService.ngOnDestroy();
  }

}
