import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: ActionSheetController, private route:Router){}

  catalogo: Array<object> = []

  ionViewDidEnter() {
    console.log("EXECUTOU O VIEW DID ENTER")
    this.listarcatalogo()
  }

  listarcatalogo() {
    this.catalogo = []
    const tamanhodobanco = localStorage.length
    for (let i = 0; i < tamanhodobanco; i++) {
      const chaveatual = localStorage.key(i)
      const pizzaString = localStorage.getItem(chaveatual)
      const pizzaObjeto = JSON.parse(pizzaString)
      this.catalogo.push(pizzaObjeto)
    }
  }

   async exibirOpcoes(id){
    console.log("clicou na opçao" +id)
    let criacaoMenu = await this.menu.create({
      header: "Opçoes da Pizza nº" + id,
      buttons: [{
        text: "Editar pizza",
        icon: "create",
        handler : () => {
          this.route.navigate(['edit-pizza',id])
        }
      }, {
        text: "Excluir Pizza",
        icon: "trash",
        handler: () => {
          console.log("Clicou em Excluir")
          localStorage.removeItem(id)
          this.listarcatalogo()
        }
      }]
    })

    criacaoMenu.present()
  }
}
