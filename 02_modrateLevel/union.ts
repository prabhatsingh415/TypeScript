//unions in TypeScript are used to define a variable that can hold multiple types of values.
let value: string | number;

value = "Hello";
value = 42;
// value = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

// Function that accepts a union type
function displayValue(val: string | number) {
  if (typeof val === "string") {
    console.log("String value: " + val.toUpperCase());
  } else {
    console.log("Number value: " + val * 2);
  }
}

displayValue("Test");
displayValue(21);

const data: number[] = [1, 2, 3, 4, 5]; // array of numbers
const data2: string[] = ["a", "b", "c"]; // array of strings
const mixedData: (number | string)[] = [1, "a", 2, "b", 3]; // array of numbers and strings
const data3: Array<number | string> = [1, "x", 2, "y"]; // another way to define an array of numbers and strings
const data4: number[] | string[] = [1, 2, 3]; // can be either an array of numbers or an array of strings
// data4.push("d"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
