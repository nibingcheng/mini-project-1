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
                    {this.cards.push(i)};
            }
        }
        shuffle(number) {
            let removedItem;
            for (let i=0; i<number; i++) {
                removedItem = this.cards.pop();
                this.cards.splice(Math.floor(Math.random()*this.cards.length),0,removedItem);
            } 
        }
        split() {
            
            this.bottomStack = this.cards.splice(this.cards.length/2);
            this.topStack = this.cards;
        /*
            for (let j=0; j<this.cards.length/2; j++)  {
                this.bottomStack[j] = this.cards[j*2];
                this.topStack[j] = this.cards[j*2+1];               
            }
        */    
            return [this.topStack, this.bottomStack];
        }
        
}
  
let deck = new Deck()     //deck is an object; deck.cards is an array ==> [is empty]


class Game {
        constructor (player1, stack1, player2, stack2) {
        this.player1 = player1
        this.player2 = player2
        this.stack1 = stack1
        this.stack2 = stack2
        this.drawnCardsPlayer1 = []
        this.drawnCardsPlayer2 = [] 
    }
//update winner's stack for each round
    putBackAtEnd(winner, cardsWon) { 
        let number = cardsWon.length;
        let tempArray = [];           //put back in random order, only works for more than 2 cards in winningCards[]
  
        if (winner === this.player1) {
            for( let i=0; i<number; i++ ) {
                let removedItem = cardsWon.pop();
                cardsWon.splice(Math.floor(Math.random()*cardsWon.length),0,removedItem);
            } 

            tempArray = this.stack1.concat(cardsWon);
            this.stack1 = tempArray;
        }
        else {
            for( let i=0; i<number; i++ ) {
                let removedItem = cardsWon.pop();
                cardsWon.splice(Math.floor(Math.random()*cardsWon.length),0,removedItem);
            } 

            tempArray = this.stack2.concat(cardsWon);
            this.stack2 = tempArray;
        }
    }

    drawCardsFromTop(num) {
 // each player draws same number (num) of cards, 
 // return an array contanining cards from both players    
        this.drawnCardsPlayer1 = [];
        this.drawnCardsPlayer2 = [];

        let n = Math.min(num, this.stack1.length, this.stack2.length)

        for (let i=0; i<n; i++) {
            this.drawnCardsPlayer1[i] = this.stack1.shift();
            this.drawnCardsPlayer2[i] = this.stack2.shift();
        }

        return this.drawnCardsPlayer1.concat(this.drawnCardsPlayer2);
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
        this.cardsOnTable = []      // all cards including face up and down
        this.winner = ""            // winner's name or 'tie' for each hand played
    }
   
    showHands () {
        
        let array = warGame.drawCardsFromTop(1);
        let array1 = this.cardsOnTable.concat(array);
        this.cardsOnTable = array1;

        if (warGame.drawnCardsPlayer1[0] > warGame.drawnCardsPlayer2[0]) {
            if (warGame.drawnCardsPlayer1[0] > warGame.drawnCardsPlayer2[0]) {
                if (warGame.drawnCardsPlayer2[0] === 1) {
                    this.winner = this.player2;
                }
                else {
                    this.winner = this.player1;
                }
            }
        }
        else if (warGame.drawnCardsPlayer1[0] < warGame.drawnCardsPlayer2[0]) {
                if (warGame.drawnCardsPlayer1[0] === 1) {
                    this.winner = this.player1;
                }
                else 
                    {this.winner = this.player2;}                  
            }
            else
                {this.winner = "tie";}        

/*
        if (this.winner === this.player1) {
            warGame.putBackAtEnd(warGame.player1, this.cardsOnTable);
            this.cardsOnTable = [];
        }
        if (this.winner === this.player2) {
            warGame.putBackAtEnd(warGame.player2, this.cardsOnTable);
            this.cardsOnTable = [];
        }
*/      // array [[winner name], [2 face up cards], [all cards on table]]
        return [this.winner, array, this.cardsOnTable];

    }
    
    thisIsWar () {
        {  
        let array2 = warGame.drawCardsFromTop(3); 
        let tempArr = this.cardsOnTable.concat(array2);
        this.cardsOnTable = tempArr;       
        }
    }

    winnerTakeAll () {
        if (this.winner === this.player1) {
            warGame.putBackAtEnd(warGame.player1, this.cardsOnTable);
            this.cardsOnTable = [];
        }
        if (this.winner === this.player2) {
            warGame.putBackAtEnd(warGame.player2, this.cardsOnTable);
            this.cardsOnTable = [];
        }
    }

}

let warPlay = new Play('Matt', 'Nick');
// warPlay.initGame()
deck.create()               //deck.cards ==> unshuffled 52 cards  

deck.shuffle(100)              //deck.cards ==> shuffled 52 cards

let splitDeck = deck.split()   //splitDeck[ [top deck], [bottom deck]]

let warGame = new Game (warPlay.player1, splitDeck[0], warPlay.player2, splitDeck[1]);
  console.log(splitDeck[0], splitDeck[1]);  

let arr1 = [];  // array [[winner name], [2 face up cards], [all cards on table]]

function gameStart() {
    let k =0;
    while (warGame.stack1.length*warGame.stack2.length !==0 && k<250) {      //for (let k=0; k<250; k++)
        k++;
        console.log("start", warGame.player1, warGame.stack1.length, warGame.player2, warGame.stack2.length)

        arr1 = warPlay.showHands();

        if (arr1[1][0] === undefined || arr1[1][1] === undefined)  // double safety for ending game properly
            return k;

        if (arr1[0] !== 'tie') {    
        console.log(arr1[0], arr1[1]);
        warPlay.winnerTakeAll();
        console.log("end", warGame.player1, warGame.stack1.length, warGame.player2, warGame.stack2.length)
        console.log("cards on table", warPlay.cardsOnTable.length)
        console.log('\n')
        }
        else    {            //(warPlay.winner === 'tie')
            console.log(arr1[0], " -> ", arr1[1]);
            warPlay.thisIsWar();
            console.log("end", warGame.player1, warGame.stack1.length, warGame.player2, warGame.stack2.length)
            console.log("cards on table", warPlay.cardsOnTable.length)
            console.log('\n')
        }
    }
    return k;
} 

let count = gameStart();

if (warGame.stack1.length > warGame.stack2.length && count!== 250) { 
//    console.log('\n', 'Game winner is: ', warGame.player1, '(', count, ')')
        prompt('Winner is: ' + warGame.player1 + ' [# of hands played]: ' + count);
        console.clear();
}
else if (count ===250) {
        prompt('Undecided after ' + count + ' hands played')
        console.clear()
}
else {
//    console.log('\n', 'Game winner is: ', warGame.player2, '(', count, ')')
        prompt('Winner is: ' + warGame.player2 + ' [# of hands played]: ' + count)
        console.clear()
}