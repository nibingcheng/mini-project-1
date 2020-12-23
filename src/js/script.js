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
        constructor () {
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
        shuffle(number) {
            for( let i=0; i<number; i++ ) {
                let removedItem = this.cards.pop();
                this.cards.splice(Math.floor(Math.random()*this.cards.length),0,removedItem);
            } 
        }
        split() {
            this.bottomStack = this.cards.splice(this.cards.length/2);
            this.topStack = this.cards;
        }
        
}
  
let deck = new Deck()     //fullDeck is an object; fullDeck.cards ==> []
deck.create()               //fullDeck.cards ==> unshuffled 52 cards  
deck.shuffle(52)              //fullDeck.cards ==> shuffled 52 cards
deck.shuffle()
deck.split()                //generate topStack and bottomStack

let topStack = deck.topStack;
let bottomStack = deck.bottomStack;
//console.log(topStack)
//console.log(bottomStack)

class Game {
        constructor (player1, stack1, player2, stack2) {
        this.player1 = player1
        this.player2 = player2
        this.stack1 = stack1
        this.stack2 = stack2
        this.drawnCardsPlayer1 = []
        this.drawnCardsPlayer2 = [] 
    }

    putBackAtEnd(winnerName, winningCards) { 
        let number = winningCards.length; 
        if (winnerName === this.player1) {
            //put back in random order, only works for more than 2 cards in winningcards[]
            for( let i=0; i<number; i++ ) {
                let removedItem = winningCards.pop();
                winningCards.splice(Math.floor(Math.random()*winningCards.length),0,removedItem);
            } 
console.log(this.stack1);
            let temp = this.stack1.concat(winningCards);
console.log(winningCards)
console.log(temp);
        }
        else {

        }
    }
    drawCardsFromTop(num) {
        
        for (let i=0; i<num; i++) {
            this.drawnCardsPlayer1[i] = this.stack1.shift();
            this.drawnCardsPlayer2[i] = this.stack2.shift();
        }
    //    console.log(this.stack1);
    //    console.log(this.stack2); 
    //    console.log(this.drawnCardsPlayer1);
    //    console.log(this.drawnCardsPlayer2);
    }

}

let warGame = new Game ('Matt', topStack, 'Nick', bottomStack);

warGame.drawCardsFromTop(3)
warGame.putBackAtEnd('Matt', [2,6,3])
//console.log(warGame.stack1)
