### What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

### Enums

Enums in TypeScript are used to define a set of named constants. Enums make code more readable and maintainable by giving friendly names to sets of numeric or string values. Enums are especially useful when dealing with a fixed set of options—like days of the week, directions, user roles, etc.
Enums make code easier to read by using clear names instead of random numbers or strings. TypeScript lets us use both numbers and strings in enums.

### Example of Enums

```bash
enum Status{
    Active="active",
    Inactive="inactive",
}
const userStatus:Status = Status.Active;

enum Direction {
  North,
  East,
  South,
  West
}

const dir: Direction = Direction.South;

```

### Explain the difference between any, unknown, and never types in TypeScript.

TypeScript provides powerful tools for handling complex data structures, and two of the most useful concepts in this regard are Union Types and Intersection Types. These types allow us to combine multiple types in various ways, giving us flexibility and type safety when dealing with more complex data.

### Union Types:

Union types allows us to define a variable that can hold multiple types. It means that a value can be one of several types, and we can specify these possible types using the | operator.

### Example of Union

```bash
type Color = "Red" | "Blue";
const favoriteColor: Color = "Red";

function showColor(color: Color) {
    console.log(`Your favorite color is ${color}.`);
}

showColor("Blue");

Type Vehicle = {
model: string;
wheel: "4 wheel" | "3 wheel";
}

const cng: Vehicle = {
model: 'CNG',
wheel: '4 wheel'
}

```

### Intersection

Intersection types are used when you want to combine multiple types into one. A variable with an intersection type must satisfy all the types it intersects. We can think of intersection types as an "AND" between types. That means we have to intersect every property of both types

### Example of Intersection

```bash
interface Person {
  name: string;
  age: number;
}

interface Worker {
  jobTitle: string;
  salary: number;
}

type Employee = Person & Worker;

const employee: Employee = {
  name: "Md Akther Hosen",
  age: 20,
  jobTitle: "Jr. Web Developer",
  salary: 80000
};

```
