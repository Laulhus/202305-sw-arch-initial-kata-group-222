import { bracketValidator } from './bracketValidator';

describe('Given a bracketValidator function', () => {
  describe('When called without a parameter', () => {
    test('Then it should throw an error', () => {
      expect(() => bracketValidator(undefined as unknown as string)).toThrow();
    });
  });
  describe('When called with a invalid bracket string', () => {
    test('Then it should throw an error', () => {
      expect(() => bracketValidator('hola')).toThrow();
    });
  });
  describe('When called with a valid characters string', () => {
    test('Then it should not throw an error', () => {
      expect(() => bracketValidator('(){]]')).not.toThrow();
    });
  });
  describe('When called with a string containing the right number and order of opening and closing brackets', () => {
    test('Then it should return a right validation', () => {
      expect(bracketValidator('[{()}]')).toBe(true);
    });
  });
});
