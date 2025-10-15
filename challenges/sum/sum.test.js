const sum = require('./main');

describe('Sum Function Tests', () => {
    test('sum(3, 2) should return 5', () => {
        expect(sum(3, 2)).toBe(5);
    });

    test('sum(3, 10) should return 13', () => {
        expect(sum(3, 10)).toBe(13);
    });

    test('sum(-3, 4) should return 1', () => {
        expect(sum(-3, 4)).toBe(1);
    });

    test('sum(-5, 10) should return 5', () => {
        expect(sum(-5, 10)).toBe(5);
    });
});
