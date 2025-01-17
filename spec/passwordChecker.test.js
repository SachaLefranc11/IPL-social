import { hasMinimumLength, hasSpecialCharacter, hasDigit, doesNotContainIPL, passwordChecker } from '../src/passwordChecker.js';

describe('Password Checker Tests', () => {
    describe('hasMinimumLength', () => {
        it('should return true for passwords with at least 8 characters', () => {
            expect(hasMinimumLength('12345678')).toBe(true);
        });

        it('should return false for passwords shorter than 8 characters', () => {
            expect(hasMinimumLength('12345')).toBe(false);
        });
    });

    describe('hasSpecialCharacter', () => {
        it('should return true for passwords with at least one special character', () => {
            expect(hasSpecialCharacter('abc!')).toBe(true);
        });

        it('should return false for passwords without special characters', () => {
            expect(hasSpecialCharacter('abc123')).toBe(false);
        });
    });

    describe('hasDigit', () => {
        it('should return true for passwords with at least one digit', () => {
            expect(hasDigit('abc1')).toBe(true);
        });

        it('should return false for passwords without digits', () => {
            expect(hasDigit('abc!')).toBe(false);
        });
    });

    describe('doesNotContainIPL', () => {
        it('should return true for passwords that do not contain "IPL"', () => {
            expect(doesNotContainIPL('Valid123!')).toBe(true);
        });

        it('should return false for passwords containing "IPL"', () => {
            expect(doesNotContainIPL('IPLpassword')).toBe(false);
            expect(doesNotContainIPL('iplpassword')).toBe(false);
        });
    });

    describe('passwordChecker', () => {
        it('should return true for valid passwords', () => {
            expect(passwordChecker('Valid123!')).toBe(true); // Mot de passe valide
        });

        it('should return false for passwords shorter than 8 characters', () => {
            expect(passwordChecker('Short1!')).toBe(false); // Trop court
        });

        it('should return false for passwords without special characters', () => {
            expect(passwordChecker('NoSpecial123')).toBe(false); // Pas de caractère spécial
        });

        it('should return false for passwords without digits', () => {
            expect(passwordChecker('NoDigit!')).toBe(false); // Pas de chiffre
        });

        it('should return false for passwords containing "IPL"', () => {
            expect(passwordChecker('IPL123!')).toBe(false); // Contient "IPL"
        });
    });
});
