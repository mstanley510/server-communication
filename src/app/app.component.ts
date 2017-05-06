import { Component }         from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    Change 1
    <hero-list></hero-list>
    <hero-list-promise></hero-list-promise>
    <my-wiki></my-wiki>
    <my-wiki-smart></my-wiki-smart>
  `
})
export class AppComponent { }
