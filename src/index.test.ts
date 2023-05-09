import {
  MISSING_PASSWORD_ERROR_MSG,
  PASSWORD_SHORT_ERROR_MSG,
  PASSWORD_MUST_CONTAIN_NUMBERS,
  PASSWORD_MUST_CONTAIN_CAPITAL,
  PASSWORD_MUST_CONTAIN_SPECIAL,
} from './index';
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
  describe('When it receives an invalid password', () => {
    test('Then it should return a validation result with false', () => {
      expect(validatePassword('test').valid).toBe(false);
    });
    describe('With less than 8 characters long', () => {
      test('Then it should return a validation result message with: Password must be at least 8 characters', () => {
        expect(validatePassword('test').message).toContain(PASSWORD_SHORT_ERROR_MSG);
      });
    });
    describe('With less than 2 numbers', () => {
      test('Then it should return a validation result message with: Password must contain at least 2 numbers', () => {
        expect(validatePassword('test').message).toContain(PASSWORD_MUST_CONTAIN_NUMBERS);
      });
    });
    describe('With more than one error', () => {
      test('Then it should return both error messages', () => {
        expect(validatePassword('test').message).toContain(PASSWORD_SHORT_ERROR_MSG);
        expect(validatePassword('testingmaster').message).toContain(PASSWORD_MUST_CONTAIN_NUMBERS);
      });
    });
    describe('With less than 1 capital letter', () => {
      test('Then it should return a validation result message with: Password must contain at least one capital letter', () => {
        expect(validatePassword('test1234!').message).toContain(PASSWORD_MUST_CONTAIN_CAPITAL);
      });
    });
    describe('With less than 1 special character', () => {
      test('Then it should return a validation result message with: Password must contain at least one special character', () => {
        expect(validatePassword('testMix123').message).toContain(PASSWORD_MUST_CONTAIN_SPECIAL);
      });
    });
  });
});
