import { MISSING_PASSWORD_ERROR_MSG, PASSWORD_SHORT_ERROR_MSG } from './index';
import { validatePassword } from './validatePassword';

describe('Given a password validation', () => {
  describe('When it does not receive an input', () => {
    test('Then it should throw an error', () => {
      expect(() => validatePassword(undefined as unknown as string)).toThrow();
    });
    test('Then it should throw an error with message: Must provide a password', () => {
      expect(() => validatePassword(undefined as unknown as string)).toThrow(
        MISSING_PASSWORD_ERROR_MSG,
      );
    });
  });
  describe('When it receives a password', () => {
    test('Then it should return a validation result', () => {
      expect(validatePassword('test')).toHaveProperty('valid');
    });
  });
  describe('When it receives a password with less than 8 characters long', () => {
    test('Then it should return a validation result with false', () => {
      expect(validatePassword('test').valid).toBe(false);
    });
    test('Then it should return a validation result message with: Password must be at least 8 characters', () => {
      expect(validatePassword('test').message).toBe(PASSWORD_SHORT_ERROR_MSG);
    });
  });
});
