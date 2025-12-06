// function findSquare(num) { // there num is of type any
//   return num * num;
// }

function findSquare(num: number): number {
  // here num is of type number
  return num * num;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function printError(message: string): void {
  // void means no return value
  console.error(`Error: ${message}`);
}

function handleError(message: string): never {
  // never means it never returns
  throw new Error(message);
}

const sum = (a: number, b: number): number => a + b; // Arrow function

console.log(findSquare(5));

export {};
