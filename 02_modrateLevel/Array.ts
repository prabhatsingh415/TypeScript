const superHero: string[] = []; // Array of strings
const powers: number[] = [100, 200]; // Array of numbers

superHero.push("Spiderman");
superHero.push("Ironman");

type User2 = {
  // Define a User type
  name: string;
  age: number;
  isActive: boolean;
};

const allUsers: User2[] = []; // Array of User objects

allUsers.push({ name: "Alice", age: 30, isActive: true });
allUsers.push({ name: "Bob", age: 25, isActive: false }); // Add User objects to the array

const twoDArray: number[][] = [
  // 2D Array of numbers
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const fruits: Array<string> = []; // Generic Array type
fruits.push("Apple");
fruits.push("Banana");

const userIds: ReadonlyArray<number> = [1, 2, 3, 4, 5]; // Readonly array of numbers
// userIds.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
