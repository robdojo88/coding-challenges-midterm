const secondToLast = require('./main');

describe('secondToLast Function Tests', () => {
    test('secondToLast([42,true,4,"Kate",7]) should return "Kate"', () => {
        expect(secondToLast([42, true, 4, 'Kate', 7])).toBe('Kate');
    });

    test('secondToLast([42,true,4,"Kate",7, 9]) should return 7', () => {
        expect(secondToLast([42, true, 4, 'Kate', 7, 9])).toBe(7);
    });

    test('secondToLast([42,true,4,"Kate",7, 9,"dojo","awesome"]) should return "dojo"', () => {
        expect(
            secondToLast([42, true, 4, 'Kate', 7, 9, 'dojo', 'awesome'])
        ).toBe('dojo');
    });

    test('secondToLast([1]) should return null', () => {
        expect(secondToLast([1])).toBeNull();
    });
});
