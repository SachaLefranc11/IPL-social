import { hasMinimumLength } from '../src/passwordChecker.js';

describe('hasMinimumLength', () => {
    it('should return true for passwords with at least 8 characters', () => {
        expect(hasMinimumLength('12345678')).toBe(true);
        expect(hasMinimumLength('abcdefgh')).toBe(true);
    });

    it('should return false for passwords shorter than 8 characters', () => {
        expect(hasMinimumLength('12345')).toBe(false);
        expect(hasMinimumLength('abcde')).toBe(false);
    });
});