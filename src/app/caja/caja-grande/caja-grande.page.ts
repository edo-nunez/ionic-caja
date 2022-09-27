import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja-grande',
  templateUrl: './caja-grande.page.html',
  styleUrls: ['./caja-grande.page.scss'],
})
export class CajaGrandePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public imagen2: Array <string> = ['https://cajitas.cl/wp-content/uploads/2020/01/202023-600x695.jpg'];
}
