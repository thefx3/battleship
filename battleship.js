class Battleship {
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

module.exports = Battleship;