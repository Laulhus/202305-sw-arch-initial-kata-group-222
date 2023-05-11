export class Stack<T> {
  #elements: T[] = [];

  push(element: T): void {
    this.#elements.push(element);
  }

  pop(): T | undefined {
    return this.#elements.pop();
  }

  get size(): number {
    return this.#elements.length;
  }

  isEmpty(): boolean {
    return this.#elements.length === 0;
  }
}
