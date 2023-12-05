import { createMarkup } from './utils/dom.js';
import Model from './university/Model.js';
import FormCountry from './university/FormCountry.js';
import FormFilter from './university/FormFilter.js';
import University from './university/University.js';


// Création du dom du formulaire de choix des universités
FormCountry.renderForm();

// Création du dom du formulaire de filtre des universités
FormFilter.renderForm();
FormFilter.handleSubmit(handleSubmitFilter);

// Création du wrapper contenant toutes les universités
const wrapperUnivs = createMarkup("section", "", document.getElementById("root"), [{ id: "wrapper-universities" }, { class: "row" }]);



// Mise en place du gestionnaire du submit
/**
 * Fonction anonyme immédiate
 * Permet de récupérer les données du serveur et les stocker dans le Modèle
 * Donne une référence vers la fonction handleSubmitCountry qui sera en charge 
 * de gérer l'événement submit de choix d'un pays
 * @async
 * 
 */
fetch("https://api.api-ninjas.com/v1/motorcycles?make=kawasaki&model=ninja",
    {
      headers: {
        'X-Api-Key': 'VSYygUONMYH2DPET8I8unA==JkViRPZcDute6yTT',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "GET"
    })
    .then(function (res) { return res.json()})
    .then(function (res) { console.log("motos", res) })
    .catch(function (res) { console.log(res) })
(async () => {
  try {
    await FormCountry.handleSubmit(Model.loadUniversities, handleSubmitCountry);
  } catch (error) {
    console.error(`Erreur attrapée : `, error);
  }
})();
/**
 * Gestion de la soumission du formulaire du pays
 */
function handleSubmitCountry() {
  console.log(`dans handleSubmit du controller`);
  // Supression de tous les enfants de wrapperUnivs
  wrapperUnivs.innerHTML = "";
  // La donnée a été chargée, il faut maintenant l'afficher
  Model.universities.forEach(university => {
    new University(university.name, university.web_pages[0], wrapperUnivs);
  });

  // On affiche le formulaire de filtre
  FormFilter.formFilterElt.hidden = false;
}

/**
 * Gestion de la soumission du formulaire de filtre
 */
function handleSubmitFilter(text) {
  console.log(`dans handleSubmitFilter du controller : `, text);
  // Filtre sur la donnée (propriété universities de la classe Model)
  const filteredUnivs = Model.universities.filter(univ => univ.name.toLowerCase().includes(text.toLowerCase()));
  // Supression de tous les enfants de wrapperUnivs
  wrapperUnivs.innerHTML = '';
  // Création des instances de University à partir des données filtrées
  filteredUnivs.forEach(university => {
    new University(university.name, university.web_pages[0], wrapperUnivs);
  });
}


