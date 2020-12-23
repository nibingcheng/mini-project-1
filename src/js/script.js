console.log("hello!");

class Card {
    constructor (suit, rank) {
      this.suit = suit
      this.rank = rank
    }
      score() {
        if (this.rank === 'Ace')
            return 1
        else if (this.rank === 'Jack')
            return 11
        else if (this.rank === 'Queen')
            return 12
        else if (this.rank === 'King')
            return 13
        else 
            return parseInt(this.rank)
      }               
}
   
let myCard = new Card ("Heart", 'Queen');
  
class Deck {
        constructor (length) {
        this.length = length
        this.cards = []                     //An array to hold 52 cards
        this.topStack = []                  //An array to hold 26 cards
        this.bottomStack = []               //An array to hold 26 cards
        }
        create() {
            for (let i=1; i<=13; i++){
                for (let j=0; j<4; j++)
                    this.cards.push(i);
            }
        }
        shuffle() {
            for( let i=0; i<this.length; i++ ) {
                let removedItem = this.cards.pop();
               // console.log(removedItem);
                
                this.cards.splice(Math.floor(Math.random()*this.cards.length),0,removedItem);
               // this.cards.splice(Math.floor(Math.random()*this.length, 0, removedItem));
            } 
        }
        split() {
            this.bottomStack = this.cards.splice(this.length/2);
            this.topStack = this.cards;
        //    console.log(this.bottomStack)
        }
        
}
  
let fullDeck = new Deck(52)     //fullDeck is an object; fullDeck.cards ==> []
fullDeck.create()               //fullDeck.cards ==> unshuffled 52 cards  
fullDeck.shuffle()              //fullDeck.cards ==> shuffled 52 cards
fullDeck.shuffle()
fullDeck.split()                //generate topStack and bottomStack

let topStack = fullDeck.topStack;
let bottomStack = fullDeck.bottomStack;
console.log(topStack)
console.log(bottomStack)

class War {
        constructor (player1, stack1, player2, stack2) {
        this.player1 = player1
        this.player2 = player2
        this.stack1 = stack1
        this.stack2 = stack2
    }

    putBackAtEnd(num) {
        
    }
    drawTopCards(num) {
        let drawnCards = [];
        for (let i=0; i<num; i++) {
            drawnCards[i] = this.stack1.shift()
        }
         
        console.log(this.player1);
        console.log(this.player2);
        console.log(this.stack1);
        console.log(this.stack2);
    }

}

let game = new War ('Matt', topStack, 'Nick', bottomStack);

let arr1 = game.drawTopCards(1)