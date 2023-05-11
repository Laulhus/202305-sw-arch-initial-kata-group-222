import { Stack } from './classes/Stack';

export const bracketValidator = (brackets: string) => {
  const forbiddenCharacters = /[$&+,:;=?@#|\\'<>.^*%!\d\w]/g;
  if (!brackets) {
    throw new Error();
  }

  if (brackets.match(forbiddenCharacters)) {
    throw new Error();
  }

  const stack = new Stack<string>();
  const pairs: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const inputArray = brackets.split('');
  inputArray.forEach(character => stack.push(character));

  inputArray.forEach(element => {
    if (pairs[element] !== stack.pop()) {
      return false;
    }
  });
  return true;
};
