const Battleship = require('./battleship');

describe('Battleship', () => {
    let ship;

    beforeEach(() => {
        ship = new Battleship(3);
    });

    test('should initialize with correct length', () => {
        expect(ship.getLength()).toBe(3);
    });

    test('should initialize with zero hits', () => {
        expect(ship.getHitCount()).toBe(0);
    });

    test('should hit the ship and increase hit count', () => {
        ship.hit();
        expect(ship.getHitCount()).toBe(1);
    });

    test('should return position as null initially', () => {
        expect(ship.getPosition()).toBeNull();
    });

    test('should be sunk when hits equal length', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('should not be sunk when hits are less than length', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
}
);