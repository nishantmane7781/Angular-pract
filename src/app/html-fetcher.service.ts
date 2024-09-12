import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HtmlFetcherService {
  private iframe: HTMLIFrameElement | null = null;
  private resizeSubscription: Subscription | null = null;

  constructor() { }

  initializeIframe(iframeId: string): void {
    this.iframe = document.getElementById(iframeId) as HTMLIFrameElement;

    if (this.iframe) {
      this.resizeSubscription = fromEvent<MessageEvent>(window, 'message')
        .pipe(debounceTime(100)) // Adjust the debounce time as needed
        .subscribe(this.handleMessage.bind(this));
    }
  }

  private handleMessage(event: MessageEvent): void {
    if (!this.iframe) return;

    const data = event.data;

    if (data.sizeFlags) {
      this.iframe.classList.remove('full-width', 'normal-width');
      this.iframe.classList.add('toggle-width');
    } else {
      this.iframe.classList.remove('full-width', 'toggle-width');
      this.iframe.classList.add('normal-width');
    }

    if (data.expandWidth === 'full-width' && data.sizeFlags) {
      this.iframe.classList.remove('normal-width', 'toggle-width');
      this.iframe.classList.add('full-width');
    }

    if (data.expandWidth === 'toggle-width' && data.sizeFlags) {
      this.iframe.classList.remove('normal-width', 'full-width');
      this.iframe.classList.add('toggle-width');
    }

    if (data.liveDimentions) {
      const { width, height } = data.liveDimentions;
      this.iframe.classList.remove('normal-width', 'full-width');
      this.iframe.classList.add('toggle-width');

      if (width && height) {
        this.iframe.style.width = `${width + 100}px`;
        this.iframe.style.height = `${height + 150}px`;
      }
    } else if (data.sizeFlags === false) {
      this.iframe.style.width = '';
      this.iframe.style.height = '';
      this.iframe.classList.add('normal-width');
      this.iframe.classList.remove('toggle-width', 'full-width');
    }
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
