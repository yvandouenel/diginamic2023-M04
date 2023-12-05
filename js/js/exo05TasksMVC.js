import { createMarkup } from "./utils/dom.js";
import View from "./classes/View.js";
import Model from "./classes/Model.js";
import Controller from "./classes/Controller.js";

const app = new Controller(new View(), new Model());