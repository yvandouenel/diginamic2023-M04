"use strict";
const fruits = ["Cerise", "Pomme"];
console.log(`fruits`, fruits);
console.log(`taille du tableau fruits`, fruits.length);
// push est une méthode impure car elle modifie fruits
fruits.push("Abricot");
console.log(`fruits`, fruits);

// Higher order function : soit la fonction attend une fonction de callback en paramètre soit elle renvoie une fonction

// forEach est une méthode pure car elle ne modifie rien
fruits.forEach(fruit => console.log(`fruit : `, fruit));



// Je veux créer un nouveau tableau à partir de mon tableau "fruits"
// Chaque élément de ce nouveaut tableau sera "entouré" de la balise <li></li>
const fruitsLi = fruits.map(fruit => `<li>${fruit}</li>`);
console.log(`fruitsLi`, fruitsLi);


// Trier par ordre alphabétique mon tableau de fruits
fruits.sort();
console.log(`fruits classés par ordre alphabétique`, fruits);

// Classer les personnes par ordre croissant d'age
const people = [
  { name: "Amstrong", age: 99 },
  { name: "Dylan", age: 78 },
  { name: "Marley", age: 85 },
]
// Toutes les personnes qui ont moins de 90 ans
const youngs = people.filter(person => person.age < 90);
console.log(`youngs`, youngs);
const amstrongIndex = people.findIndex(person => person.name == "Amstrong");
console.log(`amstrongIndex`, amstrongIndex);
console.log(`people sans classement : `, people);
people.sort((a, b) => a.age - b.age);
console.log(`people par ordre d'age : `, people);

// Ajout d'un melon dans une copie du tableau fruits grâce au spread operator
const copyFruits = [...fruits, "Melon"];
console.log(`copyFruits`, copyFruits);
console.log(`fruits`, fruits);

// Attention push ne renvoie pas un tableau. Je ne peux donc pas le chaîner 
// avec une méthode de tableau (sort par exemple)
fruits.push("Banane", "Mangue", "Kiwi");
fruits.sort((fruitA, fruitB) => fruitA.length - fruitB.length);
console.log(`fruits`, fruits);

// Chaînage de 2 méthodes qui renvoient des tableaux
const resultMapSort = fruits.map(fruit => `<li>${fruit}</li>`).sort((fruitA, fruitB) => fruitA.length - fruitB.length);
console.log(`resultMapSort`, resultMapSort);
