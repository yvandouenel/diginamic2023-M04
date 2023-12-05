// Fonction anonyme immédiate IIFES
const caddy = (function(){
  // le code est isolé ici. Aucune des variables déclarées ici ne seront accessibles de l'extérieur
  let amount = 250;
  function getAmount() {
    return amount;
  }
  function setAmount(a) {
    amount = a;
  }
  return {
    getAmount,
    setAmount
  };
})();
console.log(`Montant du caddy : `, caddy.getAmount());
caddy.setAmount(500);
console.log(`Montant du caddy : `, caddy.getAmount());


