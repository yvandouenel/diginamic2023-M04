let test: string = "Hello World!";

function hello(text: string): string {
  return `Hello World ${text}`;
}
hello("1");

type contact = {
  name: string;
  street: number;
  friends?: string[];
};
const boby: contact = {
  name: "Dylan",
  street: 125,
  friends: ["Josette"],
};

class Base {
  private _x = 12;
  get x() {
    // Je vais vérifier si l'utilisateur a bien le droit de voir cette propriété
    console.log(`DAns le getter`);
    return this._x;
  }
  set x(num) {
    // Je vais vérifier si l'utilisateur a bien le droit de voir cette propriété
    console.log(`Dans le setter`);
    this._x = num;
  }
}
const b = new Base();
b.x = 123;
console.log(b.x);

interface PersonInterface {
  name: string;
}
interface F {
  firstname: string;
}

class Person implements PersonInterface, F {
  constructor(private _name: string, private _firstname: string) {
    // No body necessary
  }
  get name() {
    return this._name;
  }
  get firstname() {
    return this._firstname;
  }
}
const p = new Person("Titi", "Robert");
console.log(p.name);

interface Task {
  id: number;
  title: string;
  done: boolean;
  do: Function;
}

const tasks: Task[] = [{ id: 1, title: "Hello", done: true, do: () => {} }];
