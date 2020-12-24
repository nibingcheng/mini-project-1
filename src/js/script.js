console.log("hello!");
/*
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
*/  
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
                this.cards.splice(Math.floor(Math.random()*this.cards.length*0.5),0,removedItem);
            } 
        }
        split() {
            this.bottomStack = this.cards.splice(this.cards.length/2);
            this.topStack = this.cards;
            return [this.topStack, this.bottomStack];
        }
        
}
  
let deck = new Deck()     //deck is an object; deck.cards ==> [is empty]

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
//update each player's stack
    putBackAtEnd(winner, winningCards) { 
        let number = winningCards.length;
        let tempArray = [];           //put back in random order, only works for more than 2 cards in winningCards[]
  
        if (winner === this.player1) {
            for( let i=0; i<number; i++ ) {
                let removedItem = winningCards.pop();
                winningCards.splice(Math.floor(Math.random()*winningCards.length*0.5),0,removedItem);
            } 
//console.log(this.stack1);
            tempArray = this.stack1.concat(winningCards);
            this.stack1 = tempArray;
//console.log(winningCards)
//console.log(this.stack1);
        }
        else {
            for( let i=0; i<number; i++ ) {
                let removedItem = winningCards.pop();
                winningCards.splice(Math.floor(Math.random()*winningCards.length*0.5),0,removedItem);
            } 
//console.log(this.stack1);
            tempArray = this.stack2.concat(winningCards);
            this.stack2 = tempArray;
//console.log(winningCards)
//console.log(this.stack1);
        }
    }

    drawCardsFromTop(num) {
 // each player draws same number (num) of cards       
        for (let i=0; i<num; i++) {
            this.drawnCardsPlayer1[i] = this.stack1.shift();
            this.drawnCardsPlayer2[i] = this.stack2.shift();
        }
        return this.drawnCardsPlayer1.concat(this.drawnCardsPlayer2);
//console.log(this.stack1);
//console.log(this.stack2); 
//console.log(this.drawnCardsPlayer1);
//console.log(this.drawnCardsPlayer2);
    }

}
/*
let warGame = new Game ('Matt', deck.topStack, 'Nick', deck.bottomStack);
console.log(warGame.stack1, '\n', warGame.stack2)

warGame.drawCardsFromTop(3)
console.log(warGame.drawnCardsPlayer1, warGame.drawnCardsPlayer2)

warGame.putBackAtEnd(warGame.player1, warGame.drawnCardsPlayer1.concat(warGame.drawnCardsPlayer2))
console.log(warGame.stack1, '\n', warGame.stack2)
*/
class Play {
    constructor (player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.cardsOnTable = []
        this.winner = ""    //winner's name or 'tie'
    }
   
    deal () {
        let array = warGame.drawCardsFromTop(1);
        let array1 = this.cardsOnTable.concat(array);
        this.cardsOnTable = array1;

        if (warGame.drawnCardsPlayer1[0] > warGame.drawnCardsPlayer2[0]) {
            if (warGame.drawnCardsPlayer2[0] === 1) {
                this.winner = this.player2;
 //               warGame.putBackAtEnd(warGame.player2, this.cardsOnTable)
            }
            else {
                this.winner = this.player1;
//                warGame.putBackAtEnd(warGame.player1, this.cardsOnTable)
            }
        }
        else if (warGame.drawnCardsPlayer1[0] < warGame.drawnCardsPlayer2[0]) {
                if (warGame.drawnCardsPlayer1[0] === 1) {
                    this.winner = this.player1;
//                    warGame.putBackAtEnd(warGame.player1, this.cardsOnTable)
                }
                else {
                    this.winner = this.player2;
//                    warGame.putBackAtEnd(warGame.player2, this.cardsOnTable)
                    }
                }
            else
                this.winner = "tie";        

 //       console.log(this.player1, warGame.drawnCardsPlayer1, '--', this.player2, warGame.drawnCardsPlayer2);
        //console.log(this.winner);
        if (this.winner === this.player1) {
            warGame.putBackAtEnd(warGame.player1, this.cardsOnTable);
            this.cardsOnTable = [];
        }
        if (this.winner === this.player2) {
            warGame.putBackAtEnd(warGame.player2, this.cardsOnTable);
            this.cardsOnTable = [];
        }

        return this.winner;

//                while (this.winner === "tie") {
//                    warGame.drawCardsFromTop(4);}
    }
    
    breakTie () {
        {
            let array2 = warGame.drawCardsFromTop(3);
            let tempArr = this.cardsOnTable.concat(array2);
            this.cardsOnTable = tempArr;
        }
    }

}

let warPlay = new Play('Matt', 'Nick');
// warPlay.initGame()
        deck.create()               //deck.cards ==> unshuffled 52 cards  
        
        deck.shuffle(52)              //deck.cards ==> shuffled 52 cards
        deck.shuffle(52)
        let splitDeck = deck.split()   

let warGame = new Game (warPlay.player1, splitDeck[0], warPlay.player2, splitDeck[1]);

//for (let k=0; k<52; k++)
//    console.log(warPlay.stackOfPlayer1[k], '-:- ', warPlay.stackOfPlayer2[0])
/*
for (let k=0; k<25; k++)
{
    warPlay.deal();
    console.log(warGame.player1, warGame.stack1) 
    console.log(warGame.player2, warGame.stack2)
    console.log('\n')

    if (warPlay.winner === 'tie')
    {
        warPlay.breakTie();
//        console.log(warPlay.cardsOnTable);
    }
} */