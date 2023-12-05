import { createMarkup } from "../utils/dom.js";
export default class View {
  /**
   * @constructor
   */
  constructor() {
    // élément racine du DOM qui contiendra toute l'application
    this.rootDom = document.getElementById("root");
    // éléments du DOM immuable de l'application
    this.constDomElements = this.renderConstElts();
  }
  /**
   * Affiche les éléments immuable de l'application
   * formulaire + wrapper de la liste des tâches
   * 
   * @returns Object objet littéral qui contient des références vers tous les éléments du dom dont on devra 
   * gérer les événements
   */
  renderConstElts() {
    // Créations des principaux éléments du dom
    const form = createMarkup("form", "", this.rootDom, [{ class: "container d-flex align-items-center gap-3 my-5" }]);

    const labelTask = createMarkup("label", "Tâche : ", form, [{ for: "input-task" }]);

    const inputTask = createMarkup("input", "", form, [{ id: "input-task" }, { type: "text" }]);

    const inputSubmit = createMarkup("input", "", form, [{ type: "submit" }, { value: "Envoyer" }, { class: "btn btn-success" }]);

    const sectionTasks = createMarkup("section", "", this.rootDom, [{ class: "container d-flex align-items-center gap-3 my-5 flex-wrap" }]);

    return {
      form,
      labelTask,
      inputTask,
      inputSubmit,
      sectionTasks,
      tasksElts: []
    }
  }
  /**
   * Affiche les tâches qui sont contenues dans le tableau tasks
   * Stocke les éléments du dom créés dans le tableau this.constDomElements.tasksElts
   * @param {Array} tasks 
   */
  renderTasks(tasks) {
    tasks.forEach(task => {
      const validateCssTask = task.done ? "text-decoration-line-through" : "";
      const validateLabelTask = task.done ? "Invalider" : "Valider";

      const taskElt = createMarkup("section", "", this.constDomElements.sectionTasks, [{ class: "d-flex gap-2 w-100 flex-wrap" }]);
      const titleTask = createMarkup("h3", task.label, taskElt, [{ class: "w-75 " + validateCssTask }]);
      const btnDelete = createMarkup("button", "Supprimer", taskElt, [{ class: "btn btn-danger" }]);
      const btnValidate = createMarkup("button", validateLabelTask, taskElt, [{ class: "btn btn-warning" }]);
      this.constDomElements.tasksElts.push(taskElt);
    })
  }
  /**
   * Gère les événement qui se produisent sur une tâche 
   * soit le clic sur valider, soit le clic sur supprimer
   * @param {Function} handler est une fonction de callback 
   * qui est une référence vers le handler du controller
   * @returns void
   */
  handleTaskEvents(handler){
    console.log(`Dans handleTaskEvents de la vue`, handler);
    this.constDomElements.tasksElts.forEach(task => {
      task.onclick = event => {
        handler(event.target);
        // Faire un switch case pour choisir ce qui a été cliqué (delete ou validate)
        // Envoyer l'info au model pour le modifier
        // Relancer renderTasks (via la vue) 
      }
    })
  }
}