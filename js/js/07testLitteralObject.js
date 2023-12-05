// object littéral avec la syntaxe json
const bob = {
  "firstname": "Bob",
  "lastname": "Dylan",
}
function introduceMySelf() {
  console.log(`this`, this);
  console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}`);
}
console.log(`bob`, bob);
bob.introduceMySelf();
//introduceMySelf();