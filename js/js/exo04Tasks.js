import { createMarkup } from "./utils/dom.js";

// Créations des principaux éléments du dom
const form = createMarkup("form", "", document.body, [{ class: "container d-flex align-items-center gap-3 my-5" }]);
const labelTask = createMarkup("label", "Tâche : ", form, [{ for: "input-task" }]);
const inputTask = createMarkup("input", "", form, [{ id: "input-task" }, { type: "text" }]);
const inputSubmit = createMarkup("input", "", form, [{ type: "submit" }, { value: "Envoyer" }, { class: "btn btn-success" }]);

const sectionTasks = createMarkup("section", "", document.body,[{ class: "container d-flex align-items-center gap-3 my-5 flex-wrap" }]);

// Gestion des événements
form.onsubmit = (event) => {
  event.preventDefault();
  const taskText = inputTask.value;

  if (taskText) {
    // Reset sur la value de l'input
    inputTask.value = "";

    // Création des éléments du dom pour chaque tâche
    const sectionTask = createMarkup("section", "", sectionTasks,[{class: "d-flex gap-2 w-100 flex-wrap"}]);
    const titleTask = createMarkup("h3", taskText, sectionTask,[{class: "w-75"}]);
    const btnDelete = createMarkup("button", "Supprimer", sectionTask,[{class: "btn btn-danger"}]);
    const btnValidate = createMarkup("button", "Valider", sectionTask,[{class: "btn btn-warning"}]);

    // Gestion des événements
    /** Gestion de l'événement clic sur le bouton supprimer */
    btnDelete.onclick = () => {
      if (window.confirm("Voulez-vous supprimer cette tâche ?")) {
        sectionTask.remove();
      }

    }
    /** Gestion de l'événement clic sur le bouton valider */
    btnValidate.onclick = () => {
      if (titleTask.style.textDecoration === "line-through") {
        titleTask.style.textDecoration = "none"
        sectionTasks.prepend(sectionTask);
        btnValidate.innerText = "Valider";
      }
      else {
        titleTask.style.textDecoration = "line-through";
        btnValidate.innerText = "Invalider";
        sectionTasks.append(sectionTask);
      }

    }

  }
}

