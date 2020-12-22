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
        this.cards = []
    
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
        
        }
        putBackAtEnd(num) {
        
        }
        drawTopCards(num) {
        
        }
}
  
let fullDeck = new Deck(52)
fullDeck.create()
fullDeck.shuffle()
console.log(fullDeck.cards)
