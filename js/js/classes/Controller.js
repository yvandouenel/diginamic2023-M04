export default class Controller {
  /**
   * @constructor
   * @param {View} view 
   * @param {Model} model 
   */
  constructor(view, model) {
    this.view = view;
    this.model = model;

    // Afficher les tâches initiales
    this.view.renderTasks(this.model.tasks)

    // Initier la gestion des événements sur la vue
    // L'argument passé est une référence à la fonction du controller qui
    // va finalement gérer les événement sur les tâches
    this.view.handleTaskEvents(this.handleTaskEvents)
  }
  /**
   * Gère les événements sur la source de l'événement target (une tâche)
   * @param {DOMElement} target 
   */
  handleTaskEvents(target) {
    console.log(`Dans handleTaskEvents du controller`, target);
  }
  
}