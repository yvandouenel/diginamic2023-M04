/* let body = window.document.body;
console.log(`body`, body);
console.log(`typeof body `, typeof (body));
//body.remove();
//body.hidden = true;
body.innerHTML = "<h1>Hello World</h1>";
body.style.backgroundColor = "red"
body.className = "container"
body.id = "body" */

// Récupértion de la référence de l'élément du DOM via getElementById
const h21 = document.getElementById("h2-1");
const h22 = document.getElementById("h2-2");
h21.animate([
  {
    fontSize: '1.5em',
  },
  {
    fontSize: '3em',
  },
  {
    fontSize: '1.5em',
  },
], {
  // temporisation
  duration: 2000,
  easing: 'ease-in-out',
  iterations: Infinity
});
h22.animate([
  {
    fontSize: '1.5em',
  },
  {
    fontSize: '3em',
  },
  {
    fontSize: '1.5em',
  },
], {
  // temporisation
  duration: 2000,
  easing: 'ease',
  iterations: Infinity
});

// querySelector va chercher la référence du premier élément du dom qui correspond au selecteur
const firstLi = document.querySelector("header > nav > ul > li:nth-child(3) > a");
firstLi.style.color = "red";

// création d'un élément du dom
const p = document.createElement("p");
p.innerText = "Texte de mon paragraphe";
document.body.appendChild(p);

