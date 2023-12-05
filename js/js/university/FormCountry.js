import { createMarkup } from "../utils/dom.js";
export default class FormCountry {
  static countries = [
    { France: "France" },
    { Germany: "Allemagne" },
    { Spain: "Espagne" },
  ];
  static formElt = null;

  static renderForm() {
    FormCountry.formElt = createMarkup("form", "", document.getElementById("root"), [{ class: "my-5" }]);
    const label = createMarkup("label", "Pays", FormCountry.formElt, [{ class: "form-label" }]);
    const select = createMarkup("select", "", FormCountry.formElt, [{ id: "select-contry" },{ class: "form-select w-50" }]);
    FormCountry.countries.forEach(country => {
      for (let key in country) {
        console.log(`key`, key);
        createMarkup("option", country[key], select, [{ value: key }]);
      }
    })

    const buttonSubmit = createMarkup("input", "", FormCountry.formElt, [{ type: "submit" }, { value: "Envoyer" }, {class:"btn btn-primary my-2"}]);

  }
  static async handleSubmit(handler, handleSubmit) {
    FormCountry.formElt.addEventListener("submit", async (event) => {
      console.log(`Dans handleSubmit`);
      event.preventDefault();
      const country = document.getElementById("select-contry").value;
      await handler(country, handleSubmit);
    })
  }

}