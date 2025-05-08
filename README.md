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
