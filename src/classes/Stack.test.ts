import { Stack } from './Stack';

describe('Given a Stack class', () => {
  describe('When instantiated', () => {
    test('Then it should be an instance of a Stack', () => {
      const myStack = new Stack();
      expect(myStack).toBeInstanceOf(Stack);
    });
    test('Then it should be empty', () => {
      const myStack = new Stack();
      expect(myStack.isEmpty()).toBe(true);
    });
  });
  describe('When push method is called with an element', () => {
    test('Then it should not be empty', () => {
      const myStack = new Stack();
      myStack.push('test');
      expect(myStack.isEmpty()).toBe(false);
    });
  });
  describe('When size method is called', () => {
    test('Then it should the number of elements', () => {
      const myStack = new Stack();
      myStack.push('test');
      expect(myStack.size).toBe(1);
    });
  });
  describe('When pop method is called', () => {
    test('Then it should return the last element added', () => {
      const myStack = new Stack();
      myStack.push('test');
      myStack.push('hello');
      myStack.push('window');
      expect(myStack.pop()).toBe('window');
    });
  });
});
