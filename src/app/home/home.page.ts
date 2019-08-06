import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  catalogo:Array<object> = []

  ionViewDidEnter (){
     console.log( "EXECUTOU O VIEW DID ENTER")
     this.catalogo.push({
       nome:'calabresa maluca gourmet',
       descricao:'queijo, Catupiry, Batatapalha, cogumelos mangericão e mais uma colher de caviar.',
       preco:'R$72,00'
       
     })
  }
 

}
