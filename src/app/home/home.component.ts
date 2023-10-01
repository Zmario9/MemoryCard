import { Component } from '@angular/core';
import * as $ from 'jquery'

type SrcImage = {
  name?: number;
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
  constructor(){
    this.Card.push(...cardsSrc);
  }

  ngOnInit():void {
    
  }
  
  flipCard(nameCard:any, cardId:any, event: any){
    this.Card.forEach((val) =>{
      if (this.counter < 2){
        if(nameCard == val.name && cardId == val.id){
          if(val.opened == true){
            val.opened = false;
            // return;
          } else {
            val.opened = true;
            this.counter++;
            // return;
          }
        } 
      }
    });
    
    if(this.counter == 2){
      console.log(`Nro cartas volteadas: ${this.counter}`);
      setTimeout(()=>{
        this.Card.forEach((val)=>{
          val.opened = false;
          this.counter = 0;
        });
      },1000);
    }
  }
  
  reset(){
    this.Card.forEach((val)=>{
      val.opened = false;
      this.counter = 0;
    })
  }
}
