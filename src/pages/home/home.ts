import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private nombre:string;
  private apellidos:string;

  constructor(public navCtrl: NavController) {
    this.nombre = "Raúl";
    this.apellidos = "Delgado Jambrina";
  }

}
