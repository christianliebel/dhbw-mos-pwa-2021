import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  async share(title: string) {
    if ('share' in navigator) {
      await navigator.share({ text: title });
    } else {
      window.open('mailto:?subject=' + title);
    }
  }
}
