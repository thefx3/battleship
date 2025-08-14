//battleship.js

export class Battleship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.position = null; // Will hold the position of the battleship
    }

    hit() {
        this.hits += 1;
    }

    getPosition() {
        return this.position;
    }

    getLength() {
        return this.length;
    }

    getHitCount() {
        return this.hits;
    }

    isSunk() {
        return this.hits >= this.length;
    }
}

export class Gameboard {
    constructor() {
        this.ships = [];
        this.hits = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    receiveAttack(position) {
        for (const ship of this.ships) {
            if (ship.getPosition() && ship.getPosition().includes(position)) {
                ship.hit();
                this.hits.push(position);
                return true; // Hit
            }
        }
        this.hits.push(position);
        return false; // Miss
    }

    allShipsSunk() {
        return this.ships.every(ship => ship.isSunk());
    }
}

export class Player {
    constructor(name) {
        this.name = name;
        this.gameboard = new Gameboard();
    }

    placeShip(ship, position) {
        ship.position = position; // Set the position of the ship
        this.gameboard.addShip(ship);
    }

    attack(opponent, position) {
        return opponent.gameboard.receiveAttack(position);
    }

}

export {Battleship, Gameboard, Player};