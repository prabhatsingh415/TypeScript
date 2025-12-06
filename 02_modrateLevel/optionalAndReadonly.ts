type User = {
  readonly id: number; // readonly property
  name: string;
  age?: number; // optional property
};

// readonly property can not be changed
let user: User = { id: 1, name: "Alice", age: 30 };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

let user2: User = { id: 2, name: "Bob" }; // age is optional
console.log(user2);

type train = {
  readonly stations: string[];
  duration?: number;
  name: string;
};

let train1: train = {
  stations: ["Station A", "Station B", "Station C"],
  name: "Express Line",
};

train1.stations.push("Station D"); // Allowed: modifying the array itself

// To prevent modification of the array, use ReadonlyArray
type trainReadonly = {
  readonly stations: readonly string[];
  duration?: number;
  name: string;
};
