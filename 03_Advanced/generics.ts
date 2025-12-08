// This function takes a values of any type but does not provide type safety
function doSomething(val: any): any {
  return val;
}

// This generic function takes a value of type T and returns a value of the same type T
function doSomethingGeneric<T>(val: T): T {
  return val;
}

// another syntax for generics using arrow function
const doSomethingGenericArrow = <T>(val: T): T => {
  return val;
};

function greet<Type>(val: Type): Type {
  return val;
}

interface bottle {
  brand: string;
  type: number;
}

function getBottle<Type>(bottle: Type): Type {
  return bottle;
}

let result = getBottle<bottle>({ brand: "coke", type: 1 });

// generics in arrays

function getProduct<T>(product: T[]): T {
  //return 4  // error we can't return number as T is generic type
  return product[3];
}

//same function using arrow syntax
const getProductFromSearch = <T>(product: T[]): T => {
  return product[2];
};

const getProductFromSearch2 = <T>(product: T[]): T => {
  // the comma is used to distinguish between JSX and generics
  return product[2];
};
