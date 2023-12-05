import { createMarkup } from "../utils/dom.js";
export default class University {
  constructor(name, url, wrapper) {
    this.name = name;
    this.url = url;
    this.wrapper = wrapper;

    this.render();
  }
  render() {
    console.log(`dans le render de university`);
    const div_wrapper = createMarkup("div", "", this.wrapper, [{class:"col-md-3 g-3"}]);
    const section = createMarkup("section", "", div_wrapper, [{class:"border rounded border-secondary p-3 h-100"}]);
    const h2 = createMarkup("section", this.name, section);
    const link = createMarkup("a", this.url, section, [{href: this.url}]);
  }
}