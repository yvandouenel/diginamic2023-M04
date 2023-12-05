"use strict";
let test = "Hello World!";
function hello(text) {
    return `Hello World ${text}`;
}
hello("1");
const boby = {
    name: "Dylan",
    street: 125,
    friends: ["Josette"],
};
class Base {
    constructor() {
        this._x = 12;
    }
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
class Person {
    constructor(_name, _firstname) {
        this._name = _name;
        this._firstname = _firstname;
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
const tasks = [{ id: 1, title: "Hello", done: true, do: () => { } }];
