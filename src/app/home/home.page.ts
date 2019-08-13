import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  catalogo: Array<object> = []

  ionViewDidEnter() {
    console.log("EXECUTOU O VIEW DID ENTER")
    this.listarcatalogo()
  }

  listarcatalogo() {
    const tamanhodobanco = localStorage.length
    for (let i = 0; i < tamanhodobanco; i++) {
      const chaveatual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveatual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)
    }
  }


}
