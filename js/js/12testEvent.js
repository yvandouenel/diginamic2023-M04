const h1 = document.querySelector("h1");
// Assignation de la référence à une fonction
h1.onclick = () => {
  console.log(`Dans handleClick`);
};
console.log(`h1`, h1);
console.log(`h1.onclick`, h1.onclick);

const digiLink = document.querySelector("a");
digiLink.onclick = (event) => {
  event.preventDefault();
  console.log(`Dans onclickLink`);
  console.log(`event.target`, event.target);
};
const section = document.querySelector("section");
/* section.onclick = (event) => {
  console.log(`test`);
  console.log(`event.target test`, event.target);
}; */
section.addEventListener("click", (event) => {
  console.log(`Dans onclickSection 1`);
  console.log(`event.target`, event.target);
});
section.addEventListener("click", (event) => {
  console.log(`Dans onclickSection 2`);
});