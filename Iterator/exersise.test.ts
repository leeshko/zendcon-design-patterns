import { Fibonacci } from "./exercise";

describe('Iterator pattern', () => {
    const RESULT = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    describe('Fibonacci', () => {
        it('should return correct 10 Fibonacci values', () => {
            expect([...new Fibonacci(RESULT.length)]).toEqual(RESULT);
        });
    });
});
