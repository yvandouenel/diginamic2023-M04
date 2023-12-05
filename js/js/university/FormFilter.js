import { createMarkup } from "../utils/dom.js";
export default class FormFilter {
  static formFilterElt = null;
  static renderForm() {
    FormFilter.formFilterElt = createMarkup("form", "", document.getElementById("root"));
    const wrapperForm =  createMarkup("div", "", FormFilter.formFilterElt , [{ class: "d-flex gap-2" }]);
    const label = createMarkup("label", "Filtre : ", wrapperForm, [{ class: "form-label" }]);
    const input = createMarkup("input", "", wrapperForm, [{ id: "filter-univs" }]);
    const buttonSubmit = createMarkup("input", "", wrapperForm, [{ type: "submit" }, { value: "Filtrer" }, {class: "btn btn-success"}]);
    FormFilter.formFilterElt.hidden = true;
  }
  static handleSubmit(handler) {
    FormFilter.formFilterElt.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(`Dans handleSubmit de FormFilter`);
      handler(document.getElementById("filter-univs").value);
    })
  }
}