/**
 * 
 * @param {string} brand 
 * @param {string} model 
 * @param {number} weight 
 * @returns Computer
 */
/* function Computer(brand, model, weight) {
  // Propriétés de type string
  this.brand = brand;
  this.model = model;
  // Propriétés de type number
  this.weight = weight;
  console.log(`this`, this);
}
Computer.prototype.os = "linux";
// propriété de type function = méthode
Computer.prototype.askRepare = function() {
  // traitement (ex envoie par email et dans SI du magasin de la demande de répartation)
  console.log(`Entendu, nous avons bien pris en compte votre demande de réparation pour votre ${this.model} de la marque ${this.brand}`);
} */
class Computer {
  constructor(brand, model, weight) {
    // Propriétés de type string
    this.brand = brand;
    this.model = model;
    this.weight = weight;
    
  }
  askRepare() {
    // traitement (ex envoie par email et dans SI du magasin de la demande de répartation)
    console.log(`Entendu, nous avons bien pris en compte votre demande de réparation pour votre ${this.model} de la marque ${this.brand}`);
  } 
}
const c1 = new Computer("Dell", "Optiplex", 5);
console.log(`c1 : `, c1);
// Demande de réparation pour c1
c1.askRepare();

class Laptop extends Computer {
  constructor(brand, model, weight, autonomy){
    super(brand, model, weight);
    this.autonomy = autonomy;
  }
  askRepare() {
    // traitement (ex envoie par email et dans SI du magasin de la demande de répartation)
    console.log(`Entendu, nous avons bien pris en compte votre demande de réparation pour votre Laptop ${this.model} de la marque ${this.brand}`);
  } 
  changeBattery() {
    console.log(`Entendu, nous avons bien pris en compte votre demande de changement de batterie pour votre Laptop ${this.model} de la marque ${this.brand}`);
  }
}

const c2 = new Laptop("Lenovo", "T450", 3, "5h");
console.log(`c2 : `, c2);
// Demande de réparation pour c1
c2.askRepare();
c2.changeBattery();

class Circle {
  static pi = 3.14;//propriété de classe
  #radius;
  constructor(name, radius) {
    this.name = name;
    this.radius = radius;
  }
  get radius() {
    console.log(`Dans le getter de radius`);
    return this.#radius;
  }
  set radius(value) {
    console.log(`Dans setter de radius. value : `, value);
    // Permet de faire tous les contrôles dont j'ai besoin
    this.#radius = value;
  }
  area(){
    console.log(`Aire de ${this.name } ${Circle.pi * this.radius **2}`);;
  }

}
const litleCircle = new Circle("petit cercle ", 2);
const bigCircle = new Circle("grand cercle ", 4);
litleCircle.area();

litleCircle.radius = 15;
console.log(`litleCircle.radius`, litleCircle.radius);
// objet littéral avec de propriétés et des valeurs
const jc = {
  nom: "Dusse",
  prenom: "Jean-Claude",
  sePresenter: function(){
    console.log("Bonjour, je m'appelle " +
    this.prenom + " " + this.nom);
  }
}
console.log(`nom de jc`, jc["nom"]);
for(let key in jc) {
  // On peut utiliser la syntaxe des tableaux associatifs
  console.log(key, jc[key]);
}