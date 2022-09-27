import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cajita', url: '/cajita', icon: 'box' },
    { title: 'Caja mediana', url: '/caja-mediana', icon: 'box' },
    { title: 'Caja grande', url: '/caja-grande', icon: 'box' },

  ];
  constructor() {}
}
