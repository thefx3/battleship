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

describe('Gameboard', () => {
    let gameboard;
    let ship;

    beforeEach(() => {
        gameboard = new Gameboard();
        ship = new Battleship(3);
        ship.position = ['A1', 'A2', 'A3']; // Mock position
        gameboard.addShip(ship);
    });

    test('should add a ship to the gameboard', () => {
        expect(gameboard.ships.length).toBe(1);
        expect(gameboard.ships[0]).toBe(ship);
    });

    test('should register a hit on a ship', () => {
        const result = gameboard.receiveAttack('A1');
        expect(result).toBe(true); // Hit
        expect(ship.getHitCount()).toBe(1);
    });

    test('should register a miss when attacking an empty position', () => {
        const result = gameboard.receiveAttack('B1');
        expect(result).toBe(false); // Miss
    });

    test('should return true when all ships are sunk', () => {
        ship.hit();
        ship.hit();
        ship.hit(); // Sinking the ship
        expect(gameboard.allShipsSunk()).toBe(true);
    });

    test('should return false when not all ships are sunk', () => {
        ship.hit();
        expect(gameboard.allShipsSunk()).toBe(false);
    });
});
