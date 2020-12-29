
# Game of War

Game of war is a Javascript programing course project.

## Project Objective 

The goal is to mimic the card game known as War played by two players. 

## Rules of Game

A full deck is evenly divided among the two players, giving each a 26-card stack.
To start, each player reveals the top card in their stack. The player with the 
higher card takes both cards and moves them to the bottom of their stack in random
order.

If the two revealed cards have same score, each player lays down the top three 
cards of their stack (face down), and then each player reveals the top card again. 
Whoever wins out of the second reveal takes all 10 cards, and if there is another 
tie the process repeats until there is a winner.

If it is a tie and one player has run out of cards for next battle, i.e. three or less 
cards left in the stack, then the other player will be the winner. 

## instructionss

Open the `index.html` file (~/sei/projects/mini-project-1/game-of-war/src) using the
Firefox browser and the console in the browser. The game will automatically launch.

- Print a message in the console window for each "battle" showing the number of cards 
    in each player's stack to begin with, the two face up cards, who won the round, 
    how many cards each player has afterwards, as well as how may cards are left on 
    table for next round's winner to grab if a tie occurred.
- Display a dialog in browser window showing who won the game and the number of rounds
    needed (Note: a preset max number of battles is used to serve the purpose of breaking
    the while loop when game seems to go on endlessly)
- At start of each round before top cards are drawn, the sum of two player' stacks should 
    equal to 52, as long as the previous round is NOT a tie. After a player wins the round,
    the sum of two player' stacks should also equal to 52. If no one wins the current round, 
    the sum of two player' stacks should be less than 52 at the end of this round. When adding 
    those cards on the table, it should equal to 52. 

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
