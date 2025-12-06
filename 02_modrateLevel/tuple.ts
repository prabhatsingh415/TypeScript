let tuser: [number, string, boolean]; // tuple with number, string, and boolean

tuser = [1, "Alice", true]; // valid assignment
// tuser = ["Bob", 2, false]; // Error: Type 'string' is not assignable to type 'number'.

let rgb: [number, number, number] = [255, 0, 0]; // tuple for RGB color
// rgb = [255, 0]; // Error: Source has 2 element(s) but target requires 3.

type User5 = [number, string];

const user5: User5 = [1, "Charlie"]; // valid assignment
// user = [2, true]; // Error: Type 'boolean' is not assignable to type 'string'.

user5.push("extra"); // Allowed: tuples can have extra elements added
console.log(user5); // Output: [1, "Charlie", "extra"]

export {};
