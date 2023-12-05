/**
   * Crée un élément du dom, lui ajoute du texte, le place comme dernier
   * enfant de parent et ajoute un attribut en utilisant le paramètre attributes
   * @param {String} markup_name 
   * @param {String} text 
   * @param {domElement} parent 
   * @param {Array[Object]} attributes  (doit comprendre les propriétés name et value)
   * @returns domElement
   */
function createMarkup(markupname, text, parent, attributes = []) {
  const markup = document.createElement(markupname);
  markup.textContent = text;
  parent.appendChild(markup);
  for (const attribute of attributes) {
    for (let key in attribute) {
      markup.setAttribute(key, attribute[key]);
    }
  }
  return markup;
}
let cpt = 0;
const button = createMarkup("button", "Ajouter un paragraphe", document.body);
const section = createMarkup("section", "", document.body);

button.addEventListener("click", () => {
  cpt ++;
  const p = createMarkup("p", "Lorem ipsum " + cpt, section);
  const buttonDelete = createMarkup("button", "Supprimer", p);
  buttonDelete.onclick = () => {
    p.remove();
  }
});