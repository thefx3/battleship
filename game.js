import { Player, Battleship } from './battleship.js';
import { renderBoards } from './dom.js';

let currentPlayer; 
let otherPlayer;

function initGame() {
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');

    const ship1 = new Battleship(3);
    player1.gameboard.addShip(ship1);
    player1.placeShip(ship1, ['A1', 'A2', 'A3']);
    
    const ship2 = new Battleship(3);
    player2.gameboard.addShip(ship2);
    player2.placeShip(ship2, ['B1', 'B2', 'B3']);

    currentPlayer = player1;
    otherPlayer = player2;

    renderBoards(player1, player2);

}

function playTurn(position) {
    const hit = currentPlayer.attack(otherPlayer, position);
    console.log(hit ? 'Hit!' : 'Miss!');

    if (otherPlayer.gameboard.allShipsSunk()) {
        alert(`${currentPlayer.name} wins!`);
        return;
    }

    // Swap players
    [currentPlayer, otherPlayer] = [otherPlayer, currentPlayer];
}

document.addEventListener('DOMContentLoaded', initGame);

