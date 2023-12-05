const bob = {
  "firstname": "Bob",
  "lastname": "Dylan",
}
//const boby = bob;// copie par référence

// Pour faire une copie de bob
const boby = { ...bob, firstname: "Boby", age: 78 };// copie par valeur

console.log(`bob`, bob);
console.log(`boby`, boby);
