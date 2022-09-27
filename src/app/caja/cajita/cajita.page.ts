import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cajita',
  templateUrl: './cajita.page.html',
  styleUrls: ['./cajita.page.scss'],
})
export class CajitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public imagen: Array <string> = ['https://cajitas.cl/wp-content/uploads/2020/02/IMG-9676-1.jpg'];  //Quiero crear una página con imágenes de cajas

}


