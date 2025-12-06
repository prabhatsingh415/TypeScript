function createUser({ name, age }: { name: string; age: number }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

let user1 = { name: "Bob", age: 25, extra: "extra argument" };
createUser(user1);
// createUser("Alice", 30, "extra argument");
