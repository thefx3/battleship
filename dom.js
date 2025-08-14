//dom.js

import { Battleship, Player } from './battleship.js';



function createBoardElement(player, size=10) {
    const board = document.createElement('div');
    board.classList.add('gameboard');
    board.dataset.player = player.name;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;

            cell.addEventListener('click', () => {
                handleCellClick(player, row, col);
            }
            );
            board.appendChild(cell);
        }
    }

    return board;
}

function renderBoards(player1, player2) {
    const root = document.querySelector('#root');
    root.innerHTML = ''; // reset

    const board1 = createBoardElement(player1);
    const board2 = createBoardElement(player2);

    root.appendChild(board1);
    root.appendChild(board2);
}

function handleCellClick(player, row, col) {
    console.log(`${player.name} clicked ${row},${col}`);
    // Ici on déclenchera attack()
}

export { renderBoards };