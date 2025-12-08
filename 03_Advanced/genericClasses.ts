// generic type parameters in classes

interface database {
  connection: string;
  username: string;
  password: string;
}

function fetchData<T, U extends database>(val: T, db: U): object {
  // this function takes two generic types T and U where U extends database interface
  // which means U must have at least the properties defined in database interface
  return {
    val,
    db,
  };
}

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  Autor: string;
  subject: string;
}

class Sellable<T> {
  // generic class with type parameter T
  // T can be any type when creating an instance of the class
  // for example, it can be Quiz or Course
  public cart: T[] = [];

  addToCart(product: T): void {
    this.cart.push(product);
  }
}
