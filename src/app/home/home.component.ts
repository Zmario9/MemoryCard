import { Component } from '@angular/core';
import * as $ from 'jquery'

type SrcImage = {
  name?: string;
  flippedBack?: string;
  src?: string;
  opened?: boolean;
  id?: number;
};

// let counter = 0;

const cardsSrc: Array<object> = [
  {
    src:"assets/images/fireFlower.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Flor de fuego",
    id:1,
    opened: false
  },
  {
    src:"assets/images/fireFlower.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Flor de fuego",
    id:2,
    opened: false
  },
  {
    src:"assets/images/greenMushroom.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Hongo verde",
    id:1,
    opened: false
  },
  {
    src: "assets/images/greenMushroom.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Hongo verde",
    id:2,
    opened: false
  },
  {
    src:"assets/images/iceFlower.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Flor de hielo",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/iceFlower.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Flor de hielo",
    id: 2,
    opened: false
  },
  {
    src:"assets/images/penguinSuit.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Traje de pinguino",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/penguinSuit.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Traje de pinguino",
    id: 2,
    opened: false
  },
  {
    src:"assets/images/redMushroom.png",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Hongo rojo",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/redMushroom.png",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Hongo rojo",
    id: 2,
    opened: false
  },
  {
    src:"assets/images/star.jpg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Estrella",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/star.jpg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Estrella",
    id: 2,
    opened: false
  },
  {
    src:"assets/images/superLeaf.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Super hoja",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/superLeaf.jpeg",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Super hoja",
    id: 2,
    opened: false
  },
  {
    src:"assets/images/superLeafGold.png",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Super hoja dorada",
    id: 1,
    opened: false
  },
  {
    src:"assets/images/superLeafGold.png",
    flippedBack:"assets/images/flippedCard.jpeg",
    name:"Super hoja dorada",
    id: 2,
    opened: false
  }
].sort(()=>Math.random() - 0.5);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  protected Card: Array<SrcImage> = [];
  protected counter: number = 0;
  protected counterSec: number = 0;
  protected selectedCards: Array<SrcImage> = [];
  protected cardsSpottedCounter: number = 0;
  constructor(){
    this.Card.push(...cardsSrc);
  }

  ngOnInit():void {
    
  }
  //metodo para la animacion de la carta volteada
  
  //Soon.......
  
  //Metodo para abrir la carta
  flipCard(nameCard:any, cardId:any, event: any){
    const divName:any = $($(event.srcElement).parent()).attr("class");
    const parentHtml:any = document.getElementsByClassName(divName);

    $(parentHtml).animate(
      { deg: 180 },
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotateY(' + now + 'deg)' });
          
        },
        start:()=>{
          console.log("comienza animacion...");
          this.counterSec++;
          console.log(this.counterSec);
        },
        complete: ()=>{
          //Cuando completa la animacion
          console.log("termino la animacion");
        },
      }
    );
    //reviso cada una de las cartas con foreach
    this.Card.forEach((val) =>{
      //Si el contador es menor a 2, se ejecuta esto
      if (this.counter < 2){
        //si el nombre e id de la carta seleccionada coincide con alguna carta del arreglo de cartas... 
        if(nameCard == val.name && cardId == val.id){
          //Chequeo si la carta esta volteada, si no lo esta...
          if(val.opened == false){
            //volteo la carta...
            val.opened = true;  //Probablemente me tocara cambiar el val y counter de posicion entre ellos
            //Cuento la carta volteada
            this.counter++;
            //y la agrego a una lista de cartas seleccionadas...
            this.selectedCards.push(val);
          }
        } 
      }
    });
    
    // console.log(this.selectedCards);
    //Si el contador llega a 2.
    if(this.counter == 2){
      console.log(`Nro cartas volteadas: ${this.counter}`);
      //Checo si el nombre de la primera carta coincide con el de la segunda, si coinciden...
      if(this.selectedCards[0].name == this.selectedCards[1].name){
        console.log("Si, son iguales");
        //Restauro a la nada el arreglo de cartas
        this.selectedCards = [];
        //Restauro el contador
        this.counter = 0;
        //Cuento que ya se encontro un par de cartas.
        this.cardsSpottedCounter++;
        console.log(`Par encontrado Nro: ${this.cardsSpottedCounter}!`);
        //Si no coinciden...
      } else {
        console.log("No son iguales...");
        //Establezco un tiempo definido antes de ejecutar...
        setTimeout(()=>{
          this.Card.forEach((val)=>{
            //Como no son iguales, busco las cartas que coinciden con las cartas que debo voltear de regreso
            if(val.name == this.selectedCards[1].name || val.name == this.selectedCards[0].name){
              //Y las volteo de nuevo.
              val.opened = false;
            }
          });
          //Y reestablezco los valores de las cartas y contador.
          this.selectedCards = [];
          this.counter = 0;
        },1000);
      }
    } 
    
    //Si el contador de pares encontrados llega a 8, es decir, se consiguen todos los pares...
    if(this.cardsSpottedCounter == 8){
      //ejecuto lo que se hace al ganar
      console.log("YOU WIN!!!");
    }
  }
  
  //Metodo para resetear el juego
  reset(){
    //Volteo todas las cartas para taparlas.
    this.Card.forEach((val)=>{val.opened = false;});
    //Regreso el contador de cartas seleccionadas a 0.
    this.counter = 0;
    //Regreso el contador de pares encontrados a 0.
    this.cardsSpottedCounter = 0;
    //Rebarajeo las cartas.
    this.Card.sort(()=>Math.random() - 0.5);
  }
}

//Hago la animacion de voltear la carta.
// $(parentHtml).animate(
//   { deg: 180 },
//   {
//     duration: 1200,
//     step: function(now) {
//       $(this).css({ transform: 'rotateY(' + now + 'deg)' });
//     },
//     complete: ()=>{
//       //Cuando completa la animacion
//       console.log("termino la animacion");
//     },
//   }
// );
