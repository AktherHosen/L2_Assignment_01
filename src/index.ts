{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }
  formatString("Hello"); // Output: "HELLO"
  formatString("Hello", true); // Output: "HELLO"
  formatString("Hello", false); // Output: "hello"

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items?.filter((item) => item.rating >= 4);
  }
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  filterByRating(books);

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    let concatenatedArr: T[] = [];

    for (const index of arrays) {
      concatenatedArr.push(...index);
    }

    return concatenatedArr;
  }
  concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
  concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel() {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return (value *= 2);
    }
  }
  processValue("hello"); // Output: 5
  processValue(10); // Output: 20

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    let expensiveProduct = products[0];

    for (const product of products) {
      if (product.price > expensiveProduct.price) {
        expensiveProduct = product;
      }
    }

    return expensiveProduct;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    }
    return "Weekday";
  }

  getDayType(Day.Monday); // Output: "Weekday"
  getDayType(Day.Sunday); // Output: "Weekend"

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) reject("Error: Negative number not allowed");
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }

  //   squareAsync(4).then(console.log); // Output after 1s: 16
  //   squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
}
