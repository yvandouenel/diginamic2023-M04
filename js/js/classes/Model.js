export default class Model {
  /**
   * @constructor
   */
  constructor() {
    this.tasks = [
      { id: 1, label: "Faire le ménage", done: false },
      { id: 2, label: "Faire les courses", done: true },
    ]
  }
  /**
   * Ajout d'une task
   */
  addTask() {
    console.log(`Dans addTask`);
  }
}